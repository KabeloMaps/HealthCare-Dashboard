import PatientSideBar from "../sidebar/Patient-sidebar";
import Diagnosis from "../sidebar/Diagnosis";
import PatientInfo from "../sidebar/Patient-info";

export default function Main() {
  return (
    <main className="grid grid-cols-[367px_766px_1fr]  gap-x-8  m-3.5 ">
      <PatientSideBar />
      <Diagnosis />
      <PatientInfo />
    </main>
  );
}
