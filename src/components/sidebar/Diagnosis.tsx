function Diagnosis() {
  return (
    <main className="grid gap-8">
      <div
        className="upper-container p-4"
        style={{
          width: "766px",

          background: "#FFFFFF",
          borderRadius: "16px",
        }}
      >
        <h1 className="font-bold text-[24px]">Diagnosis History</h1>
      </div>

      <div
        className="botton-container p-4 "
        style={{
          background: "#FFFFFF",
          borderRadius: "16px",
          opacity: 1,
        }}
      >
        <h1 className="font-bold text-[24px]">Diagnostic List</h1>
      </div>
    </main>
  );
}

export default Diagnosis;
