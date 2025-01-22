import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import InputField from "@/components/shared/InputField";
import MultiStepForm from "@/components/shared/MultiStepForm";

export default function Home() {
  return (
    <>
      <Header />
      <section className="main-layout font-inter">
        <div className="container max-w-[1140px] mx-auto">
          <div className="flex flex-wrap pt-10">
            {/* <!-- Left Section --> */}
            <div className="w-full mb-8 lg:mb-0 px-[15px] flex-1 max-w-full">
              <div className="md:pt-20 md:pr-16 form-detail">
                <h2 className="text-xl font-bold m-0 mb-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                <p className="mb-2.5">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,                 </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.                 </p>
              </div>
            </div>
            {/* <!-- Right Section --> */}
            <FormWrapper
              logoSrc="/images/logo.png"
              logoAlt="Quickrooms Logo"
              heading="Sign in to Quickrooms"
              className="mb-5"
            >
              {/* Username or Email */}
              <InputField
                type="text"
                placeholder="Email/Username or mobile"
                iconSrc="/images/user-icon.png"
                ariaLabel="Username"
              />
              {/* Sign In Button */}
              <Button type="submit" className="btn-bg">Sign in</Button>
              {/* Stay Signed In & Forgot Password */}
              <div className="flex justify-between items-center mb-5">
                <div className="form-check flex items-center">
                  <input
                    className="form-check-input w-5 h-5 border-gray-200"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label ml-2 text-sm"
                    htmlFor="flexCheckDefault"
                  >
                    Stay signed in
                  </label>
                </div>
                <div className="forgot-text">
                  <a
                    href="#"
                    className="theme-color text-decoration-none text-sm font-semibold"
                  >
                    Forgot Password
                  </a>
                </div>
              </div>
              {/* Create Account Button */}
              <Button type="button" className="dark-border">Create An Account</Button>
              {/* Divider */}
              <p className="text-center text-gray-500 relative max-w-[50%] mx-auto mb-5">
                <span className="px-2 bg-white z-10 relative text-sm">Or Sign in with</span>
                <span className="absolute inset-x-0 top-1/2 border-t border-gray-300"></span>
              </p>
              {/* Sign in with Google */}
              <Button type="button" className="light-border flex items-center justify-center">
                <img src="/images/google-icon.png" alt="" className="mr-3" />
                <span>Sign in with Google</span>
              </Button>
              {/* Sign in with Yahoo */}
              <Button type="button" className="light-border flex items-center justify-center">
                <img src="/images/yahoo-icon.png" alt="" className="mr-3" />
                <span>Sign in with Yahoo</span>
              </Button>
            </FormWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
