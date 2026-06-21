import React, { forwardRef, useEffect, useState } from "react";
import shreeIcon from "../icon/shree-black.png";

const PDFTemplate = forwardRef(({ form, items, total }, ref) => {
  const [quotationNumber, setQuotationNumber] = useState("");

  useEffect(() => {
    setQuotationNumber(
      `QT-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(5, "0")}`
    );
  }, []);
  
  return (
    <div ref={ref} style={{ padding: "30px", background: "#fff", maxWidth: "850px", margin: "0 auto", fontSize: "13px", position: "relative", overflow: "hidden", fontFamily: "Arial, sans-serif", minHeight: "100%" }}>
      {/* Background Watermark Icon - Full Page Coverage */}
      <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.17, zIndex: 0, pointerEvents: "none", width: "100%", height: "100%" }}>
        <div style={{ transform: "rotate(-15deg) scale(1.1)" }}>
          <img src={shreeIcon} alt="watermark" style={{ width: "650px", height: "650px", objectFit: "contain", filter: "brightness(0.9) contrast(1.15) drop-shadow(0 0 50px rgba(102, 126, 234, 0.45))" }} />
        </div>
      </div>

      {/* Content Wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header with Icon and Company Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", paddingBottom: "10px", borderBottom: "2px solid #667eea" }}>
          <img src={shreeIcon} alt="logo" style={{ width: "55px", height: "55px", objectFit: "contain" }} />
          <div>
            <h1 style={{ margin: "0 0 4px 0", color: "#667eea", fontSize: "20px", fontWeight: "bold" }}>
              SHREE ENTERPRISES
            </h1>
            <p style={{ margin: "2px 0", color: "#666", fontSize: "10px" }}>
              Professional Painting & Services
            </p>
          </div>
        </div>

        {/* Company Details Bar */}
        <div style={{ background: "#f8f9ff", padding: "8px 12px", borderRadius: "6px", marginBottom: "12px", border: "1px solid #e0e0ff" }}>
          <p style={{ margin: "2px 0", fontSize: "10px", color: "#555" }}>
            <strong>📍 Address:</strong> Pimple Nilakh, Pune, Maharashtra 411027
          </p>
          <p style={{ margin: "2px 0", fontSize: "10px", color: "#555" }}>
            <strong>📞 Contact:</strong> 7769941729 / 9172211729 | <strong>🌐 Website:</strong> shree-painting.vercel.app
          </p>
        </div>

        {/* Quotation & Date Info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px", padding: "10px", background: "#f0f0f0", borderRadius: "6px" }}>
          <div>
            <p style={{ margin: "0 0 2px 0", fontSize: "9px", color: "#666", fontWeight: "bold", textTransform: "uppercase" }}>Quotation #</p>
            <p style={{ margin: "0", fontSize: "12px", fontWeight: "bold", color: "#667eea" }}>{quotationNumber}</p>
          </div>
          <div>
            <p style={{ margin: "0 0 2px 0", fontSize: "9px", color: "#666", fontWeight: "bold", textTransform: "uppercase" }}>Date</p>
            <p style={{ margin: "0", fontSize: "12px", fontWeight: "bold", color: "#333" }}>{form.date || new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Customer Details */}
        <div style={{ marginBottom: "15px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "13px", fontWeight: "bold", color: "#333", borderBottom: "2px solid #667eea", paddingBottom: "4px" }}>
            📋 CUSTOMER DETAILS
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div style={{ padding: "8px", background: "#f9f9f9", borderRadius: "4px", border: "1px solid #e0e0e0" }}>
              <p style={{ margin: "0 0 2px 0", fontSize: "9px", color: "#999", fontWeight: "bold", textTransform: "uppercase" }}>Customer Name</p>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#333" }}>{form.name || "N/A"}</p>
            </div>
            <div style={{ padding: "8px", background: "#f9f9f9", borderRadius: "4px", border: "1px solid #e0e0e0" }}>
              <p style={{ margin: "0 0 2px 0", fontSize: "9px", color: "#999", fontWeight: "bold", textTransform: "uppercase" }}>Contact</p>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#333" }}>{form.contact || "N/A"}</p>
            </div>
            <div style={{ padding: "8px", background: "#f9f9f9", borderRadius: "4px", border: "1px solid #e0e0e0", gridColumn: "1 / -1" }}>
              <p style={{ margin: "0 0 2px 0", fontSize: "9px", color: "#999", fontWeight: "bold", textTransform: "uppercase" }}>Address</p>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#333" }}>{form.address || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Services Table */}
        <div style={{ marginBottom: "15px" }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", fontWeight: "bold", color: "#333", borderBottom: "2px solid #667eea", paddingBottom: "5px" }}>
            🎨 PAINTING SERVICES & MATERIALS
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
                <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold", border: "1px solid #ddd" }}>Sr</th>
                <th style={{ padding: "10px", textAlign: "left", fontWeight: "bold", border: "1px solid #ddd" }}>Service/Material</th>
                <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold", border: "1px solid #ddd" }}>Unit/Qty</th>
                <th style={{ padding: "10px", textAlign: "right", fontWeight: "bold", border: "1px solid #ddd" }}>Rate (₹)</th>
                <th style={{ padding: "10px", textAlign: "right", fontWeight: "bold", border: "1px solid #ddd" }}>Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff", borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", fontWeight: "600" }}>{i + 1}</td>
                  <td style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd", color: "#333" }}>{item.description || "-"}</td>
                  <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", fontWeight: "600" }}>{item.qty || 0}</td>
                  <td style={{ padding: "10px", textAlign: "right", border: "1px solid #ddd", fontWeight: "600" }}>₹ {Number(item.rate || 0).toFixed(2)}</td>
                  <td style={{ padding: "10px", textAlign: "right", border: "1px solid #ddd", fontWeight: "bold", color: "#667eea" }}>₹ {Number(item.amount || 0).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Summary */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px", marginTop: "15px" }}>
          <div style={{ width: "300px", padding: "15px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "6px", color: "white" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", fontWeight: "bold", textTransform: "uppercase" }}>Total Amount</span>
              <span style={{ fontSize: "22px", fontWeight: "bold" }}>₹ {Number(total).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div style={{ marginTop: "20px", paddingTop: "15px", paddingBottom: "15px", borderTop: "2px solid #ddd", borderBottom: "2px solid #ddd" }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "12px", fontWeight: "bold", color: "#333", textTransform: "uppercase" }}>
            📋 Terms & Conditions
          </h3>
          <ol style={{ margin: "8px 0", paddingLeft: "20px", fontSize: "10px", color: "#555", lineHeight: "1.5" }}>
            {form.selectedTerms?.timelyDelivery && (
              <li style={{ marginBottom: "6px" }}>
                <strong>Timely Delivery: </strong> We complete the work on the agreed schedule. If the delay is due to our fault, no extra labor charges will be applied.
              </li>
            )}
            {form.selectedTerms?.paymentTerms && (
              <li style={{ marginBottom: "6px" }}>
                <strong>Payment Terms:</strong> 40% advance at booking, 40% when 90% of the work is completed, and the remaining 20% after final completion.
              </li>
            )}
            {form.selectedTerms?.warranty && (
              <li style={{ marginBottom: "6px" }}>
                <strong>5-Year Workmanship Warranty:</strong> We provide a 5-year warranty for painting workmanship. The warranty does not cover wall cracks, water leakage, seepage, dampness, structural damage, or damage caused by external factors.
              </li>
            )}
            {form.selectedTerms?.noHiddenCharges && (
              <li style={{ marginBottom: "6px" }}>
                <strong>No Hidden Charges:</strong> The quoted price is fixed. Any additional work requested by the customer will be charged only after prior approval.
              </li>
            )}
            {form.customTerm && form.customTerm.trim() ? (
              <li style={{ marginBottom: "6px" }}>{form.customTerm.trim()}</li>
            ) : null}
            {!(form.selectedTerms?.timelyDelivery || form.selectedTerms?.paymentTerms || form.selectedTerms?.warranty || form.selectedTerms?.noHiddenCharges || (form.customTerm && form.customTerm.trim())) && (
              <li style={{ marginBottom: "6px" }}>No terms selected.</li>
            )}
          </ol>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "7px", paddingTop: "7px", textAlign: "center" }}>
          <p style={{ margin: "5px 0", fontSize: "10px", color: "#999" }}>
            Thank you for your business! For inquiries
          </p>
          <p style={{ margin: "10px 0 0 0", fontSize: "9px", color: "#bbb" }}>
            Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
});

export default PDFTemplate;