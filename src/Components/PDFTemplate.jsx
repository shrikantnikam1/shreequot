import React, { forwardRef } from "react";
import shreeIcon from "../icon/shree-black.png";

const PDFTemplate = forwardRef(({ form, items, total }, ref) => {
  // Generate quotation number
  const quotationNumber = `QT-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(5, "0")}`;
  
  return (
    <div ref={ref} style={{ padding: "30px", background: "#fff", maxWidth: "850px", margin: "0 auto", fontSize: "13px", position: "relative", overflow: "hidden", fontFamily: "Arial, sans-serif" }}>
      {/* Background Watermark Icon */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%) rotate(-20deg)", opacity: 0.06, zIndex: 0, pointerEvents: "none" }}>
        <img src={shreeIcon} alt="watermark" style={{ width: "500px", height: "500px", objectFit: "contain" }} />
      </div>

      {/* Content Wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header with Icon and Company Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px", paddingBottom: "15px", borderBottom: "3px solid #667eea" }}>
          <img src={shreeIcon} alt="logo" style={{ width: "70px", height: "70px", objectFit: "contain" }} />
          <div>
            <h1 style={{ margin: "0 0 5px 0", color: "#667eea", fontSize: "26px", fontWeight: "bold" }}>
              SHREE ENTERPRISES
            </h1>
            <p style={{ margin: "2px 0", color: "#666", fontSize: "11px" }}>
              Professional Painting & Services
            </p>
          </div>
        </div>

        {/* Company Details Bar */}
        <div style={{ background: "#f8f9ff", padding: "10px 15px", borderRadius: "6px", marginBottom: "15px", border: "1px solid #e0e0ff" }}>
          <p style={{ margin: "3px 0", fontSize: "11px", color: "#555" }}>
            <strong>📍 Address:</strong> Balwadkar Rd, Kranti Nagar, Vishal Nagar, Pimple Nilakh, Pune, Maharashtra 411027
          </p>
          <p style={{ margin: "3px 0", fontSize: "11px", color: "#555" }}>
            <strong>📞 Contact:</strong> 7769941729 / 9172211729 | <strong>🌐 Website:</strong> https://shree-painting.vercel.app
          </p>
        </div>

        {/* Quotation & Date Info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "15px", padding: "12px", background: "#f0f0f0", borderRadius: "6px" }}>
          <div>
            <p style={{ margin: "0 0 3px 0", fontSize: "10px", color: "#666", fontWeight: "bold", textTransform: "uppercase" }}>Quotation #</p>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold", color: "#667eea" }}>{quotationNumber}</p>
          </div>
          <div>
            <p style={{ margin: "0 0 3px 0", fontSize: "10px", color: "#666", fontWeight: "bold", textTransform: "uppercase" }}>Date</p>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold", color: "#333" }}>{form.date || new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Customer Details */}
        <div style={{ marginBottom: "15px" }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", fontWeight: "bold", color: "#333", borderBottom: "2px solid #667eea", paddingBottom: "5px" }}>
            📋 CUSTOMER DETAILS
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div style={{ padding: "10px", background: "#f9f9f9", borderRadius: "4px", border: "1px solid #e0e0e0" }}>
              <p style={{ margin: "0 0 3px 0", fontSize: "10px", color: "#999", fontWeight: "bold", textTransform: "uppercase" }}>Customer Name</p>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "600", color: "#333" }}>{form.name || "N/A"}</p>
            </div>
            <div style={{ padding: "10px", background: "#f9f9f9", borderRadius: "4px", border: "1px solid #e0e0e0" }}>
              <p style={{ margin: "0 0 3px 0", fontSize: "10px", color: "#999", fontWeight: "bold", textTransform: "uppercase" }}>Contact</p>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "600", color: "#333" }}>{form.contact || "N/A"}</p>
            </div>
            <div style={{ padding: "10px", background: "#f9f9f9", borderRadius: "4px", border: "1px solid #e0e0e0", gridColumn: "1 / -1" }}>
              <p style={{ margin: "0 0 3px 0", fontSize: "10px", color: "#999", fontWeight: "bold", textTransform: "uppercase" }}>Address</p>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "600", color: "#333" }}>{form.address || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div style={{ marginBottom: "15px" }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", fontWeight: "bold", color: "#333", borderBottom: "2px solid #667eea", paddingBottom: "5px" }}>
            📦 ITEMS DETAILS
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
                <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold", border: "1px solid #ddd" }}>Sr</th>
                <th style={{ padding: "10px", textAlign: "left", fontWeight: "bold", border: "1px solid #ddd" }}>Description</th>
                <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold", border: "1px solid #ddd" }}>Qty</th>
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

        {/* Footer */}
        <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid #ddd", textAlign: "center" }}>
          <p style={{ margin: "10px 0 5px 0", fontSize: "10px", color: "#999", fontStyle: "italic" }}>
            This is a computer-generated quotation. No signature is required.
          </p>
          <p style={{ margin: "5px 0", fontSize: "10px", color: "#999" }}>
            Thank you for your business! For inquiries, please contact us.
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