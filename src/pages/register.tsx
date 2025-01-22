import Link from "next/link";
import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import InputField from "@/components/shared/InputField";
import { useEffect, useState } from "react";
import SelectField from "@/components/shared/SelectField";

export default function Register() {
    const [countries, setCountries] = useState<{ value: string; label: string; flagSrc: string }[]>([]);
    const [selectedCountry, setSelectedCountry] = useState("united states");

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
                const data = await response.json();
                const countryOptions = data.map((country: { name: { common: string; }; flags: { png: any; }; }) => ({
                    value: country.name.common.toLowerCase(),
                    label: country.name.common,
                    flagSrc: country.flags.png,
                }));

                setCountries(countryOptions);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, []);


    // Handle country selection
    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.target.value);
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
                                <ul>
                                    <li className="mb-5">
                                        <h4 className="border-l ps-4 border-[#db5aa4] leading-none mb-2">Lorem ipsum dolor sit amet</h4>
                                        <p className="ps-5 text-[15px] leading-6">Et harum quidem rerum facilis est et expedita distinctio.</p>
                                    </li>
                                    <li className="mb-5">
                                        <h4 className="border-l ps-4 border-[#db5aa4] leading-none mb-2">Sed ut perspiciatis unde</h4>
                                        <p className="ps-5 text-[15px] leading-6">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                                    </li>
                                    <li className="mb-5">
                                        <h4 className="border-l ps-4 border-[#db5aa4] leading-none mb-2">At vero eos et accusamus</h4>
                                        <p className="ps-5 text-[15px] leading-6">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Right Section --> */}
                        <FormWrapper
                            logoSrc="/images/logo.png"
                            logoAlt="Quickrooms Logo"
                            heading="Create Quickrooms Account"
                            className="mb-5"
                        >
                            <InputField
                                type="email"
                                placeholder="Email"
                                iconSrc="/images/email.png"
                                ariaLabel="Email"
                            />
                            <InputField
                                type="text"
                                placeholder="Full Name"
                                iconSrc="/images/user-icon.png"
                                ariaLabel="Full Name"
                            />
                            <InputField
                                type="password"
                                placeholder="Password"
                                iconSrc="/images/lock.png"
                                ariaLabel="Password"
                            />
                            <SelectField
                                options={countries}
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                placeholder="Select your country"
                            />
                            {/* Sign In Button */}
                            <Button type="submit" className="btn-bg">Create an account</Button>
                            <div className="flex justify-between items-center mb-5">
                                <div className="form-check flex">
                                    <input
                                        className="form-check-input w-5 h-5 border-gray-200"
                                        type="checkbox"
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label ml-1 text-xs"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Get emails from Quickrooms about updated, news and
                                        events. You can <Link href="#" className="theme-color">unsubscribe</Link> at any time. <Link href="#" className="theme-color">Privacy Policy</Link>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-12 text-center"><p className="absolute w-full left-0 bottom-0 mt-5 min-h-[50px] flex items-center justify-center mb-0 bg-[#f6fafd] text-[13px]">Already have an account? <Link href="#" className="theme-color ms-1">Sign in</Link></p></div>
                        </FormWrapper>
                    </div>
                </div>
            </section>
        </>
    );
}
