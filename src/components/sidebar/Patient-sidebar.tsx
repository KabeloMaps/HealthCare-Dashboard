import type { Patient } from "../main/Main";

export interface PatientSideBarProps {
  patients: Patient[];
  indexChange: (index: number) => void;
}

export default function PatientSideBar({
  patients,
  indexChange,
}: PatientSideBarProps) {
  return (
    <div
      className="patient-panel flex flex-col items-start gap-5 p-4 "
      style={{
        top: "105px",
        left: "18px",
        background: "#FFFFFF",
        borderRadius: "16px",
        opacity: 1,
      }}
    >
      <div className="header flex w-full items-center justify-between">
        <h1 className="font-bold text-[24px]">Patients</h1>
        <img
          className="h-4 w-4 cursor-pointer"
          src="/public/assets/SideBar/search.svg"
          alt="search"
        />
      </div>

      <div className="patient-cards flex flex-col gap-4 w-full">
        <div className="patient-cards  flex flex-col gap-4 w-full">
          {patients.slice(0, 12).map((patient, index) => (
            <div
              //use a key to track the elements
              key={`${patient.name}-${index}`}
              className="patient-info flex items-center justify-between pt-0.5 w-full cursor-pointer hover:bg-[#D8FCF7] p-2 rounded-lg"
              onClick={() => indexChange(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") indexChange(index);
              }}
            >
              {/* left-side elements */}
              <div className="flex items-center gap-3">
                {/* Profile Image  */}
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="info">
                  <p className="h-5 font-semibold whitespace-nowrap">
                    {patient.name}
                  </p>
                  <p className="text-[0.85rem] text-[#4f4f4f]">
                    {patient.gender}, {patient.age}
                  </p>
                </div>
              </div>
              {/* right-side element */}
              <img
                src="/public/assets/SideBar/more-detail.png"
                alt="options"
                className="h-1"
              />
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}
