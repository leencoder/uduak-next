import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

export default function Button({
    type = "button",
    className = "",
    onClick,
    children,
}: ButtonProps) {
    return (
        <button
            type={type}
            className={`btn rounded ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
