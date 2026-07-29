import { useState, useEffect } from 'react';
import { BASE_URL } from '../api';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  function fetchCourses(q) {
    setLoading(true);
    const params = q ? `?search=${encodeURIComponent(q)}` : '';
    fetch(`${BASE_URL}/courses${params}`)
      .then((r) => r.json())
      .then((data) => setCourses(data))
      .catch(() => setCourses([]))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchCourses(search);
  }, []);

  function handleSearch(e) {
    const q = e.target.value;
    setSearch(q);
    fetchCourses(q);
  }

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Courses</h2>

      <input
        type="text"
        placeholder="Search courses…"
        value={search}
        onChange={handleSearch}
        className="mb-4 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
      />

      {loading ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : (
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
              {courses.map((c, i) => (
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
      )}
    </section>
  );
}
