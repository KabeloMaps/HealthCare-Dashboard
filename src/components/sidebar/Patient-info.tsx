import type { Patient } from "../main/Main";

export interface PatientInfoProps {
  patient: Patient;
}

export default function PatientInfo({ patient }: PatientInfoProps) {
  // Explicit formatting helper function
  function formatDateOfBirth(dateString: string): string {
    if (!dateString) {
      return "";
    }

    const dateInstance = new Date(dateString);

    // Formats to: "Month Day, Year" (e.g., "December 1, 2000")
    const formattedDate = dateInstance.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  }

  return (
    <div className="grid grid-rows-[2fr_1fr] gap-8">
      <div
        className="upper-container"
        style={{
          background: "#FFFFFF",
          borderRadius: "16px",
          opacity: 1,
        }}
      >
        <div className="Patient-Info pt-2 flex flex-col items-center justify-center">
          <img
            src={patient.profile_picture}
            alt={patient.name}
            className="w-37.5 h-37.5 rounded-full object-cover"
          />
          <h1 className="font-bold text-[20px] pt-2">{patient.name}</h1>
        </div>

        <div className="Patient-Details p-2.5 flex flex-col gap-4">
          {/* Date of Birth Section */}
          <div className="Extra-Info flex items-center gap-3">
            <img
              src="/src/assets/Patient Infomation Icon/BirthIcon.svg"
              className="w-12 h-12 p-2"
              alt="Birth Icon"
            />
            <div className="text-[14px] flex flex-col items-start">
              <span className="text-gray-500 text-xs">Date Of Birth</span>
              {/* Call the explicit helper function dynamically here */}
              <h1 className="font-bold">
                {formatDateOfBirth(patient.date_of_birth)}
              </h1>
            </div>
          </div>

          {/* Gender Section */}
          <div className="Extra-Info flex items-center gap-3">
            <img
              src="/src/assets/Patient Infomation Icon/FemaleIcon.svg"
              className="w-12 h-12 p-2"
              alt="Gender Icon"
            />
            <div className="text-[14px] flex flex-col items-start">
              <span className="text-gray-500 text-xs">Gender</span>
              <h1 className="font-bold">{patient.gender}</h1>
            </div>
          </div>

          {/* Phone Number Section */}
          <div className="Extra-Info flex items-center gap-3">
            <img
              src="/src/assets/Patient Infomation Icon/PhoneIcon.svg"
              className="w-12 h-12 p-2"
              alt="Phone Icon"
            />
            <div className="text-[14px] flex flex-col items-start">
              <span className="text-gray-500 text-xs">Phone Number</span>
              <h1 className="font-bold">{patient.phone_number}</h1>
            </div>
          </div>

          {/* Emergency Contact Section */}
          <div className="Extra-Info flex items-center gap-3">
            <img
              src="/src/assets/Patient Infomation Icon/PhoneIcon.svg"
              className="w-12 h-12 p-2"
              alt="Emergency Contact Icon"
            />
            <div className="text-[14px] flex flex-col items-start">
              <span className="text-gray-500 text-xs">Emergency Contact</span>
              <h1 className="font-bold">{patient.emergency_contact}</h1>
            </div>
          </div>

          {/* Insurance Provider Section */}
          <div className="Extra-Info flex items-center gap-3">
            <img
              src="/src/assets/Patient Infomation Icon/InsuranceIcon.svg"
              className="w-12 h-12 p-2"
              alt="Insurance Icon"
            />
            <div className="text-[14px] flex flex-col items-start">
              <span className="text-gray-500 text-xs">Insurance Type</span>
              <h1 className="font-bold">{patient.insurance_type}</h1>
            </div>
          </div>
          <button className="flex w-full justify-center">
            <span className="font-bold rounded-full bg-[] bg-[#01F0D0] p-2.5">
              Show All Information
            </span>
          </button>
        </div>
      </div>

      <div
        className="botton-container p-4"
        style={{
          background: "#FFFFFF",
          borderRadius: "16px",
          opacity: 1,
        }}
      >
        <h1 className="font-bold text-[24px]">Lab Results</h1>
      </div>
    </div>
  );
}
