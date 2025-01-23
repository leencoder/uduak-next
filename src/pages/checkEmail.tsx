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
                        <FormWrapper
                            logoSrc="/images/email-icon.png"
                            logoAlt="Email"
                            heading="Check your Email"
                        >
                            <p className="text-center text-sm mb-6 mt-3">We have sent a reset link to <Link href="mailto:johndoe@gmail.com" className="font-bold">johndoe@gmail.com</Link></p>
                            {/* Sign In Button */}
                            <Button type="submit" className="btn-bg mb-5">Open Email</Button>
                            <p className="text-center text-sm">Didn't receive the email? Click to <Link href="#" className="theme-color">resend</Link></p>
                            <div className="mt-12 text-center"><p className="absolute w-full left-0 bottom-0 mt-5 min-h-[50px] flex items-center justify-center mb-0 bg-[#f6fafd] text-[13px]">Back to<Link href="#" className="theme-color ms-1">Sign in</Link></p></div>
                        </FormWrapper>
                    </div>
                </div>
            </section>
        </>
    );
}
