const SAMPLE_COURSES = [
  { id: 1, name: 'Sample Course One', fee: 120, seatsTotal: 20, seatsAvailable: 18 },
  { id: 2, name: 'Sample Course Two', fee: 200, seatsTotal: 10, seatsAvailable: 0 },
];

export default function CoursesPage() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Courses</h2>

      <input
        type="text"
        placeholder="Search courses…"
        className="mb-4 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
      />

      <div className="overflow-x-auto rounded border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-600">
              <th className="px-4 py-2 font-medium">ID</th>
              <th className="px-4 py-2 font-medium">Name</th>
              <th className="px-4 py-2 font-medium">Fee</th>
              <th className="px-4 py-2 font-medium">Seats</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_COURSES.map((c, i) => (
              <tr key={c.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-4 py-2 text-slate-500">{c.id}</td>
                <td className="px-4 py-2 text-slate-800">{c.name}</td>
                <td className="px-4 py-2 text-slate-800">${c.fee}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      c.seatsAvailable > 0
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {c.seatsAvailable} / {c.seatsTotal}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
