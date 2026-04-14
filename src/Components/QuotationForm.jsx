export default function QuotationForm({ form, setForm }) {
  return (
    <div>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <input
        placeholder="Contact"
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
      />
      <input
        type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
    </div>
  );
}