import type { RegistrationData } from "./types";

interface ReviewProps {
    data: RegistrationData;
}

function Review({ data }: ReviewProps) {
    return (
        <div className="review">
            <h2>Review Information</h2>

            <h3>Personal Information</h3>
    
        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <p>Date of Birth: {data.dateOfBirth}</p>
        <p>Gender: {data.gender}</p>

        <h3>Contact Information</h3>

        <p>Email: {data.email}</p>
        <p>Mobile: {data.mobile}</p>
        <p>Address: {data.address}</p>
        <p>City: {data.city}</p>
        <p>Pincode: {data.pincode}</p>
        </div>
    );  
}

export default Review;