import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";

export default function AccountCreated() {
    return (
        <>
            <Header />
            <section className="main-layout font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap pt-10 justify-center">
                        <div className="w-full px-[15px] md:px-0 md:w-[435px] md:max-w-[435px] flex-none">
                            <FormWrapper
                                logoSrc="/images/success-icon.png"
                                logoAlt="Account Created"
                                heading="Account Created!"
                            >
                                <p className="text-center text-sm mb-6 mt-3 px-1">Congratulations, your account has been successfully created.</p>
                                {/* Sign In Button */}
                                <Button type="submit" className="btn-bg w-full">Continue to Sign in</Button>
                            </FormWrapper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
