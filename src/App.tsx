import { useState } from "react";

import type { RegistrationData, FormErrors } from "./types";

import {validatePersonalInfo, validateContactInfo,} from "./validation";


import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import Button from "./components/Button";
import Stepper from "./components/Stepper";

import "./App.css";

function App() {
  
  const [currentStep, setCurrentStep] = useState(1);

  const [data, setData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function updateData(
    field: keyof RegistrationData,
    value: string
  ) {
    setData({
      ...data,
      [field]: value,
    });
  }

  function handleNext() {
    let newErrors: FormErrors = {};

    if (currentStep === 1) {
      newErrors = validatePersonalInfo(data);
    }

    if (currentStep === 2) {
      newErrors = validateContactInfo(data);
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setCurrentStep(currentStep + 1);
    }
  }

  function handlePrevious() {
    setErrors({});
    setCurrentStep(currentStep - 1);
  }


  function handleSubmit() {
    alert("Registration submitted successfully!");
    console.log(data);
  }

    
  return (
    <div className="container">
      <h1>Registration Form</h1>

      <Stepper currentStep={currentStep} />

      <div className="form-box">

        {currentStep === 1 && (
          <PersonalInfo
            data={data}
            errors={errors}
            updateData={updateData}
          />
        )}

        {currentStep === 2 && (
          <ContactInfo
            data={data}
            errors={errors}
            updateData={updateData}
          />
        )}

        {currentStep === 3 && (
          <div>
            <h2>Review Information</h2>

            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Date of Birth: {data.dateOfBirth}</p>
            <p>Gender: {data.gender}</p>

            <p>Email: {data.email}</p>
            <p>Mobile: {data.mobile}</p>
            <p>Address: {data.address}</p>
            <p>City: {data.city}</p>
            <p>Pincode: {data.pincode}</p>
          </div>
        )}

        <div className="buttons">

          {currentStep > 1 && (
            <Button
              text="Previous"
              onClick={handlePrevious}
            />
          )}

          {currentStep < 3 && (
            <Button
              text="Next"
              onClick={handleNext}
            />
          )}

          {currentStep === 3 && (
            <Button
              text="Submit"
              onClick={handleSubmit}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default App;