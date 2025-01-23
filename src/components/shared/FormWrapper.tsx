import Link from "next/link";
import { ReactNode } from "react";

interface FormWrapperProps {
    logoSrc: string;
    logoAlt?: string;
    heading: string;
    children: ReactNode;
    className?: string;
}

export default function FormWrapper({
    logoSrc,
    logoAlt = "logo",
    className = "",
    heading,
    children,
}: FormWrapperProps) {
    return (
        <div className="w-full px-[15px] md:px-0 w-[435px] md:max-w-[435px] flex-none">
            <div className="form-wrapper bg-white p-[20px] sm:p-[52px] shadow-[0px_0px_24.92px_3.08px_rgba(0,0,0,0.09)] rounded-md relative overflow-hidden">
                <form>
                    <div className={`logo text-center ${className}`}>
                        <Link href="#" className="block justify-items-center">
                            <img src={logoSrc} alt={logoAlt} />
                        </Link>
                        <h1 className="main-heading text-[22px] font-bold mt-10 leading-[26px] text-[#222222]">{heading}</h1>
                    </div>
                    {children}
                </form>
            </div>
        </div>
    );
}
