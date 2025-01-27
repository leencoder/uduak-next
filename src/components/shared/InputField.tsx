import React, { useState } from "react";

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
    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const validatePassword = (password: string) => {
        // Example criteria: Minimum 8 characters, includes a number and special character
        const isValid =
            password.length >= 8 &&
            /\d/.test(password) && // Contains at least one digit
            /[!@#$%^&*]/.test(password); // Contains at least one special character
        setIsValid(isValid);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event); // Propagate change
        if (type === "password") validatePassword(event.target.value); // Validate password
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div className="icon-input flex flex-col items-start mb-3 relative">
            {/* Input field */}
            <div className="w-full flex items-center relative">
                <input
                    type={type === "password" && showPassword ? "text" : type} // Toggle type for password
                    className="form-control flex-1 outline-none text-sm border-b py-3 focus:border-b-[#db5aa4] placeholder:text-[#222222]"
                    placeholder={placeholder}
                    aria-label={ariaLabel}
                    value={value}
                    onChange={handleChange}
                />
                {/* Eye icon for password field */}
                {type === "password" && value && value.length > 0 && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 cursor-pointer bg-transparent border-none"
                        aria-label="Toggle password visibility"
                    >
                        <img
                            src={showPassword ? "/images/close-eye.png" : "/images/eye-icon.png"}
                            alt={showPassword ? "Hide password" : "Show password"}
                            className="w-[18px]"
                        />
                    </button>
                )}
            </div>
            {/* Validation lines */}
            {type === "password" && value && value.length > 0 && (
                <div className="w-full flex mt-2 gap-[10px]">
                    {/* First bar: at least one condition is true */}
                    <div
                        className={`h-[2px] flex-1 ${value.length > 0 || value.length >= 8 || /\d/.test(value) ? "bg-[#2b8703]" : "bg-[#999999]"
                            }`}
                    ></div>

                    {/* Second bar: at least two conditions are true */}
                    <div
                        className={`h-[2px] flex-1 ${(value.length >= 8 && /\d/.test(value)) ||
                            (value.length > 0 && /\d/.test(value)) ||
                            (value.length > 0 && value.length >= 8)
                            ? "bg-[#2b8703]"
                            : "bg-[#999999]"
                            }`}
                    ></div>

                    {/* Third bar: all three conditions are true */}
                    <div
                        className={`h-[2px] flex-1 ${value.length > 0 && value.length >= 8 && /\d/.test(value) ? "bg-[#2b8703]" : "bg-[#999999]"
                            }`}
                    ></div>
                </div>
            )}

            {/* Validation message */}
            {type === "password" && value && value.length > 0 && (
                <div className="flex mt-3 items-center gap-1">
                    <img src="images/tick-icon.png" alt="" className="flex-none" />
                    <p
                        className={"text-[10px] text-[#222222]"}
                    >
                        Include multiple words and phrases to make it more secure
                    </p>
                </div>

            )}
        </div>
    );
}
