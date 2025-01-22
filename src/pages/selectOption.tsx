import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import Link from "next/link";

export default function SelectOption() {
    return (
        <>
            <Header />
            <section className="main-layout font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap pt-10 justify-center">
                        <FormWrapper
                            logoSrc="/images/logo.png"
                            logoAlt="Quickrooms Logo"
                            heading="How would you like to get started?"
                            className="mb-5"
                        >
                            <p className="text-[14px] text-center mb-6">To digitize your hotel operationsstraight away, add the requiredi nformation to your business profile. Or start by inviting your team to setup</p>
                            {/* Sign In Button */}
                            <div className="flex flex-col md:flex-row gap-3">
                                {/* <!-- First Column --> */}
                                <div className="w-full md:w-1/2">
                                    <Link href="#" className="block">
                                        <div className="relative">
                                            <img src="/images/Create-a-hotel.jpg" alt="Create-a-hotel" className="w-full h-auto rounded-[6px]" />
                                            <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-black to-transparent opacity-95 z-10 rounded-b-[6px]"></div>
                                            <div className="absolute bottom-1 left-1 text-white z-20">
                                                <p className="text-xs text-[14px]">Create a hotel</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <img src="/images/information.png" alt="information" className="mt-4" />
                                    <h3 className="text-[16px] font-bold mt-2 text-[14px] leading-[18px]">What information will I need?</h3>
                                    <p className="mt-2 text-[14px]">You will be asked to provide standard business details, reward program and set up your payment remittance account.</p>
                                </div>
                                {/* <!-- Second Column --> */}
                                <div className="w-full md:w-1/2">
                                    <Link href="#" className="block">
                                        <div className="relative">
                                            <img src="/images/invite-your-team.jpg" alt="invite-your-team" className="w-full h-auto rounded-[6px]" />
                                            <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-black to-transparent opacity-95 z-10 rounded-b-[6px]"></div>
                                            <div className="absolute bottom-1 left-1 text-white z-20">
                                                <p className="text-xs text-[14px]">Invite your team</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <img src="/images/Clock.png" alt="Clock" className="mt-4" />
                                    <h3 className="text-[16px] font-bold mt-2 text-[14px] leading-[18px]">How long does it take?</h3>
                                    <p className="mt-2 text-[14px]">It takes 3-5 minutes to setup your hotel or hostel and start operating more efficiently.</p>
                                </div>
                            </div>
                        </FormWrapper>
                    </div>
                </div>
            </section>
        </>
    );
}
