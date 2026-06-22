import React from "react";

export default function MobileWarningModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      backgroundColor: "rgba(0,0,0,0.65)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "520px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        padding: "28px",
        textAlign: "center",
      }}>
        <h2 style={{ margin: "0 0 12px", fontSize: "24px", color: "#1f2937" }}>Mobile View Detected</h2>
        <p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: "1.6", color: "#4b5563" }}>
          For the best experience and the most accurate print layout, please open this page on a desktop or laptop.
          This app is not fully optimized for mobile print preview.
        </p>
        <button
          type="button"
          onClick={onClose}
          style={{
            padding: "12px 24px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "9999px",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Continue anyway
        </button>
      </div>
    </div>
  );
}
