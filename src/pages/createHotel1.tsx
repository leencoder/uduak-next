import Button from "@/components/shared/Button";
import HotelCard from "@/components/shared/HotelCard";
import LoggedInHeader from "@/components/shared/LoggedInHeader";

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
            <LoggedInHeader />
            <section className="font-inter">
                <div className="container max-w-[1140px] mx-auto">
                    <div>
                        <Button type="button" className="mb-8 mt-2 w-auto flex items-center gap-2 !h-[40px] !px-0 !font-normal">
                            <img src="/images/back-arrow.png" alt="" />
                            Back to Hotel Dashboard</Button>

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
