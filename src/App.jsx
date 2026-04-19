import { useMemo, useState } from 'react';

const courses = [
  {
    title: 'Machine Learning',
    syllabus: [
      'Supervised and unsupervised learning',
      'Model evaluation and metrics',
      'Feature engineering and model tuning',
      'Deployment basics',
    ],
  },
  {
    title: 'GenAI',
    syllabus: [
      'Transformer architecture fundamentals',
      'Prompt engineering strategies',
      'Fine-tuning and adaptation methods',
      'Responsible AI practices',
    ],
  },
  {
    title: 'Agentic AI',
    syllabus: [
      'Autonomous agent workflows',
      'Tool use and API integration',
      'Planning, memory, and feedback loops',
      'Multi-agent collaboration patterns',
    ],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [signedIn, setSignedIn] = useState(false);

  const userName = useMemo(() => (signedIn ? 'Learner' : 'Guest'), [signedIn]);

  return (
    <main className="page">
      <section className="card">
        <header className="header">
          <h1>AI Learning Dashboard</h1>
          <p>Track your enrolled courses and view their syllabus in one place.</p>
        </header>

        <nav className="tabs" aria-label="Dashboard sections">
          <button
            className={activeTab === 'login' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('login')}
            type="button"
          >
            Gmail Login
          </button>
          <button
            className={activeTab === 'dashboard' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('dashboard')}
            type="button"
          >
            Dashboard
          </button>
        </nav>

        {activeTab === 'login' ? (
          <section className="panel" aria-live="polite">
            <h2>Sign in with Gmail</h2>
            <p>
              Use your Gmail account to securely access your learning dashboard.
            </p>
            <button
              className="gmail-btn"
              type="button"
              onClick={() => {
                setSignedIn(true);
                setActiveTab('dashboard');
              }}
            >
              Continue with Gmail
            </button>
            <small>
              Demo mode: this button simulates Gmail authentication for the UI.
            </small>
          </section>
        ) : (
          <section className="panel" aria-live="polite">
            <h2>{userName}&apos;s Courses</h2>
            {!signedIn && (
              <p className="hint">
                You are viewing a preview. Sign in from the Gmail Login tab to personalize this dashboard.
              </p>
            )}

            <div className="course-grid">
              {courses.map((course) => (
                <article className="course" key={course.title}>
                  <h3>{course.title}</h3>
                  <h4>Syllabus</h4>
                  <ul>
                    {course.syllabus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
