import { useState } from 'react';

const SAMPLE_STUDENT = {
  id: 1,
  name: 'Sample Student',
  email: 'sample@example.com',
  phone: '012345678',
  enrollments: [
    { id: 1, status: 'ACTIVE', enrollDate: '2026-07-01', course: { name: 'Sample Course One', fee: 120 } },
    { id: 2, status: 'DROPPED', enrollDate: '2026-06-01', course: { name: 'Sample Course Two', fee: 200 } },
  ],
};

export default function StudentPage() {
  const [studentId, setStudentId] = useState('');
  const [showError, setShowError] = useState(false);

  function handleLoad() {
    if (!studentId) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Student lookup</h2>

      <div className="mb-4 flex gap-2">
        <input
          type="number"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="flex-1 rounded border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />
        <button
          onClick={handleLoad}
          className="rounded bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
        >
          Load
        </button>
      </div>

      {showError && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          Please enter a student ID.
        </div>
      )}

      <div className="mb-6 rounded border border-slate-200 bg-white p-4">
        <h3 className="mb-2 text-base font-semibold text-slate-800">{SAMPLE_STUDENT.name}</h3>
        <p className="text-sm text-slate-600">Email: {SAMPLE_STUDENT.email}</p>
        <p className="text-sm text-slate-600">Phone: {SAMPLE_STUDENT.phone}</p>
      </div>

      <div className="overflow-x-auto rounded border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-600">
              <th className="px-4 py-2 font-medium">Course</th>
              <th className="px-4 py-2 font-medium">Fee</th>
              <th className="px-4 py-2 font-medium">Enrolled</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_STUDENT.enrollments.map((e, i) => (
              <tr key={e.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="px-4 py-2 text-slate-800">{e.course.name}</td>
                <td className="px-4 py-2 text-slate-800">${e.course.fee}</td>
                <td className="px-4 py-2 text-slate-500">{e.enrollDate}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      e.status === 'ACTIVE'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {e.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {e.status === 'ACTIVE' && (
                    <button
                      className="rounded bg-red-500 px-3 py-1 text-xs font-medium text-white hover:bg-red-600"
                    >
                      Drop
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
