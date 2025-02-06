import React, { useState } from "react";
import {
  FormStepOne,
  FormStepTwo,
  FormStepThree,
  FormSummary,
  FormStepIndicator,
} from "../components";
import { BookingData } from "../utils/types";

const BookingForm = () => {
  const [currentFormStep, setCurrentFormStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingData>({
    senderName: "",
    senderCountry: "",
    senderState: "",
    senderCity: "",
    senderAddress: "",
    senderEmail: "",
    senderPhone: "",
    collectorName: "",
    collectorCountry: "",
    collectorState: "",
    collectorCity: "",
    collectorAddress: "",
    collectorEmail: "",
    collectorPhone: "",
    numberOfPackages: "",
    shipmentWeight: "",
    shipmentDate: "",
    shipmentTime: "",
    totalCost: 0,
    paymentMethod: "",
  });

  const updateFormData = (data: Partial<BookingData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => setCurrentFormStep((prev) => prev + 1);
  const handlePrev = () => setCurrentFormStep((prev) => prev - 1);
  const handleSubmit = () => alert("Api Call to Payment Gateway!");

  return (
    <div className="m-auto p-10 bg-gray-100">
      <div className="m-auto w-[90%] bg-gray-200">
        <FormStepIndicator currentStep={currentFormStep} totalSteps={4} />

        {currentFormStep === 1 && (
          <FormStepOne
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        )}
        {currentFormStep === 2 && (
          <FormStepTwo
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
        {currentFormStep === 3 && (
          <FormStepThree
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
        {currentFormStep === 4 && (
          <FormSummary
            formData={formData}
            onSubmit={handleSubmit}
            onPrev={handlePrev}
          />
        )}
      </div>
    </div>
  );
};

export default BookingForm;
