import React from "react";
import { FormStepIndicatorProps } from "../utils/types";

const FormStepIndicator = ({
  currentStep,
  totalSteps,
}: FormStepIndicatorProps) => {
  return (
    <div className="p-6 font-semibold text-xl text-gray-600">
      Step {currentStep} of {totalSteps}
    </div>
  );
};

export default FormStepIndicator;
