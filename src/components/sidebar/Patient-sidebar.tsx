import { useEffect, useState } from "react";

//create an interface to define the structure of the objects
export interface DiagnosticValue {
  value: number;
  levels: string;
}

export interface BloodPressure {
  systolic: DiagnosticValue;
  diastolic: DiagnosticValue;
}

export interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: DiagnosticValue;
  respiratory_rate: DiagnosticValue;
  temperature: DiagnosticValue;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
}

export default function PatientSideBar() {
  //create state for the data fetched
  const [data, setData] = useState<Patient[]>([]);
  //create state to check whether the data is being fetched
  const [loading, setLoading] = useState<boolean>(true);
  //create state to check fetch errors
  const [error, setError] = useState<string | null>(null);

  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const username = import.meta.env.VITE_API_USERNAME;
        const password = import.meta.env.VITE_API_PASSWORD;

        if (!username || !password) {
          throw new Error("Incorrect API Credentials  ");
        }

        // encrypt the key yourself dynamically using proper runtime methods
        const encryptedKey = btoa(`${username}:${password}`);

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Basic ${encryptedKey}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return <div>Loading patient data...</div>;
  }

  if (error !== null) {
    return <div>Error: {error}</div>;
  }

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
          src="/src/assets/SideBar/search.svg"
          alt="search"
        />
      </div>

      <div className="patient-cards flex flex-col gap-4 w-full">
        <div className="patient-cards flex flex-col gap-4 w-full">
          {data.slice(0, 12).map((item) => (
            <div
              key={item.name}
              className="patient-info flex items-center justify-between pt-0.5 w-full cursor-pointer hover:bg-[#D8FCF7] p-2 rounded-lg"
            >
              {/* left-side elements */}
              <div className="flex items-center gap-3">
                {/* Profile Image  */}
                <img
                  src={item.profile_picture}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="info">
                  <p className="h-5 font-semibold whitespace-nowrap">
                    {item.name}
                  </p>
                  <p className="text-[0.85rem] text-[#4f4f4f]">
                    {item.gender}, {item.age}
                  </p>
                </div>
              </div>
              {/* right-side element */}
              <img
                src="/src/assets/SideBar/more-detail.png"
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
