// ────────────────────────────────────────────────────────────────
// ENROLL PAGE
//
// S3.2 (15 pts) — Static form markup with TailwindCSS:
//   • labeled student-id input (number)
//   • labeled course <select> (use the two SAMPLE_COURSES as options
//     for now)
//   • a submit button with a hover state
//   • a green success box and a red error box (hardcode both visible
//     for S3.2 — you will show/hide them in S4.4)
//
// S4.4 (15 pts) — Make it dynamic:
//   • fill the select with real courses from GET /courses (name + fee +
//     how many seats left)
//   • on submit: POST /enrollments with { studentId, courseId } (numbers!)
//   • success → show a success message in the green box, clear the form
//   • failure (404 / 409) → show the API's error message in the red box
//   • only one of the two boxes is visible at a time
// ────────────────────────────────────────────────────────────────
import { BASE_URL } from '../api';

// Use this sample data for the select options in S3.2.
// In S4.4 you will replace it with data from the API.
const SAMPLE_COURSES = [
  { id: 1, name: 'Sample Course One', fee: 120, seatsAvailable: 18 },
  { id: 2, name: 'Sample Course Two', fee: 200, seatsAvailable: 0 },
];

export default function EnrollPage() {
  // TODO S3.2 — build the static form (inputs + button + boxes)
  // TODO S4.4 — wire the form to the API
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Enroll a student</h2>
      <p className="text-sm text-slate-500">TODO: build the Enroll form here.</p>
    </section>
  );
}
