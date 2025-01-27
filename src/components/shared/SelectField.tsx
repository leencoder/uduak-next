import React from "react";

interface Option {
    value: string;
    label: string;
    flagSrc: string;
}

interface SelectFieldProps {
    options: Option[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
}

export default function SelectField({
    options,
    value,
    onChange,
    placeholder = "Select an option",
}: SelectFieldProps) {
    return (
        <div className="select-field relative w-full border-b py-3 mb-3">
            <div className="flex items-center">
                {/* Flag Image */}
                {value && options.find((option) => option.value === value)?.flagSrc && (
                    <img
                        src={options.find((option) => option.value === value)?.flagSrc}
                        alt="Flag"
                        className="w-5 max-w-[20px] flex-shrink-0 flex-grow-0 basis-5"
                    />
                )}
                <select
                    value={value}
                    onChange={onChange}
                    className="form-select flex-1 outline-none bg-transparent text-sm max-w-full w-full"
                >
                    {placeholder && !value && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
