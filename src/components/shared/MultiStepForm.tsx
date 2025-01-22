import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Review"];

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const isLastStep = currentStep === steps.length - 1;

    return (
        <div className="max-w-lg mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg">
            {/* {/ Progress Bar /} */}
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-indigo-600 bg-indigo-200">
                            {steps[currentStep]}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                            {currentStep + 1}/{steps.length}
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                    <div
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                    ></div>
                </div>
            </div>

            {/* {/ Form Content /} */}
            <div>
                {currentStep === 0 && (
                    <div>
                        <h2 className="text-lg font-semibold">Step 1: Personal Info</h2>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-2 border rounded mt-4"
                        />
                    </div>
                )}
                {currentStep === 1 && (
                    <div>
                        <h2 className="text-lg font-semibold">Step 2: Contact Details</h2>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-2 border rounded mt-4"
                        />
                    </div>
                )}
                {currentStep === 2 && (
                    <div>
                        <h2 className="text-lg font-semibold">Step 3: Additional Info</h2>
                        <textarea
                            placeholder="Tell us more"
                            className="w-full p-2 border rounded mt-4"
                        />
                    </div>
                )}
                {currentStep === 3 && (
                    <div>
                        <h2 className="text-lg font-semibold">Review & Submit</h2>
                        <p>Review your information and submit the form.</p>
                    </div>
                )}
            </div>

            {/* {/ Navigation Buttons /} */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`px-4 py-2 bg-gray-200 rounded ${currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    className={`px-4 py-2 ${isLastStep ? "bg-green-500" : "bg-indigo-500"
                        } text-white rounded`}
                >
                    {isLastStep ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
}
