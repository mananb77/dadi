import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function Divider() {
  return (
    <div className="divider">
      <span className="divider-symbol">&#9753;</span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-title">
          In Loving Memory<span>श्रद्धांजलि</span>
        </div>
        <ul className="nav-links">
          <li><a href="#bio">Her Life</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#wisdom">Wisdom</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#gallery">Photos</a></li>
          <li><a href="#spiritual">Spiritual</a></li>
          <li><Link to="/lifestory" style={{ color: 'var(--gold)' }}>Her Story</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-prayer fade-in">
          ॐ शान्ति शान्ति शान्ति
        </p>

        <div className="hero-photo-container fade-in">
          <img
            src={`${import.meta.env.BASE_URL}photos/IMG-20210801-WA0000 Copy.JPG`}
            alt="Dadi in her favorite sky blue saree"
          />
        </div>

        <h1 className="hero-name-hindi fade-in">कल्पना भार्गव</h1>
        <p className="hero-name-english fade-in">Kalpana Bhargava</p>
        <p className="hero-subtitle fade-in">
          A Life of Purpose, Love &amp; Devotion (1944 &ndash; 2026)
        </p>

        <div className="hero-quote fade-in">
          <p className="hero-quote-hindi">
            &ldquo;मेरा उद्देश्य था &ndash; अपने बच्चों को आगे बढ़ाना&rdquo;
          </p>
          <p className="hero-quote-english">
            &ldquo;My purpose was &ndash; to help my children progress&rdquo;
          </p>
        </div>

        <div className="hero-links fade-in">
          <Link to="/lifestory" className="hero-link hero-link-primary">
            Her Life Story
          </Link>
          <a href="https://youtu.be/Vr5SEu2DvKY" target="_blank" rel="noopener noreferrer" className="hero-link">
            &#9654; Lifestory Video
          </a>
          <a href="https://photos.app.goo.gl/njNxdR8tnVYrUKhU9" target="_blank" rel="noopener noreferrer" className="hero-link">
            Best Photos
          </a>
          <a href="https://photos.app.goo.gl/QHKtYrbuytDfGmoQA" target="_blank" rel="noopener noreferrer" className="hero-link">
            Dadi Memories
          </a>
        </div>
      </div>
    </section>
  );
}

