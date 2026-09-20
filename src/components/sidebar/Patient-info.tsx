export default function PatientInfo() {
  return (
    <main className="grid grid-rows-[2fr_1fr] gap-8 ">
      <div
        className="upper-container"
        style={{
          top: "108px",
          left: "1216px",

          background: "#FFFFFF",
          borderRadius: "16px",
          opacity: 1,
        }}
      ></div>

      <div
        className="botton-container p-4"
        style={{
          left: "1216px",

          background: "#FFFFFF",
          borderRadius: "16px",
          opacity: 1,
        }}
      >
        <h1 className="font-bold text-[24px]">Lab Results</h1>
      </div>
    </main>
  );
}
