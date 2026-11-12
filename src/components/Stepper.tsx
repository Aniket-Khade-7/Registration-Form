interface StepperProps {
  currentStep: number;
}

function Stepper({ currentStep }: StepperProps) {
  const steps = [
    "Personal Info",
    "Contact Info",
    "Review",
  ];

  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={step}
          className={
            currentStep === index + 1
              ? "step active"
              : "step"
          }
        >
          <div className="step-number">
            {index + 1}
          </div>

          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}

export default Stepper;