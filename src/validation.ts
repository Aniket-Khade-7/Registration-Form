import type { RegistrationData, FormErrors } from "./types";

export function validatePersonalInfo(
    data: RegistrationData 
): FormErrors {
const errors: FormErrors = {};

if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
}

if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
}

if (!data.dateOfBirth.trim()) {
    errors.dateOfBirth = "Date of birth is required";
}

return errors;
}

export function validateContactInfo(
    data: RegistrationData
): FormErrors {
    const errors: FormErrors = {};

    if (!data.email.trim()) {
    errors.email = "Email is required";
} else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
) {

    
errors.email = "Enter a valid email";

}

if (!data.mobile.trim()) {
    errors.mobile = "Mobile number is required";

} else if (!/^[6-9]\d{9}$/.test(data.mobile)) {
    errors.mobile = "Enter a valid mobile number";
}

if (!data.address.trim()) {
    errors.address = "Address is required";

}

return errors;

}
