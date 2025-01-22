import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import InputField from "@/components/shared/InputField";

export default function ForgotUsername() {
    return (
        <>
            <Header />
            <section className="main-layout font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap pt-10 justify-center">
                        <FormWrapper
                            logoSrc="/images/logo.png"
                            logoAlt="Quickrooms Logo"
                            heading="Let's get you into your account"
                        >
                            <p className="text-sm mt-5">Tell us one of the following to get started.</p>
                            <ol className="list-disc text-sm ms-5 my-2">
                                <li className="mb-1">Sign-in email address or mobile number</li>
                                <li className="mb-1">Recovery phone number</li>
                                <li className="mb-1">Recovery email address</li>
                            </ol>
                            <InputField
                                type="text"
                                placeholder="Email or Phone"
                                iconSrc="/images/email.png"
                                ariaLabel="Email or Phone"
                            />
                            {/* Sign In Button */}
                            <Button type="submit" className="btn-bg">Continue</Button>
                        </FormWrapper>
                    </div>
                </div>
            </section>
        </>
    );
}
