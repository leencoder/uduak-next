interface InputFieldProps {
    type: string;
    placeholder: string;
    iconSrc: string;
    ariaLabel: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
    type,
    placeholder,
    iconSrc,
    ariaLabel,
    value,
    onChange,
}: InputFieldProps) {
    return (
        <div className="icon-input flex items-center mb-3">
            <input
                type={type}
                className="form-control flex-1 outline-none text-sm border-b py-3 focus:border-b-[#db5aa4] placeholder:text-[#222222]"
                placeholder={placeholder}
                aria-label={ariaLabel}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
