import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import Link from "next/link";
import InfoCard from "@/components/shared/InfoCard";

export default function SelectOption() {
    return (
        <>
            <Header />
            <section className="main-layout font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap pt-10 justify-center">
                        <div className="w-full px-[15px] md:px-0 md:w-[805px] md:max-w-[805px] flex-none">
                            <FormWrapper
                                logoSrc="/images/qr-logo.png"
                                logoAlt="Quickrooms Logo"
                                heading="How would you like to get started?"
                                className="mb-5"
                            >
                                <p className="text-[15px] text-center mb-6">To digitize your hotel operationsstraight away, add the required information to your business profile. Or start by inviting your team to setup</p>
                                <div className="flex flex-col md:flex-row gap-[20px]">
                                    <InfoCard
                                        linkHref="#"
                                        imgSrc="/images/create-hotel.png"
                                        imgAlt="Create-a-hotel"
                                        label="Create a hotel"
                                        iconSrc="/images/information.png"
                                        iconAlt="information"
                                        title="What information will I need?"
                                        description="You will be asked to provide standard business details, reward program and set up your payment remittance account."
                                    />
                                    <InfoCard
                                        linkHref="#"
                                        imgSrc="/images/invite-team.png"
                                        imgAlt="invite-your-team"
                                        label="Invite your team"
                                        iconSrc="/images/Clock.png"
                                        iconAlt="Clock"
                                        title="How long does it take?"
                                        description="It takes 3-5 minutes to setup your hotel or hostel and start operating more efficiently."
                                    />
                                </div>
                            </FormWrapper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
