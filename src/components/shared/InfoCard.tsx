import React from "react";
import Link from "next/link";

// Define Props Interface
interface InfoCardProps {
    linkHref: string; // URL for the Link
    imgSrc: string; // Image source URL
    imgAlt: string; // Alt text for the image
    label: string; // Label text displayed over the image
    iconSrc: string; // Icon source URL
    iconAlt: string; // Alt text for the icon
    title: string; // Title text
    description: string; // Description text
}

// Reusable Card Component
const InfoCard: React.FC<InfoCardProps> = ({
    linkHref,
    imgSrc,
    imgAlt,
    label,
    iconSrc,
    iconAlt,
    title,
    description
}) => {
    return (
        <div className="w-full md:w-1/2">
            <Link href={linkHref} className="block">
                <div className="relative">
                    <img src={imgSrc} alt={imgAlt} className="w-full h-auto rounded-[6px]" />
                    <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-black to-transparent opacity-95 z-10 rounded-b-[6px]"></div>
                    <div className="absolute bottom-1 left-1 text-white z-20">
                        <p className="text-xs">{label}</p>
                    </div>
                </div>
            </Link>
            <img src={iconSrc} alt={iconAlt} className="mt-4" />
            <h3 className="text-[16px] font-bold mt-2 text-[14px] leading-[18px]">{title}</h3>
            <p className="mt-2 text-xs leading-[19px] pr-3">{description}</p>
        </div>
    );
};

export default InfoCard;
