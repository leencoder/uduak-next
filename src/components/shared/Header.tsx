import Link from "next/link";

export default function Header() {
    return (
        <header className="font-inter">
            <div className="px-12">
                <div className="flex items-center justify-center md:justify-between flex-wrap">
                    {/* Logo Section */}
                    <div className="logo py-6">
                        <Link href="#">
                            <img src="/images/logo.png" alt="logo" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-x-5">
                        <Link href="/help">Help</Link>
                        <Link href="/terms-and-conditions">Terms and Conditions</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
