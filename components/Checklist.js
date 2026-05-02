export default function Checklist({ items }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Initial Checklist</h2>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <input type="checkbox" defaultChecked={item.done} />
          <span className={item.done ? "line-through text-gray-400" : ""}>
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
