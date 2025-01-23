import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import FormWrapper from "@/components/shared/FormWrapper";
import InputField from "@/components/shared/InputField";
import MultiStepForm from "@/components/shared/MultiStepForm";

export default function Home() {
  return (
    <>
      <Header />
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <MultiStepForm />
      </div> */}
      <section className="main-layout font-inter">
        <div className="container max-w-[1140px] mx-auto">
          <div className="flex flex-wrap pt-10 justify-center">
            <FormWrapper
              logoSrc="/images/qr-logo.png"
              logoAlt="Quickrooms Logo"
              heading="Welcome"
              className="mb-5"
            >
              <p className="text-center text-[15px] mb-8 font-medium">Sign in to Quickrooms</p>
              {/* Username or Email */}
              <InputField
                type="text"
                placeholder="Username, email or mobile"
                iconSrc="/images/user-icon.png"
                ariaLabel="Username"
              />
              {/* Next Button */}
              <Button type="submit" className="btn-bg mb-2 mt-2">Next</Button>
              {/* Stay Signed In & Forgot Password */}
              <div className="flex justify-between items-center mb-5">
                <div className="form-check flex items-center">
                  <input
                    className="form-check-input w-[18px] h-[18px] border-gray-200 flex-none"
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
                    Forgot username?
                  </a>
                </div>
              </div>
              {/* Create Account Button */}
              <Button type="button" className="dark-border">Create an account</Button>
              {/* Divider */}
              <p className="text-center my-3">
                <span className="px-2 text-sm">or</span>
              </p>
              {/* Sign in with Google */}
              <Button type="button" className="light-border flex items-center justify-center mb-4">
                <img src="/images/google-icon.png" alt="" className="mr-3" />
                <span>Sign in with Google</span>
              </Button>
              {/* Sign in with Apple */}
              <Button type="button" className="light-border flex items-center justify-center">
                <img src="/images/apple-icon.png" alt="" className="mr-3" />
                <span>Sign in with Apple</span>
              </Button>
            </FormWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
