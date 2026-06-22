import React, { useState, useRef } from "react";
import QuotationForm from "./Components/QuotationForm";
import ItemTable from "./Components/ItemTable";
import PDFTemplate from "./Components/PDFTemplate";
import MobileWarningModal from "./Components/MobileWarningModal";
import { useMobileDetector } from "./hooks/useMobileDetector";
import { generatePDF } from "./utils/pdfGenerator";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const [form, setForm] = useState({});
  const [items, setItems] = useState([
    { description: "", qty: 0, rate: 0, amount: 0, discountRate: 0 },
  ]);
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  const pdfRef = useRef();
  const isMobile = useMobileDetector();

  React.useEffect(() => {
    if (isMobile) {
      setShowMobileWarning(true);
    }
  }, [isMobile]);

  const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const itemDiscountTotal = items.reduce(
    (sum, item) => sum + (Number(item.amount || 0) * Number(item.discountRate || 0)) / 100,
    0
  );
  const subtotal = total - itemDiscountTotal;
  const customerDiscountTotal = form.customerDiscountRate
    ? (subtotal * Number(form.customerDiscountRate || 0)) / 100
    : 0;
  const extraCharge = Number(form.extraCharge || 0);
  const finalTotal = subtotal - customerDiscountTotal + extraCharge;

  return (
    <div className="app-container">
      <MobileWarningModal open={isMobile && showMobileWarning} onClose={() => setShowMobileWarning(false)} />
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

      <PDFTemplate
        ref={pdfRef}
        form={form}
        items={items}
        total={total}
        subtotal={subtotal}
        itemDiscountTotal={itemDiscountTotal}
        customerDiscountTotal={customerDiscountTotal}
        extraCharge={extraCharge}
        finalTotal={finalTotal}
      />
    </div>
  );
}

export default App;