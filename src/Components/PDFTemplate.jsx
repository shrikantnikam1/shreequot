import React, { forwardRef } from "react";
import shreeIcon from "../icon/shree-black.png";

const PDFTemplate = forwardRef(({ form, items, total }, ref) => {
  return (
    <div ref={ref} style={{ padding: 20, background: "#fff", maxWidth: "800px", margin: "0 auto", fontSize: "14px", position: "relative", overflow: "hidden" }}>
      {/* Background Icon */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%) rotate(-15deg)", opacity: 0.08, zIndex: 0, pointerEvents: "none" }}>
        <img src={shreeIcon} alt="watermark" style={{ width: "400px", height: "400px", objectFit: "contain" }} />
      </div>
      
      {/* Content Wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>
      {/* Company Header */}
      <div style={{ textAlign: "center", marginBottom: "15px", borderBottom: "2px solid #333", paddingBottom: "15px" }}>
        <h1 style={{ textAlign: "center", color: "red", margin: "0 0 10px 0", fontSize: "24px" }}>
          Shree Enterprises
        </h1>
        <p style={{ margin: "5px 0", fontSize: "12px" }}>
          Balwadkar Rd, Kranti Nagar, Vishal Nagar, Pimple Nilakh, Pune, Maharashtra 411027
        </p>
        <p style={{ margin: "5px 0", fontSize: "12px" }}>
          <strong>Contact:</strong> 7769941729 / 9172211729
        </p>
        <p style={{ margin: "5px 0", fontSize: "12px" }}>
          <strong>Website:</strong> https://shree-painting.vercel.app
        </p>
     </div>
 
      <h3 style={{ marginTop: "15px", marginBottom: "10px" }}>Quotation For:</h3>
      <p>Name: {form.name}</p>
      <p>Address: {form.address}</p>
      <p>Contact: {form.contact}</p>
      <p>Date: {form.date}</p>

      <table border="1" width="100%" style={{ marginTop: "10px", marginBottom: "10px", fontSize: "12px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ padding: "5px", textAlign: "center" }}>Sr</th>
            <th style={{ padding: "5px", textAlign: "left" }}>Description</th>
            <th style={{ padding: "5px", textAlign: "center" }}>Qty</th>
            <th style={{ padding: "5px", textAlign: "right" }}>Rate</th>
            <th style={{ padding: "5px", textAlign: "right" }}>Amount</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.description}</td>
              <td>{item.qty}</td>
              <td>{item.rate}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ textAlign: "right" }}>Total: ₹ {total}</h2>
      </div>
    </div>
  );
});

export default PDFTemplate;