function Bio() {
  const cards = [
    { label: 'Scholar', hindi: 'विद्वान' },
    { label: 'Educator', hindi: 'शिक्षिका' },
    { label: 'Warrior Spirit', hindi: 'योद्धा' },
    { label: 'Homemaker', hindi: 'गृहिणी' },
    { label: 'Devotee', hindi: 'भक्त' },
  ];

  return (
    <section className="bio" id="bio">
      <div className="section-inner">
        <h2 className="section-title fade-in">Who She Was</h2>
        <p className="section-title-hindi fade-in">वो कौन थीं</p>

        <p className="bio-text fade-in">
          Born in Delhi, 1944. Seventh child in her family. Daughter of a
          railway mail guard. A woman who broke barriers, pursued knowledge
          relentlessly, and dedicated 84 years to service, family, and
          unwavering faith. She lived in railway bungalows, walked kilometers
          to school, and grew up in an era without electricity or running
          water &mdash; yet she never stopped reaching higher. A scholar of
          Economics, an NCC-trained cadet, a mathematics teacher, mother of
          three sons, grandmother, and lifelong learner.
        </p>

        <div className="bio-cards fade-in">
          {cards.map((card) => (
            <div className="bio-card" key={card.label}>
              <span className="bio-card-label">{card.label}</span>
              <span className="bio-card-hindi">{card.hindi}</span>
            </div>
          ))}
        </div>

        <div className="bio-cta fade-in">
          <Link to="/lifestory" className="bio-cta-link">
            Read Her Full Life Story
            <span className="bio-cta-hindi">उनकी पूरी जीवन कहानी पढ़ें</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function IndiaMap() {
  // City positions in SVG space (viewBox 0 0 1024 1024)
  // Mapped from real lat/lon coordinates onto the mapsicon India outline
  const cities = [
    { name: 'Delhi', x: 387, y: 275, primary: true },
    { name: 'Jodhpur', x: 302, y: 350 },
    { name: 'Kota', x: 360, y: 385 },
    { name: 'Ajmer', x: 334, y: 343 },
    { name: 'Udaipur', x: 316, y: 405 },
    { name: 'Jaipur', x: 358, y: 330, primary: true },
  ];

  return (
    <div className="india-map-container fade-in">
      <svg viewBox="0 0 1024 1024" className="india-map" xmlns="http://www.w3.org/2000/svg">
        {/* Real India outline from mapsicon (public domain, potrace) */}
        <g transform="translate(0,1024) scale(0.1,-0.1)">
          <path
            d="M4040 10225 c-14 -8 -40 -14 -58 -15 -64 0 -119 -22 -173 -66 -57
-47 -124 -77 -199 -89 -25 -4 -89 -29 -142 -56 l-97 -49 -17 -56 c-9 -33 -30
-71 -49 -92 -31 -34 -35 -36 -121 -42 -71 -5 -104 -13 -158 -38 -83 -39 -130
-40 -211 -7 -33 14 -91 30 -130 36 -38 6 -86 19 -106 29 -46 24 -69 26 -152
16 -65 -8 -68 -10 -82 -43 -21 -50 -19 -76 10 -103 16 -15 25 -35 25 -54 0
-17 7 -40 15 -50 22 -30 18 -58 -12 -82 -27 -21 -27 -24 -16 -65 10 -38 9 -50
-8 -88 -10 -24 -19 -51 -19 -60 0 -9 28 -44 63 -77 101 -97 102 -98 156 -95
54 2 47 11 67 -89 5 -26 12 -32 57 -44 29 -8 69 -17 90 -21 43 -7 49 -28 18
-66 -15 -19 -30 -24 -84 -27 -62 -4 -67 -6 -95 -42 -17 -20 -45 -43 -63 -50
l-32 -13 5 -123 c5 -137 -1 -162 -49 -196 -17 -13 -61 -60 -97 -106 -50 -63
-66 -90 -66 -115 0 -57 -9 -71 -56 -91 -58 -24 -107 -86 -205 -257 -77 -134
-85 -141 -164 -154 -64 -11 -92 -30 -110 -78 -10 -27 -34 -58 -60 -80 -54 -45
-101 -127 -110 -190 -4 -26 -12 -50 -17 -53 -5 -3 -30 2 -54 11 -31 12 -58 15
-87 11 -23 -4 -83 -9 -134 -12 l-92 -6 -3 49 c-3 47 -4 48 -38 51 -54 4 -102
-41 -136 -128 -25 -64 -34 -75 -96 -121 -37 -28 -68 -57 -68 -63 0 -7 -9 -21
-21 -32 -12 -10 -30 -31 -40 -46 -25 -35 -12 -72 33 -91 18 -8 44 -26 58 -41
21 -23 30 -26 61 -21 31 5 39 3 52 -16 17 -24 14 -65 -9 -111 -24 -47 -17 -87
27 -160 l41 -68 54 0 c53 0 54 0 54 -30 0 -16 11 -64 25 -107 14 -43 25 -94
25 -114 0 -28 6 -39 25 -49 22 -12 24 -18 19 -49 -3 -20 -15 -44 -26 -54 -17
-14 -19 -22 -11 -39 7 -16 5 -30 -6 -50 -14 -24 -23 -28 -58 -28 -36 0 -44 4
-48 23 -6 22 -7 22 -100 13 -78 -8 -96 -13 -101 -28 -9 -28 -70 -24 -118 10
-41 28 -41 28 -281 35 l-50 2 -3 -46 c-3 -43 -5 -47 -34 -53 -17 -3 -49 -6
-73 -6 -46 0 -82 -27 -72 -55 8 -20 122 -20 157 0 32 18 40 18 40 1 0 -8 -17
-20 -37 -27 -21 -6 -44 -16 -50 -22 -24 -18 -14 -76 27 -157 35 -69 44 -80 66
-80 15 0 48 -16 73 -35 56 -40 109 -54 211 -53 69 1 78 3 107 31 28 26 37 29
77 25 25 -3 49 -1 55 5 7 7 12 5 17 -7 10 -27 -46 -107 -104 -147 -38 -27 -65
-38 -106 -42 -31 -3 -66 -13 -78 -21 -35 -25 -95 -20 -130 9 -16 14 -35 25
-42 25 -18 0 -36 -21 -36 -42 0 -25 74 -143 125 -198 22 -25 57 -70 78 -100
20 -30 95 -123 166 -206 116 -135 134 -152 168 -157 26 -5 45 -2 62 9 17 12
37 15 73 11 41 -5 61 -1 126 27 42 19 87 37 99 40 12 4 31 18 42 32 13 16 29
24 51 24 38 0 69 32 70 73 0 19 12 38 40 63 47 43 51 76 20 147 l-21 46 27 63
c24 59 38 77 57 78 4 0 7 -6 7 -12 0 -28 17 -40 37 -30 11 6 25 7 33 2 11 -7
7 -15 -19 -39 -28 -26 -32 -36 -26 -59 3 -15 7 -43 9 -62 1 -19 8 -46 15 -59
11 -20 19 -23 49 -18 21 3 45 8 56 13 14 5 17 3 14 -7 -5 -14 -26 -23 -80 -34
-21 -4 -34 -18 -53 -55 -31 -62 -32 -87 -1 -101 21 -10 25 -20 31 -83 3 -39
13 -82 22 -94 18 -29 11 -62 -22 -114 -14 -20 -29 -56 -35 -80 -21 -93 -3
-256 34 -296 18 -20 17 -22 -9 -57 -27 -34 -27 -36 -10 -55 10 -11 31 -20 47
-20 25 0 28 -4 28 -31 0 -16 -9 -47 -19 -67 -39 -76 -41 -97 -15 -136 20 -29
23 -40 14 -56 -9 -17 -7 -28 9 -54 15 -24 21 -50 21 -95 0 -54 4 -68 35 -113
35 -50 40 -76 15 -70 -7 1 -9 -4 -6 -15 19 -62 27 -127 36 -272 l10 -164 75
-115 c59 -90 75 -122 75 -151 0 -28 9 -48 40 -85 22 -26 40 -59 40 -71 0 -15
11 -32 30 -45 38 -27 86 -128 95 -200 4 -30 18 -74 31 -97 18 -31 24 -57 24
-100 0 -32 5 -76 10 -98 6 -22 15 -74 20 -115 7 -49 22 -99 44 -145 19 -38 41
-95 50 -125 11 -37 48 -101 116 -199 55 -79 100 -148 100 -154 0 -5 15 -44 34
-87 19 -42 37 -99 41 -126 10 -74 25 -114 62 -169 20 -30 33 -62 33 -81 0 -25
12 -42 59 -87 70 -67 104 -142 56 -124 -8 4 -15 18 -15 32 0 20 -5 25 -25 25
-25 0 -33 -14 -15 -25 6 -3 10 -35 10 -71 0 -57 4 -71 31 -110 17 -25 42 -73
56 -107 31 -77 123 -175 207 -220 33 -18 68 -45 80 -64 27 -42 49 -41 97 2 22
19 49 35 61 35 13 0 43 23 80 61 53 56 58 65 58 107 0 34 8 60 32 99 36 59 58
71 161 83 41 5 76 15 87 25 21 19 72 15 122 -11 43 -22 68 -18 68 11 0 21 -8
27 -66 45 -36 11 -72 20 -80 20 -16 0 -34 31 -34 58 0 10 15 39 33 63 44 57
107 171 107 192 0 13 10 16 53 16 28 -1 59 0 67 0 8 1 27 -1 42 -5 24 -5 29
-2 44 30 15 31 16 44 6 98 -9 44 -9 89 -3 147 8 77 7 88 -13 125 -27 52 -29
193 -4 241 9 17 19 48 23 69 5 26 15 41 32 49 26 12 61 73 99 174 19 50 24 83
24 153 0 88 0 89 -34 117 -18 15 -39 38 -45 51 -15 28 -7 114 16 187 19 58 18
121 -2 170 -18 41 -19 137 -4 203 6 26 27 83 46 128 39 87 60 106 136 119 l39
6 -7 75 c-5 50 -4 74 3 74 20 0 42 -44 42 -85 0 -46 14 -65 45 -65 28 0 46 21
84 96 44 86 46 88 146 79 l85 -7 64 52 c64 50 116 104 116 120 0 4 -13 13 -30
20 -20 8 -30 19 -30 34 0 34 56 104 90 111 16 3 39 14 52 24 13 10 57 35 98
55 113 56 136 75 189 151 53 76 137 153 189 174 22 9 50 39 87 92 31 43 74 92
98 111 53 41 54 42 62 96 4 27 20 61 42 90 31 41 43 49 92 60 62 14 95 37 73
51 -7 4 -24 6 -38 3 -19 -3 -24 0 -24 15 0 48 80 74 118 40 24 -22 54 -21 100
2 20 10 53 22 72 26 77 16 119 49 194 148 25 34 36 59 36 83 0 28 6 38 30 52
37 21 38 45 4 77 l-27 25 13 92 c10 79 17 100 46 139 35 48 59 59 131 59 47 0
148 62 169 103 10 17 20 74 24 132 8 89 13 108 39 150 16 26 39 54 49 61 18
12 20 11 24 -10 6 -27 -5 -50 -38 -86 -30 -32 -45 -156 -24 -195 8 -16 11 -43
7 -79 -6 -62 8 -83 31 -48 8 12 25 22 38 22 18 0 23 6 26 31 4 39 29 59 52 40
11 -9 16 -30 16 -62 0 -52 19 -67 39 -31 7 12 22 17 53 17 36 0 43 3 46 21 2
16 -5 23 -30 30 -27 8 -34 15 -36 42 -3 28 0 32 21 32 23 0 24 3 20 53 -2 28
-9 74 -14 101 -5 27 -7 76 -3 108 l7 58 -32 0 c-34 0 -35 2 -32 71 2 40 0 46
-23 57 -15 6 -26 20 -26 31 0 10 -12 45 -27 77 -24 52 -25 62 -15 101 7 24 12
72 12 106 l0 63 -55 27 c-31 15 -68 27 -84 27 -48 0 -81 71 -46 100 8 7 15 23
15 36 0 20 5 24 29 24 34 0 48 15 53 55 l3 30 66 -3 c50 -2 69 1 79 13 11 13
9 20 -14 44 -15 15 -30 41 -35 57 -6 25 -13 29 -49 32 -29 2 -43 8 -47 21 -11
36 -53 71 -84 71 -40 0 -45 12 -21 52 11 18 20 41 20 50 0 9 18 29 40 45 42
30 51 63 29 105 -6 11 -8 22 -5 25 10 10 92 -27 116 -52 28 -30 70 -34 70 -6
0 35 46 14 66 -31 21 -46 67 -88 97 -88 11 0 31 10 44 22 14 13 27 18 33 12 5
-5 21 -65 35 -134 24 -118 28 -127 62 -156 30 -27 49 -33 122 -44 87 -12 420
-9 513 5 43 6 51 4 108 -35 l61 -41 -29 -34 c-22 -24 -31 -48 -36 -88 -7 -51
-11 -59 -74 -119 -37 -35 -85 -72 -107 -82 -46 -21 -92 -72 -105 -115 -6 -23
-3 -36 16 -65 20 -29 24 -47 24 -106 0 -86 12 -115 40 -100 11 6 20 20 20 30
0 31 18 24 25 -10 7 -32 30 -39 66 -20 16 9 19 22 19 77 0 64 1 67 40 104 26
25 40 47 40 64 0 23 3 25 50 25 61 0 65 -5 86 -142 9 -57 31 -143 49 -193 18
-49 40 -116 49 -148 10 -35 24 -60 34 -64 9 -4 34 -17 56 -31 44 -27 62 -19
47 20 -8 21 -5 32 14 58 22 30 23 34 9 72 -8 24 -14 78 -14 130 0 78 3 92 20
106 11 10 24 38 29 65 5 26 17 57 27 68 21 23 26 120 10 173 -8 27 -7 29 14
23 13 -3 36 1 53 9 28 15 30 14 56 -10 23 -22 31 -24 56 -17 68 20 67 19 60
80 -6 52 -3 61 35 136 23 44 58 97 77 119 33 36 35 42 30 89 -5 35 -14 59 -32
77 -40 41 -33 69 27 110 29 19 60 49 69 65 26 44 40 148 33 245 -6 106 6 137
53 132 26 -3 36 3 58 32 15 20 36 36 47 36 13 0 24 11 31 29 6 17 21 32 33 35
12 3 46 32 75 63 53 57 55 58 91 49 31 -8 41 -6 58 9 19 17 25 18 53 6 46 -19
94 -25 101 -12 4 6 -13 33 -38 59 -26 27 -46 56 -46 64 0 9 21 33 48 54 75 60
81 71 79 141 -1 59 -3 63 -27 68 -15 3 -42 5 -61 4 -19 -1 -52 7 -76 19 -53
27 -85 28 -108 2 -10 -11 -26 -20 -37 -20 -15 0 -18 8 -18 57 0 50 4 61 31 89
l30 31 -38 32 c-25 21 -46 31 -60 28 -13 -2 -29 3 -40 15 -18 20 -11 34 21 40
37 6 26 23 -29 46 -76 31 -104 28 -158 -13 -29 -22 -57 -35 -76 -35 -23 0 -31
-5 -31 -18 0 -11 -8 -26 -17 -35 -25 -21 -118 -5 -153 28 -45 42 -76 41 -98
-2 -7 -12 -32 -29 -56 -38 -34 -13 -45 -23 -50 -45 -4 -22 -12 -29 -32 -32
-20 -2 -30 -11 -38 -33 -23 -62 -35 -75 -72 -75 -70 0 -154 -52 -154 -96 0
-45 -20 -69 -70 -87 -27 -10 -60 -30 -73 -45 -14 -15 -38 -42 -53 -59 -25 -28
-39 -34 -104 -44 -49 -7 -82 -18 -96 -31 -19 -17 -29 -18 -65 -11 -38 7 -44
12 -47 36 -3 21 -11 29 -41 37 -21 6 -44 17 -51 25 -15 18 -36 19 -47 2 -4 -7
-20 -20 -35 -29 -23 -15 -28 -15 -38 -3 -16 19 -60 19 -96 0 -27 -14 -29 -13
-33 3 -4 22 -31 52 -46 52 -7 0 -20 9 -29 19 -30 33 -79 35 -132 7 -26 -14
-69 -30 -96 -37 -44 -12 -52 -19 -78 -65 -19 -33 -30 -66 -30 -90 0 -36 -5
-43 -67 -91 -86 -66 -96 -61 -92 51 2 58 -1 87 -11 104 -17 26 -55 29 -86 8
-11 -8 -43 -16 -69 -18 l-49 -3 -13 -65 c-7 -36 -20 -102 -29 -148 l-15 -83
25 -30 c31 -36 33 -75 6 -109 -12 -16 -20 -41 -20 -67 0 -42 0 -42 -26 -31
-20 9 -27 9 -34 -2 -5 -8 -30 -13 -68 -14 -33 -1 -67 -7 -75 -15 -20 -16 -57
-6 -75 20 -16 23 -58 25 -66 4 -7 -20 -23 -19 -92 9 -71 28 -217 51 -273 41
-39 -6 -40 -6 -49 27 -10 40 -40 48 -88 22 -33 -18 -34 -18 -58 5 -18 17 -32
22 -49 17 -18 -4 -31 2 -53 25 -86 91 -237 189 -291 189 -7 0 -27 -10 -44 -22
-26 -19 -33 -21 -62 -10 -45 16 -56 15 -101 -9 l-38 -20 -54 25 c-30 14 -70
26 -89 26 -26 0 -38 7 -55 31 -21 28 -26 30 -77 28 -53 -3 -57 -1 -110 45 -49
44 -57 47 -79 37 -42 -19 -60 -13 -120 37 -45 38 -60 58 -68 91 -10 39 -15 44
-71 66 -33 14 -73 34 -89 46 -23 17 -37 20 -76 16 -40 -5 -50 -2 -67 16 -10
12 -35 34 -54 49 l-34 28 28 21 c28 21 28 23 21 98 -6 73 -5 78 20 108 14 17
26 40 26 52 0 14 12 26 37 38 24 12 44 31 54 53 10 19 29 46 43 59 54 51 28
84 -123 156 l-62 29 2 41 c3 51 -5 65 -38 65 -15 0 -37 10 -50 22 -16 15 -42
24 -86 29 -53 6 -66 12 -91 41 -15 18 -35 49 -43 68 -31 71 -65 88 -104 49
-27 -27 -33 -20 -20 29 9 30 8 47 -3 73 -8 19 -17 53 -21 77 -5 28 -13 46 -25
50 -25 10 -68 74 -75 115 -5 23 -1 45 9 65 30 57 66 59 95 5 6 -13 30 -32 53
-44 l41 -21 71 50 c72 51 89 79 70 120 -4 10 -12 35 -18 56 -10 37 -15 41 -59
52 -56 14 -87 38 -87 67 0 12 -10 32 -22 45 -19 19 -23 34 -22 79 2 49 5 57
35 83 25 20 49 29 87 33 30 3 56 8 58 10 3 2 11 37 18 76 16 81 36 111 76 111
30 0 80 34 80 55 0 7 16 44 35 81 19 37 35 81 35 98 0 17 9 45 20 61 26 39 26
75 1 75 -10 0 -38 -7 -61 -15 -23 -8 -44 -15 -45 -15 -1 0 -8 13 -15 29 -8 21
-21 32 -43 37 -43 9 -67 32 -67 64 0 15 -6 33 -14 39 -23 19 -79 23 -106 6z"
            fill="var(--sky-blue)"
            fillOpacity="0.15"
            stroke="var(--sky-blue-deep)"
            strokeWidth="8"
            strokeOpacity="0.4"
          />
        </g>

        {/* Route lines connecting cities in order */}
        <polyline
          points={cities.map(c => `${c.x},${c.y}`).join(' ')}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          opacity="0.5"
        />

        {/* City pins */}
        {cities.map((city) => (
          <g key={city.name}>
            {city.primary && (
              <circle
                cx={city.x}
                cy={city.y}
                r="14"
                fill="none"
                stroke={city.name === 'Jaipur' ? 'var(--gold)' : 'var(--sky-blue-deep)'}
                strokeWidth="1"
                opacity="0.3"
              />
            )}
            <circle
              cx={city.x}
              cy={city.y}
              r={city.primary ? 6 : 4}
              fill={city.name === 'Jaipur' ? 'var(--gold)' : city.name === 'Delhi' ? 'var(--sky-blue-deep)' : 'var(--navy)'}
              opacity={city.primary ? 1 : 0.7}
            />
            <text
              x={city.x + (city.name === 'Delhi' ? 16 : 0)}
              y={city.y - 12}
              textAnchor="middle"
              className="india-map-label"
              fill="var(--navy)"
              fontSize={city.primary ? '14' : '12'}
              fontWeight={city.primary ? '600' : '400'}
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Timeline() {
  const stops = [
    {
      years: '1944 – 1967',
      city: 'Delhi',
      desc: 'Childhood in Dariba Kalan, Old Delhi. Education from school through BA Honours Economics at Ramjas College and MA Economics. Three years of NCC training. The foundation of everything.',
    },
    {
      years: '1967 – 1973',
      city: 'Jodhpur',
      desc: 'Marriage in 1967. Sardarpura, B Road, Shiv Nivas. Two sons born here. Began teaching mathematics while pregnant. First steps as a homemaker.',
    },
    {
      years: '1973 – 1975',
      city: 'Kota',
      desc: 'Shopping Center, Ghumanpura. Third son born here. Children at St. Paul\'s School. Completed B.Ed.',
    },
    {
      years: '1975 – 1976',
      city: 'Ajmer',
      desc: 'Raja Cycle area, near Martingal Bridge. A brief but memorable stay.',
    },
    {
      years: '1976 – 1981',
      city: 'Udaipur',
      desc: 'Residency Road, Bhatt Ji Ki Bari. Five formative years. Food Preservation certification. All three boys at St. Paul\'s.',
    },
    {
      years: '1981 – 2026',
      city: 'Jaipur',
      desc: 'Her final and longest home — 44 years. Cookery & Bakery, Tailoring, Music, Astrology certifications. Raised three sons to adulthood. Deepened her spiritual practice. Found peace.',
    },
  ];

  return (
    <section className="timeline" id="journey">
      <div className="section-inner">
        <h2 className="section-title fade-in">Journey Across India</h2>
        <p className="section-title-hindi fade-in">भारत भर में यात्रा</p>

        <IndiaMap />

        <div className="timeline-container">
          {stops.map((stop, i) => (
            <div className="timeline-item fade-in" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-years">{stop.years}</div>
              <h3 className="timeline-city">{stop.city}</h3>
              <p className="timeline-desc">{stop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quotes() {
  const quotes = [
    {
      hindi: '"हम तो पढ़ेंगे"',
      english: '"I will study"',
      context: 'On determination — when the family resisted her higher education',
    },
    {
      hindi: '"चोरी मत करो। झूठ मत बोलो। किसी की जीभ को मत दुखाओ। यही भगवान की सेवा है।"',
      english: '"Don\'t steal. Don\'t lie. Don\'t hurt anyone with your tongue. This itself is serving God."',
      context: 'The Three Commandments — from her mother Narayani',
    },
    {
      hindi: '"कोई भी चीज़ खाओ तो बाँट के खाओ"',
      english: '"Whatever you eat, eat by sharing"',
      context: 'On sharing — division, not hoarding',
    },
    {
      hindi: '"मेरे तीन बच्चे हैं, चौथे पति है, पांचवी में हूँ। इन्हीं का काम जो है वो मेरे लिए वर्क है। वही वर्क इज़ वरशिप है। यह सब भगवान के जीव हैं।"',
      english: '"I have three children, fourth is my husband, fifth is myself. Their work is my work. That work IS worship. These are all God\'s beings."',
      context: 'On family as devotion — Work is Worship',
    },
    {
      hindi: '"स्टैंड और स्टील की बॉडी बनाई बना के दी है। Do and Die — यह अभी भी चल रही है हमारे दिमाग में।"',
      english: '"They built and gave me a body of steel. \'Do and Die\' — this is still running in my mind."',
      context: 'The NCC motto — a spirit of determination from 1963',
    },
    {
      hindi: '"अच्छे विचार रखें बस"',
      english: '"Keep good thoughts, that\'s all"',
      context: 'Her simplest, deepest teaching',
    },
    {
      hindi: '"शत्रु पैदा मत करो, मित्र बनाओ सबको"',
      english: '"Don\'t create enemies, make everyone friends"',
      context: 'On relationships — no hatred, only friendship',
    },
    {
      hindi: '"बुराई अगर किसी की देख ली अपन ने, उसको वहीं त्याग दो और अपने मुँह मोड़ के अपना रास्ता पकड़ लो... उनको फेंक दो कचरे की टोकरी में"',
      english: '"If you see evil in someone, leave it right there. Turn your face and take your own path... Throw the bad things in the garbage basket."',
      context: 'On handling negativity — let go and move forward',
    },
  ];

  return (
    <section className="quotes" id="wisdom">
      <div className="section-inner">
        <h2 className="section-title fade-in">In Her Own Words</h2>
        <p className="section-title-hindi fade-in">उनकी अपनी ज़ुबानी</p>

        <div className="quotes-grid">
          {quotes.map((q, i) => (
            <div className="quote-card fade-in" key={i}>
              <p className="quote-hindi">{q.hindi}</p>
              <p className="quote-english">{q.english}</p>
              <p className="quote-context">{q.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Learner() {
  const certs = [
    { year: '1959', subject: 'First Aid', detail: 'St. John Ambulance, Delhi' },
    { year: '1964', subject: 'BA Honours', detail: 'Economics, Ramjas College' },
    { year: '1968', subject: 'MA Economics', detail: 'Agra University' },
    { year: '1971', subject: 'B.Ed.', detail: 'Mathematics Teacher' },
    { year: '1978', subject: 'Food Preservation', detail: 'Candy, jelly, jam, squashes' },
    { year: '1981', subject: 'Cookery & Bakery', detail: 'Khasa Kothi, Jaipur' },
    { year: '1987', subject: 'Cutting & Tailoring', detail: '6-month course' },
    { year: '1987', subject: 'Music', detail: 'Tabla & Harmonium, Prayag University' },
    { year: '2001', subject: 'Astrology', detail: 'From Chennai' },
  ];

  return (
    <section className="learner" id="learner">
      <div className="section-inner">
        <h2 className="section-title fade-in">The Lifelong Learner</h2>
        <p className="section-title-hindi fade-in">आजीवन विद्यार्थी</p>

        <div className="learner-grid">
          {certs.map((c, i) => (
            <div className="learner-card fade-in" key={i}>
              <div className="learner-year">{c.year}</div>
              <div className="learner-subject">{c.subject}</div>
              <div className="learner-detail">{c.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const ashrams = [
    {
      hindi: 'बाल आश्रम',
      name: 'Bal Ashram (0–25)',
      desc: 'Learning & education',
    },
    {
      hindi: 'गृहस्थ आश्रम',
      name: 'Grihastha Ashram (25–50)',
      desc: 'Family & responsibilities',
    },
    {
      hindi: 'वानप्रस्थ आश्रम',
      name: 'Vanprastha Ashram (50–75)',
      desc: 'Guidance & stepping back',
    },
    {
      hindi: 'सन्यास आश्रम',
      name: 'Sanyas Ashram (75+)',
      desc: 'Devotion & detachment',
    },
  ];

  return (
    <section className="values" id="values">
      <div className="section-inner">
        <h2 className="section-title fade-in">Her Values &amp; Philosophy</h2>
        <p className="section-title-hindi fade-in">उनके मूल्य और दर्शन</p>

        {/* The Three Commandments */}
        <div className="values-block fade-in">
          <h3 className="values-block-title">The Three Commandments</h3>
          <p className="values-block-title-hindi">माँ नारायणी की तीन शिक्षाएँ</p>
          <div className="values-quote-hindi">
            &ldquo;चोरी मत करो। झूठ मत बोलो। किसी की जीभ को मत दुखाओ। यही भगवान की सेवा है।&rdquo;
          </div>
          <p className="values-quote-english">
            &ldquo;Don&rsquo;t steal. Don&rsquo;t lie. Don&rsquo;t hurt anyone with your tongue. This itself is serving God.&rdquo;
          </p>
        </div>

        {/* Four Ashrams */}
        <div className="values-block fade-in">
          <h3 className="values-block-title">The Four Ashrams of Life</h3>
          <p className="values-block-title-hindi">जीवन के चार आश्रम</p>
          <div className="values-quote-hindi">
            &ldquo;बाल आश्रम मैंने गुज़ारा — बचपन की चीज़ें। गृहस्थ आश्रम में — गृहस्थ की सारी चीज़ें, बच्चों की शादीवादी, सारी ज़िम्मेवारियाँ। अब मैं सन्यास आश्रम में हूँ — धीरे-धीरे कटिंग करनी है हर चीज़ की और भगवान में लगना है।&rdquo;
          </div>
          <p className="values-quote-english">
            &ldquo;I passed through each ashram properly: childhood with learning, householder stage with all family duties, and now in sanyas — gradually detaching from worldly things and engaging in God.&rdquo;
          </p>
          <div className="ashram-grid">
            {ashrams.map((a, i) => (
              <div className="ashram-card" key={i}>
                <div className="ashram-name-hindi">{a.hindi}</div>
                <div className="ashram-name">{a.name}</div>
                <div className="ashram-desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Karma Philosophy */}
        <div className="values-block fade-in">
          <h3 className="values-block-title">Her Karma Philosophy</h3>
          <p className="values-block-title-hindi">कर्म दर्शन</p>
          <div className="values-quote-hindi">
            &ldquo;खुशी दोगे तो खुशी लोगे। सुख दोगे तो सुख लोगे। दुःख दोगे तो दुःख लोगे। मरने के बाद यह चीज़ें १० गुना ज्यादा होकर मिलती है। अच्छे कर्म करें, अच्छी योनि में जाए, अच्छे विचार रखें बस।&rdquo;
          </div>
          <p className="values-quote-english">
            &ldquo;If you give happiness, you&rsquo;ll receive happiness. If you give sorrow, you&rsquo;ll receive sorrow. After death, these things return tenfold. Do good deeds, keep good thoughts — that&rsquo;s all.&rdquo;
          </p>
        </div>

        {/* Work is Worship */}
        <div className="values-block fade-in">
          <h3 className="values-block-title">Work is Worship</h3>
          <p className="values-block-title-hindi">वर्क इज़ वरशिप</p>
          <div className="values-quote-hindi">
            &ldquo;मेरे तीन बच्चे हैं, चौथे पति है, पांचवी में हूँ। इन्हीं का काम जो है वो मेरे लिए वर्क है। वही वर्क इज़ वरशिप है। यह सब भगवान के जीव हैं।&rdquo;
          </div>
          <p className="values-quote-english">
            &ldquo;I have three children, fourth is my husband, fifth is myself. Their work is my work. That work IS worship. These are all God&rsquo;s beings.&rdquo;
          </p>
        </div>

        {/* Debt Philosophy */}
        <div className="values-block fade-in">
          <h3 className="values-block-title">Service &amp; Debt</h3>
          <p className="values-block-title-hindi">सेवा और ऋण</p>
          <div className="values-quote-hindi">
            &ldquo;मैं सबकी कर्ज़दार थी जो मैं चुकाती रही। पुण्य का काम हो रहा है — मैं पाप की भागी क्यों बनूँ मना करके?&rdquo;
          </div>
          <p className="values-quote-english">
            &ldquo;I was indebted to everyone, which I kept repaying. If virtuous work is happening — why should I become party to sin by refusing?&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const base = import.meta.env.BASE_URL;
  const photos = [
    {
      src: `${base}photos/IMG-20210801-WA0000 Copy.JPG`,
      alt: 'Dadi in her favorite sky blue saree',
    },
    {
      src: `${base}photos/IMG_1019_Original Copy Copy Copy.JPG`,
      alt: 'Dadi — outdoor portrait with shawl',
    },
    {
      src: `${base}photos/IMG_1269_Original Copy Copy Copy.JPG`,
      alt: 'Dadi — warm smile with glasses',
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="section-inner">
        <h2 className="section-title fade-in">Remembering Her</h2>
        <p className="section-title-hindi fade-in">उनकी यादें</p>

        <div className="gallery-grid fade-in">
          {photos.map((photo, i) => (
            <div className="gallery-item" key={i}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>

        <div className="gallery-links fade-in">
          <a
            href="https://youtu.be/Vr5SEu2DvKY"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-link"
          >
            &#9654;&ensp;Watch Lifestory Video
          </a>
          <a
            href="https://photos.app.goo.gl/njNxdR8tnVYrUKhU9"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-link"
          >
            &#128247;&ensp;Best Photos
          </a>
          <a
            href="https://photos.app.goo.gl/QHKtYrbuytDfGmoQA"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-link"
          >
            &#128156;&ensp;Dadi Memories
          </a>
          <Link to="/lifestory" className="gallery-link">
            &#128214;&ensp;Read Her Life Story
          </Link>
        </div>

        <p className="gallery-note fade-in">
          Prayer recording coming soon
        </p>
      </div>
    </section>
  );
}

function Spiritual() {
  return (
    <section className="spiritual" id="spiritual">
      <div className="section-inner">
        <h2 className="section-title fade-in">Her Spiritual Practice</h2>
        <p className="section-title-hindi fade-in">उनकी आध्यात्मिक साधना</p>

        <div className="spiritual-items">
          <div className="spiritual-item fade-in">
            <h3 className="spiritual-item-title">
              Daily Writing of &ldquo;जय श्री कृष्णा&rdquo; &mdash; 888 times
            </h3>
            <p className="spiritual-hindi">
              &ldquo;रोज़ दो पेज लिखती हूँ — जय श्री कृष्णा। चार माला। इस से मुझे बहुत अच्छी शांति मिली है।&rdquo;
            </p>
            <p className="spiritual-english">
              &ldquo;Every day I write two pages — Jai Shri Krishna. Four malas. From this I have received very good peace.&rdquo;
            </p>
          </div>

          <div className="spiritual-item fade-in">
            <h3 className="spiritual-item-title">Morning Temple Visits</h3>
            <p className="spiritual-hindi">
              सुबह 7 बजे तीन आरतियाँ — शिव जी, राम-कृष्ण-हनुमान, राधा गोविन्द, गणेश जी
            </p>
            <p className="spiritual-english">
              7:00 AM temple visits for three aartis — Shiv ji, Ram-Krishna-Hanuman, Radha Govind, Ganesh ji
            </p>
          </div>

          <div className="spiritual-item fade-in">
            <h3 className="spiritual-item-title">The Bhagavad Gita</h3>
            <p className="spiritual-hindi">
              &ldquo;गीता पढ़ती हूँ — कैसे अपन को जीवन जीना है, यह मिलता है।&rdquo;
            </p>
            <p className="spiritual-english">
              &ldquo;I read the Gita — it teaches me how to live life.&rdquo;
            </p>
          </div>

          <div className="spiritual-item fade-in">
            <h3 className="spiritual-item-title">
              The Gayatri Mantra &mdash; Since Age 9
            </h3>
            <p className="spiritual-hindi">
              9-10 वर्ष की उम्र में 2,500 गायत्री मंत्र लिखे। 1960 का प्रमाणपत्र आज भी सुरक्षित है।
            </p>
            <p className="spiritual-english">
              At age 9-10, she wrote 2,500 Gayatri mantras. The certificate from 1960 is still preserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing" id="closing">
      <div className="closing-inner">
        <div className="fade-in">
          <div className="closing-hindi">
            &ldquo;अब तुम लोगों की सबकी दुआएँ काम कर गई। जी रही है।&rdquo;
          </div>
          <p className="closing-english">
            &ldquo;Now all of you people&rsquo;s prayers worked. I&rsquo;m alive.&rdquo;
          </p>
        </div>

        <Divider />

        <p className="closing-legacy fade-in">
          She didn&rsquo;t just live 84 years. She lived with purpose, raised
          her family with values, never stopped learning, served everyone
          without expectation, and spent her final years in peaceful devotion.
          Her light continues through all of us.
        </p>

        <div className="fade-in">
          <p className="closing-om">ॐ शान्ति शान्ति शान्ति</p>
          <p className="closing-shanti">Om Shanti Shanti Shanti</p>
        </div>

        <p className="closing-years fade-in">
          <span>1944</span> &mdash; <span>2026</span>
        </p>
      </div>
    </section>
  );
}

function App() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <Nav />
      <Hero />
      <Bio />
      <Timeline />
      <Quotes />
      <Learner />
      <Values />
      <Gallery />
      <Spiritual />
      <Closing />
    </div>
  );
}

export default App;
