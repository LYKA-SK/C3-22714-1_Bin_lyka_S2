# 02 — Screens, user flows & API reference

## Screens (3 tabs — shell and navigation already work)

```
┌─────────────────────────────────────────────────────────┐
│ Training Center Desk      [Courses] [Student] [Enroll]  │
├─────────────────────────────────────────────────────────┤
│ COURSES                                                 │
│  [ search by name…                                    ] │
│  ┌────┬───────────────────────┬───────┬───────────┐     │
│  │ ID │ Name                  │ Fee   │ Seats     │     │
│  │ 1  │ Web Development Bas…  │ $120  │ ● 18 / 20 │     │
│  │ 5  │ UX Design Workshop    │ $200  │ ● 0 / 1   │     │  ← red badge
│  └────┴───────────────────────┴───────┴───────────┘     │
└─────────────────────────────────────────────────────────┘

STUDENT  [ student id ] [Load]
         ┌ Sok Pisey · pisey@example.com · 012345678 ┐
         │ Course        Fee    Enrolled   Status    │
         │ Web Develop…  $120   26/06      ACTIVE  [Drop]
         │ UX Design W…  $200   05/07      ACTIVE  [Drop]
         └───────────────────────────────────────────┘

ENROLL   Student id [   ]
         Course     [ — choose a course — ▼ ]
         [ Enroll ]
         ✔ green success box: "Student enrolled! …"
         ✖ red error box: message from the API
```

## User flows (used for grading)

- **Flow A — look up:** Courses tab → type `data` → table shows only
  *Database Fundamentals*.
- **Flow B — enroll:** Enroll tab → student `3`, course *Web Development
  Basics* → Enroll → green success box → Courses tab shows its seats went
  down by 1. Then: course *UX Design Workshop* (0 seats) → red box
  "Course is full"; student `1` + *Web Development Basics* again → red box
  "Student is already enrolled in this course"; student `999` → red box
  "Student not found".
- **Flow C — drop:** Student tab → load student `1` → 2 ACTIVE enrollments
  → Drop on *UX Design Workshop* → badge flips to DROPPED, button
  disappears → Courses tab shows its seats went up by 1.

## API reference (base `http://localhost:3000/api`)

| Method | Path                    | Body                       | Success                          | Errors            |
| ------ | ----------------------- | -------------------------- | -------------------------------- | ----------------- |
| GET    | `/courses`              | —                          | `[{ id, name, fee, seatsTotal, seatsAvailable }]` | — |
| GET    | `/courses?search=txt`   | —                          | same, filtered by name           | —                 |
| GET    | `/students/:id`         | —                          | student + `enrollments[]`, each has `course` | 404   |
| POST   | `/enrollments`          | `{ studentId, courseId }`  | 201, enrollment with `status: ACTIVE` and `enrollDate` | 404, 409 |
| PUT    | `/enrollments/:id/drop` | —                          | 200, enrollment with `status: DROPPED` | 404, 409    |

Every error response is JSON: `{ "error": "message" }`.
