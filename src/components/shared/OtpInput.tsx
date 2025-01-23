import React, { ChangeEvent, KeyboardEvent, ClipboardEvent } from 'react';

interface OTPInputProps {
    length: number;
    onChange: (value: string[], index: number) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (/^[0-9]$/.test(value) || value === '') {
            onChange(value.split(''), index);
            const nextInput = document.querySelector<HTMLInputElement>(
                `input:nth-child(${index + 2})`
            );
            if (nextInput && value) {
                nextInput.focus();
            }
        } else {
            e.target.value = '';
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (
            !(
                (e.key >= '0' && e.key <= '9') ||
                e.key === 'Backspace' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Delete' ||
                e.key === 'Tab'
            )
        ) {
            e.preventDefault();
        }

        if (e.key === 'Delete' || e.key === 'Backspace') {
            const inputs = document.querySelectorAll<HTMLInputElement>('input');
            const currentInput = e.target as HTMLInputElement;
            const currentIndex = Array.from(inputs).indexOf(currentInput);

            if (e.key === 'Backspace' && currentInput.value === '' && currentIndex > 0) {
                const previousInput = inputs[currentIndex - 1];
                previousInput.value = '';
                previousInput.focus();
            }
        }
    };


    const handlePaste = (e: ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        const clipboardData = e.clipboardData.getData('Text');

        if (/^[0-9]+$/.test(clipboardData)) {
            const values = clipboardData.split('').slice(0, length);

            values.forEach((value, index) => {
                const input = document.querySelector<HTMLInputElement>(
                    `input:nth-child(${index + 1})`
                );
                if (input) {
                    input.value = value;
                    onChange(values, index);
                }
            });
            const nextInput = document.querySelector<HTMLInputElement>(
                `input:nth-child(${values.length + 1})`
            );
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const inputs = Array.from({ length }, (_, index) => (
        <input
            key={index}
            type="password"
            maxLength={1}
            className="w-10 h-10 md:w-12 md:h-12 border-b border-gray-300 text-center text-lg font-semibold focus:outline-none focus:border-[#db5aa4]"
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
        />
    ));

    return (
        <div
            className="flex flex-wrap justify-between mb-6"
            onPaste={handlePaste}
        >
            {inputs}
        </div>
    );
};

export default OTPInput;
