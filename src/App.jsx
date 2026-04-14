import React, { useState, useRef } from "react";
import QuotationForm from "./Components/QuotationForm";
import ItemTable from "./Components/ItemTable";
import PDFTemplate from "./Components/PDFTemplate";
import { generatePDF } from "./utils/pdfGenerator";
import Header from "./Components/Header";

function App() {
  const [form, setForm] = useState({});
  const [items, setItems] = useState([
    { description: "", qty: 0, rate: 0, amount: 0 },
  ]);

  const pdfRef = useRef();

  const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", transition: "all 0.3s ease", padding: "20px" }}>
      <Header />
      <div style={{ background: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", maxWidth: "1000px", margin: "0 auto" }}>
      <QuotationForm form={form} setForm={setForm} />

      <ItemTable items={items} setItems={setItems} />

      <button onClick={() => generatePDF(pdfRef.current)} style={{ background: "#667eea", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", marginTop: "20px", transition: "0.3s" }} onMouseOver={(e) => e.target.style.background = "#764ba2"} onMouseOut={(e) => e.target.style.background = "#667eea"}>
        Download PDF
      </button>
      </div>

      <PDFTemplate ref={pdfRef} form={form} items={items} total={total} />
    </div>
  );
}

export default App;