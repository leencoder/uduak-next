import React from "react";
import Image from "next/image";

interface HotelCardProps {
    imageSrc: string;
    title: string;
    address: string;
    features: string[];
    onDelete: () => void;
    onDashboard: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({
    imageSrc,
    title,
    address,
    features,
    onDelete,
    onDashboard,
}) => {
    return (
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image Section */}
            <div className="w-1/3">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={300}
                    height={261}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="w-2/3 pt-9 pb-7 flex flex-col justify-between">
                <div className="px-4">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800">
                        {title}</h3>

                    {/* Address */}
                    <p className="text-sm text-gray-600 flex items-center gap-2 px-0.5 mt-2">
                        <img src="/images/address.png" alt="" />
                        {address}</p>

                    {/* Features */}
                    <p className="text-sm text-gray-600 mt-10 mb-5">
                        {features.join(" | ")}
                    </p>
                </div>
                <hr />
                <div className="mt-5 px-4 flex justify-between items-center">
                    {/* Delete Button */}
                    <button
                        onClick={onDelete}
                        className="text-sm text-[#ff7f7f] flex items-center gap-2"
                    ><img src="/images/delete-icon.png" />
                        Delete from account
                    </button>

                    {/* Dashboard Button */}
                    <button
                        onClick={onDashboard}
                        className="btn btn-bg rounded !h-[40px] flex items-center"
                    >
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
