export default function Header({ project }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
      <div>
        <h1 className="text-xl font-bold">{project.title}</h1>
        <p className="text-gray-500 text-sm">ID: {project.id}</p>
      </div>
      <p className="text-gray-400">{project.date}</p>
    </div>
  );
}
