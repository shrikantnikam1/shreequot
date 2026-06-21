export default function QuotationForm({ form, setForm }) {
  const selectedTerms = form.selectedTerms || {
    timelyDelivery: true,
    paymentTerms: true,
    warranty: true,
    noHiddenCharges: true,
  };

  const updateSelectedTerm = (key, value) => {
    setForm({
      ...form,
      selectedTerms: {
        ...selectedTerms,
        [key]: value,
      },
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ marginBottom: "15px", color: "#333" }}>Customer Details</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "600", color: "#555", fontSize: "13px" }}>Customer Name *</label>
          <input
            placeholder="Enter customer name"
            value={form.name || ""}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "14px", transition: "0.3s" }}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "600", color: "#555", fontSize: "13px" }}>Address *</label>
          <input
            placeholder="Enter customer address"
            value={form.address || ""}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "14px", transition: "0.3s" }}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "600", color: "#555", fontSize: "13px" }}>Contact *</label>
          <input
            placeholder="Enter contact number"
            value={form.contact || ""}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "14px", transition: "0.3s" }}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "600", color: "#555", fontSize: "13px" }}>Quotation Date *</label>
          <input
            type="date"
            value={form.date || ""}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "14px", transition: "0.3s" }}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
        </div>
      </div>

      <div style={{ marginTop: "20px", padding: "15px", background: "#f4f6ff", borderRadius: "10px", border: "1px solid #e2e8ff" }}>
        <p style={{ margin: 0, fontWeight: "700", color: "#333", fontSize: "14px" }}>
          Select which terms to include in the PDF and add one custom term if needed.
        </p>

        <div style={{ marginTop: "15px", display: "grid", gap: "12px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#333" }}>
            <input
              type="checkbox"
              checked={selectedTerms.timelyDelivery}
              onChange={(e) => updateSelectedTerm("timelyDelivery", e.target.checked)}
              style={{ width: "18px", height: "18px" }}
            />
            Timely Delivery
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#333" }}>
            <input
              type="checkbox"
              checked={selectedTerms.paymentTerms}
              onChange={(e) => updateSelectedTerm("paymentTerms", e.target.checked)}
              style={{ width: "18px", height: "18px" }}
            />
            Payment Terms
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#333" }}>
            <input
              type="checkbox"
              checked={selectedTerms.warranty}
              onChange={(e) => updateSelectedTerm("warranty", e.target.checked)}
              style={{ width: "18px", height: "18px" }}
            />
            Warranty
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#333" }}>
            <input
              type="checkbox"
              checked={.noHiddenCharges}
              onChange={(e) => updateSelectedTerm("noHiddenCharges", e.target.checked)}
              style={{ width: "18px", height: "18px" }}
            />
            No Hidden Charges
          </label>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "6px", fontWeight: "600", color: "#444", fontSize: "13px" }}>Custom Term (optional)</label>
            <textarea
              placeholder="Add a custom term only if needed"
              value={form.customTerm || ""}
              onChange={(e) => setForm({ ...form, customTerm: e.target.value })}
              style={{ padding: "10px", border: "1px solid #ccd6ff", borderRadius: "6px", fontSize: "14px", minHeight: "80px", resize: "vertical" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}