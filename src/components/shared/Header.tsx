import Link from "next/link";

export default function Header() {
    return (
        <header className="font-inter">
            <div className="px-8">
                <div className="flex items-center justify-center md:justify-between flex-wrap">
                    {/* Logo Section */}
                    <div className="logo py-6">
                        <Link href="#">
                            <img src="/images/quickrooms-logo.png" alt="logo" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-x-4 text-xs">
                        <Link href="/help">Help</Link>
                        <Link href="/terms">Terms</Link>
                        <Link href="/privacy">Privacy</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
