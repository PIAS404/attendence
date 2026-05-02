export default function RevisionCard({ rev }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <div className="flex justify-between mb-2">
        <h3 className="font-bold">Revision {rev.revisionNumber}</h3>
        <span className="text-gray-400">{rev.date}</span>
      </div>

      {rev.items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input type="checkbox" defaultChecked={item.done} />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
