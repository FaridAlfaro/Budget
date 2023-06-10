import React, { useState } from 'react';
import Checkout from "../Checkout/Checkout";
import ProgressBar from "../ProgressBar/ProgressBar";

function CheckoutContain() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep === 4) return;

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep === 1) return;

    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <ProgressBar
      currentStep={currentStep}
    >
      <Checkout currentStep={currentStep}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}></Checkout>
    </ProgressBar>
  );
}

export default CheckoutContain;
