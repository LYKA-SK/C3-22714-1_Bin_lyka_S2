import { useState, useEffect } from 'react';
import { BASE_URL } from '../api';

export default function EnrollPage() {
  const [courses, setCourses] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/courses`)
      .then((r) => r.json())
      .then((data) => setCourses(data))
      .catch(() => {});
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch(`${BASE_URL}/enrollments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: Number(studentId), courseId: Number(courseId) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Enrollment failed');
        return;
      }
      setSuccess('Student enrolled successfully!');
      setStudentId('');
      setCourseId('');
    } catch {
      setError('Network error');
    }
  }

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Enroll a student</h2>

      <form onSubmit={handleSubmit} className="space-y-4 rounded border border-slate-200 bg-white p-6">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Student ID</label>
          <input
            type="number"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Course</label>
          <select
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          >
            <option value="">Select a course…</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} — ${c.fee} ({c.seatsAvailable} seats left)
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="rounded bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
        >
          Enroll
        </button>
      </form>

      {success && (
        <div className="mt-4 rounded border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">
          {success}
        </div>
      )}

      {error && (
        <div className="mt-4 rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
    </section>
  );
}
