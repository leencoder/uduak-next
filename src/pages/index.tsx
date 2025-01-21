import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <header className="font-inter">
        <div className="px-12">
          <div className="flex items-center justify-center md:justify-between flex-wrap">
            <div className="logo py-6">
              <a href="#" className="">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="flex gap-x-5">
              <Link href="">Help</Link>
              <Link href="">Terms and Conditions</Link>
              <Link href="">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </header>

      <section className="main-layout font-inter">
        <div className="container max-w-[1140px] mx-auto">
          <div className="flex flex-wrap pt-10">
            {/* <!-- Left Section --> */}
            <div className="w-full mb-8 lg:mb-0 px-[15px] flex-1 max-w-full sm:w-full">
              <div className="md:pt-20 md:pr-16 form-detail">
                <p className="mb-2.5">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,                 </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.                 </p>
              </div>
            </div>

            {/* <!-- Right Section --> */}
            <div className="w-full px-[15px] w-[420px] md:max-w-[400px] flex-none sm:w-full">
              <div className="form-wrapper bg-white p-[20px] sm:p-[35px] shadow-2xl rounded-md">
                <form>
                  {/* <!-- Logo --> */}
                  <div className="logo text-center mb-6">
                    <a href="#" className="block justify-items-center">
                      <img src="/images/logo.png" alt="logo" />
                    </a>
                    <h1 className="main-heading text-2xl font-bold my-5">Sign in to Quickrooms</h1>
                  </div>

                  {/* <!-- Username or Email --> */}
                  <div className="icon-input flex items-center border-b py-3 px-1 mb-5">
                    <img src="/images/user-icon.png" alt="" className="mr-3" />
                    <input type="text" className="form-control flex-1 outline-none text-sm" placeholder="Email/Username or mobile" aria-label="Username" />
                  </div>

                  {/* <!-- Sign In Button --> */}
                  <button type="submit" className="btn btn-bg rounded-md">
                    Sign in
                  </button>

                  {/* <!-- Stay Signed In & Forgot Password --> */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="form-check flex items-center">
                      <input className="form-check-input w-5 h-5 border-gray-200" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label ml-2 text-sm" htmlFor="flexCheckDefault">
                        Stay signed in
                      </label>
                    </div>
                    <div className="forgot-text">
                      <a href="#" className="theme-color text-decoration-none text-sm font-semibold">Forgot Password</a>
                    </div>
                  </div>

                  {/* <!-- Create Account Button --> */}
                  <button type="submit" className="btn dark-border rounded-md">
                    Create An Account
                  </button>

                  {/* <!-- Divider --> */}
                  <p className="text-center text-gray-500 relative max-w-[50%] mx-auto">
                    <span className="px-2 bg-white z-10 relative text-sm">Or Sign in with</span>
                    <span className="absolute inset-x-0 top-1/2 border-t border-gray-300"></span>
                  </p>
                  {/* <!-- Sign in with Google --> */}
                  <button type="submit" className="btn light-border rounded-md flex items-center justify-center">
                    <img src="/images/google-icon.png" alt="" className="mr-3" />
                    <span>Sign in with Google</span>
                  </button>
                  {/* <!-- Sign in with Yahoo --> */}
                  <button type="submit" className="btn light-border rounded-md flex items-center justify-center">
                    <img src="/images/yahoo-icon.png" alt="" className="mr-3" />
                    <span>Sign in with Yahoo</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
