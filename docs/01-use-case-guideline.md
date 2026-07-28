# 01 — Use case & guideline

## Use case

The training center from Session 1 has a working backend API. Now the
front-desk staff need a **web app**: see all courses with fee and free
seats, look up a student and their enrollments, enroll a student in a
course, and drop an enrollment.

You build this app in **React + TailwindCSS**. The backend is **provided
and finished** — you never write or change backend code in this session.

## Setup (do this first, ~10 min)

1. **Backend** (provided folder, same steps as Session 1):
   `npm install` → set `.env` → `npx prisma migrate dev` → `npm run seed`
   → `npm run dev` → check <http://localhost:3000/api/courses> in the browser.
2. **Frontend** (this folder): `npm install` → `npm run dev`
   → open <http://localhost:5173>.
3. Fork/clone per the git workflow, name your repo `C3_<ID>_<Name>_S2`.

## Rules

- Commit after each task (`S3.1 courses table`, `S4.4 enroll form`, …);
  push before time is up — the last push is your submission time.
- The tab shell, Tailwind setup, and `src/api.js` are given — style details
  (exact colors, spacing) are up to you, but every state named in the
  requirements must be clearly visible.
- Allowed: React, Tailwind and MDN official docs, your own notes.
  Not allowed: AI tools, chat apps, copying from classmates.
- Reset the backend data anytime with `npm run seed` (in the backend folder).
