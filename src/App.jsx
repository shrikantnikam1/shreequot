import React, { useState, useRef } from "react";
import QuotationForm from "./Components/QuotationForm";
import ItemTable from "./Components/ItemTable";
import PDFTemplate from "./Components/PDFTemplate";
import { generatePDF } from "./utils/pdfGenerator";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const [form, setForm] = useState({});
  const [items, setItems] = useState([
    { description: "", qty: 0, rate: 0, amount: 0 },
  ]);

  const pdfRef = useRef();

  const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <div className="form-section">
          <QuotationForm form={form} setForm={setForm} />
        </div>

        <div className="form-section">
          <ItemTable items={items} setItems={setItems} />
        </div>

        <button 
          className="btn-download" 
          onClick={() => generatePDF(pdfRef.current)}
        >
          📥 Download PDF
        </button>
      </div>

      <PDFTemplate ref={pdfRef} form={form} items={items} total={total} />
    </div>
  );
}

export default App;