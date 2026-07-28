// ────────────────────────────────────────────────────────────────
// STUDENT PAGE
//
// S3.3 (15 pts) — Static markup with TailwindCSS, using SAMPLE_STUDENT:
//   • a student-id input + "Load" button (styled, with hover state)
//   • a student info card (name, email, phone)
//   • an enrollments table: course name, fee, enroll date,
//     status badge (ACTIVE = green, DROPPED = gray),
//     and a "Drop" button ONLY on ACTIVE rows
//
// S4.3 (10 pts) — Clicking "Load" fetches GET /students/<id> and shows
//   the real student + enrollments. For an unknown id, show the API's
//   error message (red box) instead of the card.
//
// S4.5 (10 pts) — Clicking "Drop" calls PUT /enrollments/<id>/drop,
//   then reloads the student so the status badge updates and the button
//   disappears.
// ────────────────────────────────────────────────────────────────
import { BASE_URL } from '../api';

// Use this sample data to build the static markup for S3.3.
// In S4.3 you will replace it with data from the API.
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
  // TODO S3.3 — build the static page (input + card + enrollments table)
  // TODO S4.3 — load the real student from the API on "Load"
  // TODO S4.5 — make the "Drop" button work, then reload the student
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Student lookup</h2>
      <p className="text-sm text-slate-500">TODO: build the Student page here.</p>
    </section>
  );
}
