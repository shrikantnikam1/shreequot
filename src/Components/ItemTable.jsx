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

  const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Desc</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>
                <input
                  name="description"
                  onChange={(e) => handleChange(i, e)}
                />
              </td>
              <td>
                <input name="qty" type="number" onChange={(e) => handleChange(i, e)} />
              </td>
              <td>
                <input name="rate" type="number" onChange={(e) => handleChange(i, e)} />
              </td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addRow}>Add Row</button>
      <h3>Total: ₹ {total}</h3>
    </>
  );
}