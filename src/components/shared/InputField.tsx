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
        <div className="icon-input flex items-center border-b py-3 px-1 mb-5">
            <img src={iconSrc} alt="" className="mr-3" />
            <input
                type={type}
                className="form-control flex-1 outline-none text-sm"
                placeholder={placeholder}
                aria-label={ariaLabel}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
