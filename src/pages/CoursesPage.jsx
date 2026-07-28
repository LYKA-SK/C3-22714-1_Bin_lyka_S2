// ────────────────────────────────────────────────────────────────
// COURSES PAGE
//
// S3.1 (15 pts) — Static markup with TailwindCSS, using SAMPLE_COURSES:
//   • a search input styled with Tailwind (full width, border, focus state)
//   • a table: styled header row, borders or zebra rows, one row per
//     course with id, name, fee (show it as "$120"), and a seats badge
//   • badge shows "available / total" — green when seatsAvailable > 0,
//     red when it is 0
//
// S4.1 (10 pts) — Load the real courses from GET /courses when the page
//   mounts (useEffect + fetch). Show "Loading…" while the request runs.
//   Replace SAMPLE_COURSES with the fetched data.
//
// S4.2 (10 pts) — Make the search input work: typing (or submitting)
//   refetches with GET /courses?search=<text> so the table only shows
//   matching names.
// ────────────────────────────────────────────────────────────────
import { BASE_URL } from '../api';

// Use this sample data to build the static markup for S3.1.
// In S4.1 you will replace it with data from the API.
const SAMPLE_COURSES = [
  { id: 1, name: 'Sample Course One', fee: 120, seatsTotal: 20, seatsAvailable: 18 },
  { id: 2, name: 'Sample Course Two', fee: 200, seatsTotal: 10, seatsAvailable: 0 },
];

export default function CoursesPage() {
  // TODO S3.1 — build the static page (search input + table)
  // TODO S4.1 — load real courses from the API
  // TODO S4.2 — wire the search input to ?search=
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Courses</h2>
      <p className="text-sm text-slate-500">TODO: build the Courses page here.</p>
    </section>
  );
}
