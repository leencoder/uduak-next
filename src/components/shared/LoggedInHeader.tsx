import Link from "next/link";
import DropdownButton from "./Dropdown";

export default function LoggedInHeader() {
    return (
        <header className="font-inter">
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
        </header>

    );
}
