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
    const [passwordValue, setPasswordValue] = useState("");

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
                                        <h4 className="mb-2 font-bold">Lorem ipsum dolor sit amet</h4>
                                        <p className="text-[15px] leading-6">Et harum quidem rerum facilis est et expedita distinctio.</p>
                                    </li>
                                    <li className="mb-5">
                                        <h4 className="mb-2 font-bold">Sed ut perspiciatis unde</h4>
                                        <p className="text-[15px] leading-6">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                                    </li>
                                    <li className="mb-5">
                                        <h4 className="mb-2 font-bold">At vero eos et accusamus</h4>
                                        <p className="text-[15px] leading-6">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Right Section --> */}
                        <div className="w-full px-[15px] md:px-0 md:w-[435px] md:max-w-[435px] flex-none">
                            <FormWrapper
                                logoSrc="/images/qr-logo.png"
                                logoAlt="Quickrooms Logo"
                                heading="Create a Quickrooms account"
                                className="mb-4"
                            >
                                <p className="text-center text-[15px] mb-4 font-medium">Access all that Quickrooms has to offer with
                                    a single account.</p>

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
                                    value={passwordValue}
                                    onChange={(e) => setPasswordValue(e.target.value)}
                                />
                                <SelectField
                                    options={countries}
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    placeholder="Select your country"
                                />
                                <div className="flex justify-between items-center mb-5">
                                    <div className="form-check flex">
                                        <input
                                            className="form-check-input w-[18px] h-[18px] border-gray-200 flex-none"
                                            type="checkbox"
                                            id="flexCheckDefault"
                                        />
                                        <label
                                            className="form-check-label ml-2 text-xs select-none"
                                            htmlFor="flexCheckDefault"
                                        >
                                            Get emails from Quickrooms about updated, news &
                                            events. You can <Link href="#" className="theme-color">unsubscribe</Link> at any time.
                                        </label>
                                    </div>
                                </div>
                                {/* Sign In Button */}
                                <Button type="submit" className="btn-bg w-full">Create an account</Button>

                                <div className="text-center mt-6"><p className="text-[13px]">Already have an account? <Link href="#" className="theme-color">Sign in</Link></p></div>
                            </FormWrapper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
