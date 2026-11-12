import type { RegistrationData, FormErrors } from "./types";

interface Props {
  data: RegistrationData;
  errors: FormErrors;
  updateData: (field: keyof RegistrationData, value: string) => void;
}

function PersonalInfo({ data, errors, updateData }: Props) {
  return (
    <div>
      <h2>Personal Information</h2>

      <label>First Name</label>
      <input
        type="text"
        value={data.firstName}
        onChange={(e) =>
          updateData("firstName", e.target.value)
        }
      />
      <p className="error">{errors.firstName}</p>

      <label>Last Name</label>
      <input
        type="text"
        value={data.lastName}
        onChange={(e) =>
          updateData("lastName", e.target.value)
        }
      />
      <p className="error">{errors.lastName}</p>

      <label>Date of Birth</label>
      <input
        type="date"
        value={data.dateOfBirth}
        onChange={(e) =>
          updateData("dateOfBirth", e.target.value)
        }
      />
      <p className="error">{errors.dateOfBirth}</p>

      <label>Gender</label>
      <select
        value={data.gender}
        onChange={(e) =>
          updateData("gender", e.target.value)
        }
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <p className="error">{errors.gender}</p>
    </div>
  );
}

export default PersonalInfo;