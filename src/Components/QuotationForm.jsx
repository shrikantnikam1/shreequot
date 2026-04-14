export default function QuotationForm({ form, setForm }) {
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
    </div>
  );
}