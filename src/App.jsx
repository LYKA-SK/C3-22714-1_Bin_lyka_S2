import { useState } from 'react';
import CoursesPage from './pages/CoursesPage';
import StudentPage from './pages/StudentPage';
import EnrollPage from './pages/EnrollPage';

const TABS = ['Courses', 'Student', 'Enroll'];

function App() {
  const [tab, setTab] = useState('Courses');

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-800 text-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold">Training Center Desk</h1>
          <nav className="flex gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded px-3 py-1.5 text-sm font-medium ${
                  tab === t ? 'bg-white text-slate-800' : 'hover:bg-slate-700'
                }`}
              >
                {t}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        {tab === 'Courses' && <CoursesPage />}
        {tab === 'Student' && <StudentPage />}
        {tab === 'Enroll' && <EnrollPage />}
      </main>
    </div>
  );
}

export default App;
