# 03 — Requirements (100 pts)

Work top-to-bottom: build all static pages first (S3), then make them
dynamic (S4). Commit after each task.

## S3 — Static UI with TailwindCSS (≈50 min, 45 pts)

Use the `SAMPLE_*` data in each file. Exact colors are your choice, but
every listed element and state must be clearly styled and distinct.

| Task | File | Requirements | Pts |
| ---- | ---- | ------------ | --- |
| S3.1 | `CoursesPage.jsx` | Search input (border + focus state); table with styled header row and borders/zebra rows; columns id, name, fee (`$` amount), seats badge `available / total` — green > 0, red = 0 | 15 |
| S3.2 | `EnrollPage.jsx` | Form card: labeled number input for student id, labeled course `<select>` (sample options), submit button with hover state; green success box + red error box (both hardcoded visible for now) | 15 |
| S3.3 | `StudentPage.jsx` | Student-id input + Load button; student info card (name, email, phone); enrollments table with course name, fee, enroll date, status badge (ACTIVE green, DROPPED gray), Drop button only on ACTIVE rows | 15 |

## S4 — Dynamic UI (≈55 min, 55 pts)

Replace the sample data with real API calls (`fetch`, base URL in
`src/api.js`).

| Task | File | Requirements | Pts |
| ---- | ---- | ------------ | --- |
| S4.1 | `CoursesPage.jsx` | Fetch `GET /courses` on mount; "Loading…" while pending; real rows in the table | 10 |
| S4.2 | `CoursesPage.jsx` | Search input refetches `GET /courses?search=<text>` (on change or on submit) | 10 |
| S4.3 | `StudentPage.jsx` | Load button fetches `GET /students/<id>`; card + enrollments render from the response; unknown id → the API error message in a red box, no card | 10 |
| S4.4 | `EnrollPage.jsx` | Select filled from `GET /courses`; submit posts `{ studentId, courseId }` as numbers; success → green success box + form cleared; 404/409 → API error message in red box; only one box visible at a time | 15 |
| S4.5 | `StudentPage.jsx` | Drop button calls `PUT /enrollments/<id>/drop`, then reloads the student (badge updates, button disappears) | 10 |

**Buffer + submission: ~15 min.** Partial work still earns points — commit
and push even unfinished tasks.
