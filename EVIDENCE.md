# Evidence

For each task below, save **two** pictures (screenshots) into the
`evidence/` folder:

- `<task>-result.png` — a picture of the app running, showing what the
  task asks for
- `<task>-code.png` — a picture of your code for that task (open the file
  in your editor and take a clean screenshot; you only need to show the
  part of the code for that task, not the whole file)

Some tasks (S3.2, S4.3, S4.4, S4.5) ask you to show **two different
states** of the app (for example: success and error). You can either put
both states in one picture, or take a second picture like
`S4.3-result-b.png` and add it under that same task.

After you finish a task, commit its code and its two pictures together,
in the same commit. Example:

```bash
git add evidence/S3.1-result.png evidence/S3.1-code.png src/pages/CoursesPage.jsx && git commit -m "S3.1 courses page"
```

Do not rename or move the `evidence/` folder or this `EVIDENCE.md` file.

---

## S3.1 — Courses page (static) (15 pts)

**Result:** save as `evidence/S3.1-result.png`

![S3.1 result](evidence/S3.1-result.png)

**Code** (`src/pages/CoursesPage.jsx`): save as `evidence/S3.1-code.png`

![S3.1 code](evidence/S3.1-code.png)

## S3.2 — Enroll form (static) (15 pts)

*Your result picture must show both the green success box and the red
error box (you can just make them visible in the code for the picture).
Put both in one picture, or add a second file `S3.2-result-b.png`.*

**Result:** save as `evidence/S3.2-result.png` (add `evidence/S3.2-result-b.png` if using a second picture)

![S3.2 result](evidence/S3.2-result.png)

**Code** (`src/pages/EnrollPage.jsx`): save as `evidence/S3.2-code.png`

![S3.2 code](evidence/S3.2-code.png)

## S3.3 — Student page (static) (15 pts)

*Your result picture must show one ACTIVE row (with a Drop button) and
one DROPPED row (with no Drop button).*

**Result:** save as `evidence/S3.3-result.png`

![S3.3 result](evidence/S3.3-result.png)

**Code** (`src/pages/StudentPage.jsx`): save as `evidence/S3.3-code.png`

![S3.3 code](evidence/S3.3-code.png)

## S4.1 — Load courses (10 pts)

*Your code picture must show `fetch` or `useEffect` being used — not the
sample data.*

**Result:** save as `evidence/S4.1-result.png`

![S4.1 result](evidence/S4.1-result.png)

**Code** (`src/pages/CoursesPage.jsx`): save as `evidence/S4.1-code.png`

![S4.1 code](evidence/S4.1-code.png)

## S4.2 — Search (10 pts)

*Your result picture should show the table after you typed something in
the search box, so it looks filtered.*

**Result:** save as `evidence/S4.2-result.png`

![S4.2 result](evidence/S4.2-result.png)

**Code** (`src/pages/CoursesPage.jsx`): save as `evidence/S4.2-code.png`

![S4.2 code](evidence/S4.2-code.png)

## S4.3 — Load student (10 pts)

*Take two result pictures: one using a real student id (it shows the
student info and their courses), and one using an id that does not exist
(it shows a red error box and no card). Put both in one picture, or add
a second file `S4.3-result-b.png`.*

**Result:** save as `evidence/S4.3-result.png` (add `evidence/S4.3-result-b.png` if using a second picture)

![S4.3 result](evidence/S4.3-result.png)

**Code** (`src/pages/StudentPage.jsx`): save as `evidence/S4.3-code.png`

![S4.3 code](evidence/S4.3-code.png)

## S4.4 — Enroll (15 pts)

*Your code picture must show that the data you send (the POST body) is
`{ studentId, courseId }`, and both values are numbers.*

*Take two result pictures: one where the enroll works, and one where it
fails (error 404 or 409). Put both in one picture, or add a second file
`S4.4-result-b.png`.*

**Result:** save as `evidence/S4.4-result.png` (add `evidence/S4.4-result-b.png` if using a second picture)

![S4.4 result](evidence/S4.4-result.png)

**Code** (`src/pages/EnrollPage.jsx`): save as `evidence/S4.4-code.png`

![S4.4 code](evidence/S4.4-code.png)

## S4.5 — Drop (10 pts)

*Take two result pictures: one of the student page before you click Drop
(status is ACTIVE), and one after (the badge and button have changed).
Put both in one picture, or add a second file `S4.5-result-b.png`.*

**Result:** save as `evidence/S4.5-result.png` (add `evidence/S4.5-result-b.png` if using a second picture)

![S4.5 result](evidence/S4.5-result.png)

**Code** (`src/pages/StudentPage.jsx`): save as `evidence/S4.5-code.png`

![S4.5 code](evidence/S4.5-code.png)
