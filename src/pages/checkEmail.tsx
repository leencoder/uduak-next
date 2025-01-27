import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import Link from "next/link";

export default function CheckEmail() {
    return (
        <>
            <Header />
            <section className="main-layout font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap pt-10 justify-center">
                        <div className="w-full px-[15px] md:px-0 md:w-[435px] md:max-w-[435px] flex-none">
                            <FormWrapper
                                logoSrc="/images/email-icon.png"
                                logoAlt="Email"
                                heading="Check your Email"
                            >
                                <p className="text-center text-sm mb-6 mt-3">We have sent a reset link to <Link href="mailto:johndoe@gmail.com" className="font-bold">johndoe@gmail.com</Link></p>
                                {/* Sign In Button */}
                                <Button type="submit" className="btn-bg mb-5 w-full">Open Email</Button>
                                <p className="text-center text-sm">Didn't receive the email? Click to <Link href="#" className="theme-color">resend</Link></p>
                            </FormWrapper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
