# 04 — Rubric checklist (grader)

Setup per student: clone → `npm install` → `npm run dev` (backend already
running and freshly seeded: `npm run seed`). Walk flows A/B/C from
doc 02. Award partial points per row where noted.

## S3 — static (45 pts) — judge markup/styling (data may still be sample or live)

| # | Check | Pts |
| - | ----- | --- |
| S3.1a | Search input present and styled (border, focus visible) | 5 |
| S3.1b | Table: styled header + borders/zebra, 4 columns correct (fee shown as `$` amount) | 5 |
| S3.1c | Seats badge `x / y`, green when > 0, red when 0 | 5 |
| S3.2a | Labeled student input + labeled course select, in a styled card | 7 |
| S3.2b | Submit button with hover state; success + error boxes styled green/red | 8 |
| S3.3a | Id input + Load button styled; student info card | 7 |
| S3.3b | Enrollments table with fee + date, status badge colors, Drop only on ACTIVE | 8 |

## S4 — dynamic (55 pts) — walk the flows against the seeded API

| # | Check (fresh seed) | Pts |
| - | ------------------ | --- |
| S4.1a | Courses tab shows the 5 seeded courses (not sample data) | 7 |
| S4.1b | "Loading…" appears while fetching | 3 |
| S4.2 | Typing `data` → only *Database Fundamentals* remains | 10 |
| S4.3a | Load student `1` → Sok Pisey card + 2 enrollments | 7 |
| S4.3b | Load student `999` → red box "Student not found", no card | 3 |
| S4.4a | Select lists the 5 real courses | 3 |
| S4.4b | Student 3 + *Web Development Basics* → green success box; Courses tab seats 18 → 17 | 7 |
| S4.4c | *UX Design Workshop* → red "Course is full"; student 1 + *Web Development Basics* → red "Student is already enrolled in this course"; student 999 → red "Student not found"; boxes never both visible | 5 |
| S4.5a | Drop on student 1's *UX Design Workshop* → badge DROPPED, button gone | 7 |
| S4.5b | Courses tab: that course's seats went from 0 to 1 | 3 |

**Total: /100** · Commit history shows one commit per task (note, don't
score). Re-seed the backend between students.
