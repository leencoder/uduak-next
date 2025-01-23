import React, { useState } from "react";

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, name: "Personal Details" },
        { id: 2, name: "Address Details" },
        { id: 3, name: "Payment Info" },
        { id: 4, name: "Review" },
        { id: 5, name: "Confirmation" },
    ];

    const handleNext = () => {
        if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSkip = () => {
        setCurrentStep(steps.length);
    };

    return (
        <div className="flex">
            {/* {/ Vertical Progress Bar /} */}
            <div className="w-1/4 p-4">
                <div className="relative flex flex-col">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-center mb-4">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep >= step.id
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-gray-700"
                                    }`}
                            >
                                {step.id}
                            </div>
                            <span
                                className={`ml-4 ${currentStep >= step.id
                                        ? "text-blue-500 font-semibold"
                                        : "text-gray-700"
                                    }`}
                            >
                                {step.name}
                            </span>
                        </div>
                    ))}
                    <div
                        className="absolute top-0 left-4 w-px h-full bg-gray-300"
                        style={{
                            height: `${(currentStep / steps.length) * 100}%`,
                        }}
                    ></div>
                </div>
            </div>

            {/* {/ Form Area /} */}
            <div className="w-3/4 p-4">
                <h2 className="text-2xl font-bold mb-4">Step {currentStep}</h2>
                <div className="p-4 border rounded-lg mb-4">
                    <p>Content for step {currentStep} goes here...</p>
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={handleBack}
                        className="px-4 py-2 bg-gray-300 rounded-lg"
                        disabled={currentStep === 1}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleSkip}
                        className="px-4 py-2 bg-yellow-400 rounded-lg"
                    >
                        Skip
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        disabled={currentStep === steps.length}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
