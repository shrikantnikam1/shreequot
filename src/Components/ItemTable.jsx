export default function ItemTable({ items, setItems }) {
  const handleChange = (i, e) => {
    const updated = [...items];
    updated[i][e.target.name] = e.target.value;
    updated[i].amount = updated[i].qty * updated[i].rate;
    setItems(updated);
  };

  const addRow = () => {
    setItems([...items, { description: "", qty: 0, rate: 0, amount: 0 }]);
  };

  const removeRow = (i) => {
    setItems(items.filter((_, index) => index !== i));
  };

  const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <>
      <h2 style={{ marginBottom: "15px", marginTop: "20px", color: "#333" }}>Items Details</h2>
      <div style={{ overflowX: "auto", marginBottom: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ backgroundColor: "#667eea", color: "white" }}>
              <th style={{ padding: "12px", textAlign: "left", fontWeight: "600" }}>Description</th>
              <th style={{ padding: "12px", textAlign: "center", fontWeight: "600" }}>Quantity</th>
              <th style={{ padding: "12px", textAlign: "right", fontWeight: "600" }}>Rate (₹)</th>
              <th style={{ padding: "12px", textAlign: "right", fontWeight: "600" }}>Amount (₹)</th>
              <th style={{ padding: "12px", textAlign: "center", fontWeight: "600" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #eee", transition: "0.3s" }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f9f9f9"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = "white"}>
                <td style={{ padding: "12px" }}>
                  <input
                    name="description"
                    value={item.description || ""}
                    onChange={(e) => handleChange(i, e)}
                    placeholder="E.g., Paint, Putty, etc."
                    style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "13px", boxSizing: "border-box", transition: "0.3s" }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#ddd"}
                  />
                </td>
                <td style={{ padding: "12px", textAlign: "center" }}>
                  <input
                    name="qty"
                    type="number"
                    value={item.qty || ""}
                    onChange={(e) => handleChange(i, e)}
                    placeholder="0"
                    min="0"
                    style={{ width: "80px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "13px", textAlign: "center", transition: "0.3s" }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#ddd"}
                  />
                </td>
                <td style={{ padding: "12px", textAlign: "right" }}>
                  <input
                    name="rate"
                    type="number"
                    value={item.rate || ""}
                    onChange={(e) => handleChange(i, e)}
                    placeholder="0"
                    min="0"
                    style={{ width: "100px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "13px", textAlign: "right", transition: "0.3s" }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#ddd"}
                  />
                </td>
                <td style={{ padding: "12px", textAlign: "right", fontWeight: "600", color: "#667eea" }}>₹ {Number(item.amount || 0).toFixed(2)}</td>
                <td style={{ padding: "12px", textAlign: "center" }}>
                  <button
                    onClick={() => removeRow(i)}
                    style={{ padding: "6px 12px", backgroundColor: "#ff6b6b", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "12px", transition: "0.3s" }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#ff5252"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#ff6b6b"}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        <button
          onClick={addRow}
          style={{ padding: "10px 20px", backgroundColor: "#667eea", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px", fontWeight: "600", transition: "0.3s" }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#764ba2"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#667eea"}
        >
          + Add Row
        </button>
      </div>
      <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "5px", textAlign: "right", marginTop: "15px" }}>
        <h3 style={{ margin: "0", color: "#333", fontSize: "18px" }}>Total Amount: <span style={{ color: "#667eea", fontWeight: "bold" }}>₹ {Number(total).toFixed(2)}</span></h3>
      </div>
    </>
  );
}