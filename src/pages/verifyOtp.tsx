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
                    <div className="flex flex-wrap pt-10">
                        {/* <!-- Left Section --> */}
                        <div className="w-full mb-8 lg:mb-0 px-[15px] flex-1 max-w-full">
                            <div className="md:pt-20 md:pr-16 form-detail">
                                <h2 className="text-xl font-bold m-0 mb-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                                <p className="mb-2.5">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,                 </p>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.                 </p>
                            </div>
                        </div>
                        {/* <!-- Right Section --> */}
                        <FormWrapper
                            logoSrc="/images/logo.png"
                            logoAlt="Quickrooms Logo"
                            heading="Verify OTP"
                            className="mb-5"
                        >
                            <p className="text-center text-sm mb-6 mt-3">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                            {/* OTP input */}
                            <OTPInput length={6} onChange={handleOTPChange} />
                            <Button type="submit" className="btn-bg" onClick={handleSubmit}>Verify</Button>
                        </FormWrapper>
                    </div>
                </div>
            </section>
        </>
    );
}
