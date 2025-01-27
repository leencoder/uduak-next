import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import InputField from "@/components/shared/InputField";
import Link from "next/link";
import React, { useState } from 'react';
import OTPInput from "@/components/shared/OtpInput";


export default function VerifyOtp() {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));

    const handleOTPChange = (value: string[], index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value.join('');
        setOtp(newOtp);

        // Automatically focus on the next input
        const nextInput = document.querySelector<HTMLInputElement>(
            `input:nth-child(${index + 2})`
        );
        if (nextInput && value) {
            nextInput.focus();
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent the page reload
        console.log("Form submitted!");
        console.log('Entered OTP:', otp.join(''));
    };
    return (
        <>
            <Header />
            <section className="main-layout font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap pt-10 justify-center">
                        {/* <!-- Right Section --> */}
                        <div className="w-full px-[15px] md:px-0 md:w-[435px] md:max-w-[435px] flex-none">
                            <FormWrapper
                                logoSrc="/images/qr-logo.png"
                                logoAlt="Quickrooms Logo"
                                heading="Verify OTP"
                                className="mb-5"
                            >
                                <p className="text-center text-sm mb-6 mt-3">We will send you a One Time Password on your phone number</p>
                                {/* OTP input */}
                                <OTPInput length={6} onChange={handleOTPChange} />
                                <Button type="submit" className="btn-bg w-full" onClick={handleSubmit}>Continue</Button>
                            </FormWrapper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
