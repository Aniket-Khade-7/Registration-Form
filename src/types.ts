export interface RegistrationData{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender : string;


    email: string;
    mobile: string;
    address: string;
    city: string;
    pincode: string;
}

export interface FormErrors {
     firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    gender? : string;

    
    email?: string;
    mobile?: string;
    address?: string;
    city?: string;
    pincode?: string;
}