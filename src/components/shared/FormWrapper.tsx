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
        <div className="w-full px-[15px] md:px-0 w-[420px] md:max-w-[400px] flex-none">
            <div className="form-wrapper bg-white p-[20px] sm:p-[35px] shadow-2xl rounded-md relative overflow-hidden">
                <form>
                    <div className={`logo text-center ${className}`}>
                        <Link href="#" className="block justify-items-center">
                            <img src={logoSrc} alt={logoAlt} />
                        </Link>
                        <h1 className="main-heading text-[22px] font-bold mt-5 leading-[26px] text-[#222222]">{heading}</h1>
                    </div>
                    {children}
                </form>
            </div>
        </div>
    );
}
