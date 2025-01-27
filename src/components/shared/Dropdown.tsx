import React, { useState } from "react";
import Link from "next/link";

const DropdownButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-4 py-2 font-medium"
            >
                <img src="/images/user.png" alt="" />
                John Doe
                <img src="/images/dropdown-arrow.png" alt="" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-5 w-48 bg-white shadow-lg">
                    <ul className="py-2 dropdown-options">
                        <li>
                            <Link
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <div className="w-[30px] flex items-center justify-center">
                                    <img src="/images/user.png" alt="" />
                                </div>
                                John Doe
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <div className="w-[30px] flex items-center justify-center">
                                    <img src="/images/settings.png" alt="" />
                                </div>
                                Settings
                            </Link>
                        </li><hr className="mx-4" />
                        <li>
                            <Link
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <div className="w-[30px] flex items-center justify-center">
                                    <img src="/images/sign-out.png" alt="" />
                                </div>
                                Sign out
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
