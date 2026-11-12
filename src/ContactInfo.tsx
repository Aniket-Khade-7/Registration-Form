import type { RegistrationData, FormErrors } from "./types";

interface ContactInfoProps {
  data: RegistrationData;
  errors: FormErrors;
  updateData: (field: keyof RegistrationData, value: string) => void;
}

function ContactInfo({
  data,
  errors,
  updateData,
}: ContactInfoProps) {
  return (
    <div>
      <h2>Contact Information</h2>

      <label>Email</label>           
      <input
        type="email"
        value={data.email}
        onChange={(e) => updateData("email", e.target.value)}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Mobile Number</label>
      <input
        type="tel"
        value={data.mobile}
        onChange={(e) => updateData("mobile", e.target.value)}
      />
      {errors.mobile && <p className="error">{errors.mobile}</p>}

      <label>Address</label>
      <input
        type="text"
        value={data.address}
        onChange={(e) => updateData("address", e.target.value)}
      />
      {errors.address && <p className="error">{errors.address}</p>}

      <label>City</label>
      <input
        type="text"
        value={data.city}
        onChange={(e) => updateData("city", e.target.value)}
      />
      {errors.city && <p className="error">{errors.city}</p>}

      <label>Pincode</label>
      <input
        type="text"
        maxLength={6}
        value={data.pincode}
        onChange={(e) => updateData("pincode", e.target.value)}
      />
      {errors.pincode && <p className="error">{errors.pincode}</p>}
    </div>
  );
}

export default ContactInfo;