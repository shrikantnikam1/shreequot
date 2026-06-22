import React, { forwardRef, useState } from "react";
import shreeIcon from "../icon/shree-black.png";

const PDFTemplate = forwardRef(
  (
    { form, items, total, subtotal = 0, itemDiscountTotal = 0, customerDiscountTotal = 0, extraCharge = 0, finalTotal },
    ref
  ) => {
    const [quotationNumber] = useState(() =>
      `QT-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(5, "0")}`
    );

    const formatCurrency = (value) =>
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(Number(value) || 0);

    const safeSubtotal = Number(subtotal) || 0;
    const safeItemDiscountTotal = Number(itemDiscountTotal) || 0;
    const safeCustomerDiscountTotal = Number(customerDiscountTotal) || 0;
    const safeExtraCharge = Number(extraCharge) || 0;
    const safeFinalTotal = Number.isFinite(Number(finalTotal))
      ? Number(finalTotal)
      : Number(total) || 0;

    const hasItemDiscount = items.some((item) => Number(item.discountRate || 0) > 0);
    const hasExtraCharge = safeExtraCharge > 0;

    return (
    <div ref={ref} style={{ padding: "30px", background: "#fff", maxWidth: "850px", margin: "0 auto", fontSize: "13px", position: "relative", overflow: "hidden", fontFamily: "Arial, sans-serif", minHeight: "100%" }}>
      {/* Background Watermark Icons - Full Page Coverage */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.10, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "12%", left: "50%", transform: "translateX(-50%) rotate(-15deg)", width: "820px", maxWidth: "90%" }}>
          <img src={shreeIcon} alt="watermark" style={{ width: "100%", height: "auto", objectFit: "contain", filter: "brightness(0.92) contrast(1.1) drop-shadow(0 0 30px rgba(102, 126, 234, 0.18))" }} />
          </div>
          <div style={{ position: "absolute", bottom: "10%", left: "45%", transform: "translateX(-50%) rotate(-15deg)", width: "680px", maxWidth: "75%" }}>
          <img src={shreeIcon} alt="watermark" style={{ width: "80%", height: "auto", objectFit: "contain", filter: "brightness(0.92) contrast(1.1) drop-shadow(0 0 30px rgba(102, 126, 234, 0.18))" }} />
        </div>
      </div>

      {/* Content Wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header with Icon, Company Info, and Quotation Details */}
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "14px", alignItems: "start", marginBottom: "10px", paddingBottom: "8px", borderBottom: "2px solid #667eea" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={shreeIcon} alt="logo" style={{ width: "48px", height: "48px", objectFit: "contain" }} />
            <div>
              <p style={{ margin: 0, color: "#667eea", fontSize: "20px", fontWeight: "800", letterSpacing: "0.5px" }}>
                SHREE ENTERPRISES
              </p>
              <p style={{ margin: "4px 0 0", color: "#555", fontSize: "12px", lineHeight: "1.3" }}>
                Professional Painting & Services
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
            <div style={{ padding: "8px 10px", background: "#f4f6ff", borderRadius: "8px", border: "1px solid #dde4ff" }}>
              <p style={{ margin: "0 0 4px", color: "#666", fontSize: "8.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                Quotation #
              </p>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: "700", color: "#2f4db4" }}>{quotationNumber}</p>
            </div>
            <div style={{ padding: "8px 10px", background: "#f4f6ff", borderRadius: "8px", border: "1px solid #dde4ff" }}>
              <p style={{ margin: "0 0 4px", color: "#666", fontSize: "8.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                Date
              </p>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: "700", color: "#333" }}>{form.date || new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Company Contact Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px", marginBottom: "10px", padding: "10px 10px 12px", background: "#f8f9ff", borderRadius: "8px", border: "1px solid #e4e8ff" }}>
          <div style={{ fontSize: "11px", color: "#444", lineHeight: "1.4" }}>
            <span style={{ fontWeight: "800" }}>📍 Address:</span> Pimple Nilakh, Pune, Maharashtra 411027
          </div>
          <div style={{ fontSize: "11px", color: "#444", lineHeight: "1.4" }}>
            <span style={{ fontWeight: "800" }}>📞 Contact:</span> 7769941729 / 9172211729
          </div>
          <div style={{ fontSize: "11px", color: "#444", lineHeight: "1.4" }}>
            <span style={{ fontWeight: "800" }}>🌐 Website:</span> shree-painting.vercel.app
          </div>
        </div>

        {/* Customer Details */}
        <div style={{ marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
            <h3 style={{ margin: 0, fontSize: "12px", fontWeight: "800", color: "#333", textTransform: "uppercase", letterSpacing: "0.8px" }}>
              Customer Details
            </h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
            <div style={{ padding: "8px", background: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
              <p style={{ margin: "0 0 4px", fontSize: "8.5px", color: "#777", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7px" }}>Customer Name</p>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: "600", color: "#222" }}>{form.name || "N/A"}</p>
            </div>
            <div style={{ padding: "8px", background: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
              <p style={{ margin: "0 0 4px", fontSize: "8.5px", color: "#777", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7px" }}>Contact</p>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: "600", color: "#222" }}>{form.contact || "N/A"}</p>
            </div>
            <div style={{ gridColumn: "1 / -1", padding: "8px", background: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
              <p style={{ margin: "0 0 4px", fontSize: "8.5px", color: "#777", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7px" }}>Address</p>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: "600", color: "#222" }}>{form.address || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Services Table */}
        <div style={{ marginBottom: "15px" }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "14px", fontWeight: "bold", color: "#333", borderBottom: "2px solid #667eea", paddingBottom: "5px" }}>
            🎨SERVICES & MATERIALS
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "11px" }}>
            <thead>
              <tr style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
                <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold", border: "1px solid #ddd" }}>Sr</th>
                <th style={{ padding: "10px", textAlign: "left", fontWeight: "bold", border: "1px solid #ddd" }}>Service/Material</th>
                <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold", border: "1px solid #ddd" }}>Unit/Qty</th>
                <th style={{ padding: "10px", textAlign: "right", fontWeight: "bold", border: "1px solid #ddd" }}>Rate</th>
                {hasItemDiscount && (
                  <th style={{ padding: "10px", textAlign: "center", fontWeight: "bold", border: "1px solid #ddd" }}>Discount</th>
                )}
                <th style={{ padding: "10px", textAlign: "right", fontWeight: "bold", border: "1px solid #ddd" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff", borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", fontWeight: "600" }}>{i + 1}</td>
                  <td style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd", color: "#333" }}>{item.description || "-"}</td>
                  <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", fontWeight: "600" }}>{item.qty || 0}</td>
                  <td style={{ padding: "10px", textAlign: "right", border: "1px solid #ddd", fontWeight: "600" }}>{formatCurrency(item.rate)}</td>
                  {hasItemDiscount && (
                    <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", fontWeight: "600" }}>
                      {Number(item.discountRate || 0).toFixed(0)}%
                    </td>
                  )}
                  <td style={{ padding: "10px", textAlign: "right", border: "1px solid #ddd", fontWeight: "bold", color: "#667eea" }}>{formatCurrency(item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Summary */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px", marginTop: "15px" }}>
          <div style={{ width: "300px", padding: "15px", background: "linear-gradient(135deg, #646e9c 0%, #764ba2 100%)", borderRadius: "6px", color: "white" }}>
            <div style={{ display: "grid", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>Total Amount</span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>{formatCurrency(total)}</span>
              </div>
              {safeItemDiscountTotal > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>Item Discount</span>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>- {formatCurrency(safeItemDiscountTotal)}</span>
                </div>
              )}
              {safeItemDiscountTotal > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>Subtotal</span>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>{formatCurrency(safeSubtotal)}</span>
                </div>
              )}
              {safeCustomerDiscountTotal > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>Customer Discount</span>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>- {formatCurrency(safeCustomerDiscountTotal)}</span>
                </div>
              )}
              {hasExtraCharge && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase" }}>Extra Charge</span>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>+ {formatCurrency(safeExtraCharge)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.35)", paddingTop: "10px" }}>
                <span style={{ fontSize: "14px", fontWeight: "bold", textTransform: "uppercase" }}>Final Total</span>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>{formatCurrency(safeFinalTotal)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div style={{ marginTop: "20px", paddingTop: "15px", paddingBottom: "15px", borderTop: "2px solid #ddd", borderBottom: "2px solid #ddd" }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "12px", fontWeight: "bold", color: "#333333", textTransform: "uppercase" }}>
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