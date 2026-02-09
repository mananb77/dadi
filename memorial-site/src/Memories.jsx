import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Memories.css';

const SHEET_ID = '1mk1HrWKePLw2xMbxdWUz3Y9s6QmKlREgXjwFR-zYvLY';
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSckr0WI3dTVyqf3bI35aDqvPmyH5WQiM-7jkMeEM08FYy1rdA/viewform';

function Memories() {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&_t=${Date.now()}`
    )
      .then((res) => res.text())
      .then((text) => {
        const json = JSON.parse(
          text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?/)[1]
        );
        const rows = json.table.rows;
        const cols = json.table.cols.map((c) => c.label.toLowerCase());

        const nameIdx = cols.findIndex((c) => c.includes('name'));
        const relIdx = cols.findIndex((c) => c.includes('relationship'));
        const memIdx = cols.findIndex((c) => c.includes('memory'));
        const visIdx = cols.findIndex((c) => c.includes('visibility'));

        const publicMemories = rows
          .filter((row) => {
            const vis = row.c[visIdx]?.v || '';
            return vis.toLowerCase().includes('public');
          })
          .map((row) => ({
            name: row.c[nameIdx]?.v || 'Anonymous',
            relationship: row.c[relIdx]?.v || '',
            memory: row.c[memIdx]?.v || '',
          }))
          .filter((m) => m.memory.trim() !== '');

        setMemories(publicMemories);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <nav className="mem-nav">
        <div className="mem-nav-inner">
          <Link to="/" className="mem-nav-back">&larr; Memorial</Link>
          <span className="mem-nav-title">यादें</span>
        </div>
      </nav>

      <section className="mem-hero">
        <h1 className="mem-hero-title">Leave a Memory</h1>
        <p className="mem-hero-hindi">एक याद छोड़ें</p>
        <p className="mem-hero-subtitle">
          Share what Kalpana meant to you. Choose to display your memory on the board below, or keep it private for just the immediate family to read.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mem-share-btn"
        >
          Share a Memory
        </a>
      </section>

      <section className="mem-content">
        {loading && (
          <p className="mem-status">Loading memories&hellip;</p>
        )}

        {error && (
          <p className="mem-status">
            Could not load memories right now. Please try again later.
          </p>
        )}

        {!loading && !error && memories.length === 0 && (
          <p className="mem-status">
            No public memories shared yet. Be the first to share yours.
          </p>
        )}

        {memories.length > 0 && (
          <div className="mem-grid">
            {memories.map((m, i) => (
              <div className="mem-card" key={i}>
                <p className="mem-card-text">&ldquo;{m.memory}&rdquo;</p>
                <div className="mem-card-author">
                  <span className="mem-card-name">{m.name}</span>
                  {m.relationship && (
                    <span className="mem-card-rel">{m.relationship}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Memories;
