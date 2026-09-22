import PatientSideBar from "../sidebar/Patient-sidebar";
import Diagnosis from "../sidebar/Diagnosis";
import PatientInfo from "../sidebar/Patient-info";

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

export default function Main() {
  //create state for the data fetched
  const [data, setData] = useState<Patient[]>([]);
  //create state to check whether the data is being fetched
  const [loading, setLoading] = useState<boolean>(true);
  //create state to check fetch errors
  const [error, setError] = useState<string | null>(null);

  //create state to treack which patient is active
  const [activePatient, setActivePatient] = useState(0);

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
    <main className="grid grid-cols-[367px_766px_1fr]  gap-x-8  m-3.5 ">
      <PatientSideBar patients={data} />
      <Diagnosis />
      <PatientInfo patient={data[3]} />
    </main>
  );
}
