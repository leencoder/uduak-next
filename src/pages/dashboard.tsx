import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import InputField from "@/components/shared/InputField";
import MultiStepForm from "@/components/shared/MultiStepForm";
import Link from "next/link";
import DropdownButton from "@/components/shared/Dropdown";
import HotelCard from "@/components/shared/HotelCard";

export default function Dashboard() {
    const handleDelete = () => {
        console.log("Delete button clicked");
    };

    const handleDashboard = () => {
        console.log("Dashboard button clicked");
    };
    return (
        <>
            {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <MultiStepForm />
      </div> */}
            <section className="font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="logo py-6">
                            <Link href="#">
                                <img src="/images/quickrooms-logo.png" alt="logo" />
                            </Link>
                        </div>
                        <DropdownButton />
                    </div>
                </div>
            </section>
            <section className="font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div className="justify-items-end">
                        <Button type="button" className="btn-bg mb-8 mt-2 w-auto flex items-center gap-2 !h-[40px]">
                            <img src="/images/add-icon.png" alt="" />
                            Create Hotel</Button>

                    </div>
                    <div className="w-full flex justify-center">
                        <input
                            type="text"
                            placeholder="Type to search"
                            className="search w-full px-4 py-3 text-sm text-[#222222] placeholder:text-[#222222] bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none text-center"
                        />
                    </div>
                </div>
            </section>
            <section className="font-inter">
                <div className="container mx-auto max-w-[1140px] my-10 flex flex-col gap-5">
                    <HotelCard
                        imageSrc="/images/hotel1.jpg"
                        title="Best Western Plus Hood River Inn"
                        address="1108 E. Marina Way, Hood River, OR, 97014"
                        features={["Dining", "Laundry"]}
                        onDelete={handleDelete}
                        onDashboard={handleDashboard}
                    />
                    <HotelCard
                        imageSrc="/images/hotel2.jpg"
                        title="Columbia Gorge Hotel and Spa"
                        address="4000 Westcliff Drive, Hood River, OR, 97031"
                        features={["Dining", "Laundry"]}
                        onDelete={handleDelete}
                        onDashboard={handleDashboard}
                    />
                    <HotelCard
                        imageSrc="/images/hotel3.jpg"
                        title="Best Western Plus Hood River Inn"
                        address="1108 E. Marina Way, Hood River, OR, 97014"
                        features={["Dining", "Laundry"]}
                        onDelete={handleDelete}
                        onDashboard={handleDashboard}
                    />
                </div>
            </section>
        </>
    );
}
