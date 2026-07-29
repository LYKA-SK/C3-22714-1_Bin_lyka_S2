import { useState } from 'react';
import { BASE_URL } from '../api';

export default function StudentPage() {
  const [studentId, setStudentId] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);

  async function loadStudent() {
    setError(null);
    setStudent(null);
    if (!studentId) return;

    try {
      const res = await fetch(`${BASE_URL}/students/${studentId}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Student not found');
        return;
      }
      setStudent(data);
    } catch {
      setError('Network error');
    }
  }

  async function dropEnrollment(enrollmentId) {
    try {
      await fetch(`${BASE_URL}/enrollments/${enrollmentId}/drop`, { method: 'PUT' });
      loadStudent();
    } catch {
      setError('Failed to drop enrollment');
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
          onClick={loadStudent}
          className="rounded bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
        >
          Load
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {student && (
        <>
          <div className="mb-6 rounded border border-slate-200 bg-white p-4">
            <h3 className="mb-2 text-base font-semibold text-slate-800">{student.name}</h3>
            <p className="text-sm text-slate-600">Email: {student.email}</p>
            <p className="text-sm text-slate-600">Phone: {student.phone}</p>
          </div>

          {student.enrollments?.length > 0 && (
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
                  {student.enrollments.map((e, i) => (
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
                            onClick={() => dropEnrollment(e.id)}
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
          )}
        </>
      )}
    </section>
  );
}
