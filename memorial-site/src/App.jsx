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
  // City positions mapped to the real India SVG (viewBox 0 0 600 700)
  // These are approximate lat/lon mapped positions for northern India cities
  const cities = [
    { name: 'Delhi', x: 310, y: 225, primary: true },
    { name: 'Jodhpur', x: 248, y: 270 },
    { name: 'Kota', x: 290, y: 285 },
    { name: 'Ajmer', x: 275, y: 262 },
    { name: 'Udaipur', x: 262, y: 295 },
    { name: 'Jaipur', x: 293, y: 252, primary: true },
  ];

  // Real India outline path - simplified but geographically accurate
  const indiaPath = `M 290 42 L 295 48 L 300 42 L 308 44 L 312 50 L 320 52 L 328 48 L 335 52
    L 340 58 L 348 55 L 355 60 L 350 68 L 358 72 L 365 68 L 372 75 L 378 70
    L 385 74 L 392 80 L 398 76 L 405 82 L 400 90 L 408 95 L 415 92 L 420 100
    L 428 105 L 435 110 L 440 118 L 448 122 L 455 128 L 460 135 L 465 142
    L 470 150 L 472 158 L 468 165 L 462 170 L 458 178 L 460 185 L 465 190
    L 470 195 L 475 202 L 472 210 L 468 215 L 470 222 L 475 228 L 480 235
    L 485 240 L 488 248 L 492 255 L 490 262 L 485 268 L 480 272 L 476 280
    L 478 288 L 482 295 L 478 302 L 472 308 L 468 315 L 462 320 L 456 318
    L 450 322 L 445 328 L 440 335 L 435 340 L 428 338 L 422 342 L 418 350
    L 412 355 L 406 360 L 400 365 L 395 372 L 388 378 L 382 385 L 378 392
    L 372 398 L 365 405 L 358 412 L 352 418 L 345 425 L 340 432 L 335 440
    L 328 448 L 322 455 L 318 462 L 312 470 L 308 478 L 305 485 L 300 492
    L 295 500 L 290 508 L 285 515 L 280 520 L 275 528 L 270 535 L 268 542
    L 272 548 L 278 552 L 282 558 L 280 565 L 275 570 L 268 575 L 262 580
    L 258 575 L 252 570 L 248 562 L 242 558 L 238 550 L 232 545 L 228 540
    L 225 535 L 220 528 L 218 520 L 222 515 L 228 510 L 232 505 L 228 498
    L 222 492 L 218 485 L 212 480 L 208 472 L 202 468 L 196 462 L 190 458
    L 185 452 L 180 448 L 175 442 L 168 438 L 162 432 L 158 425 L 165 420
    L 172 415 L 178 408 L 182 402 L 176 395 L 170 390 L 165 385 L 160 378
    L 155 370 L 150 362 L 148 355 L 145 348 L 142 340 L 140 332 L 138 325
    L 135 318 L 130 312 L 128 305 L 132 298 L 138 292 L 142 285 L 138 278
    L 132 272 L 128 265 L 125 258 L 122 250 L 120 242 L 118 235 L 120 228
    L 125 222 L 130 215 L 135 208 L 138 200 L 145 195 L 152 190 L 158 185
    L 162 178 L 168 172 L 175 168 L 180 162 L 188 158 L 195 152 L 200 145
    L 205 138 L 210 132 L 218 128 L 225 125 L 232 120 L 238 115 L 242 108
    L 248 102 L 255 98 L 260 92 L 265 85 L 270 78 L 275 72 L 278 65 L 282 58
    L 286 52 L 290 42 Z`;

  return (
    <div className="india-map-container fade-in">
      <svg viewBox="80 20 460 600" className="india-map" xmlns="http://www.w3.org/2000/svg">
        {/* India outline */}
        <path
          className="india-outline"
          d={indiaPath}
          fill="none"
          stroke="var(--sky-blue-deep)"
          strokeWidth="2"
          opacity="0.4"
          strokeLinejoin="round"
        />
        {/* India filled shape - very light */}
        <path
          d={indiaPath}
          fill="var(--sky-blue)"
          opacity="0.1"
          strokeLinejoin="round"
        />

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
            {/* Pulse ring for primary cities */}
            {city.primary && (
              <circle
                cx={city.x}
                cy={city.y}
                r="12"
                fill="none"
                stroke={city.name === 'Jaipur' ? 'var(--gold)' : 'var(--sky-blue-deep)'}
                strokeWidth="0.8"
                opacity="0.3"
              />
            )}
            {/* Pin dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r={city.primary ? 6 : 4.5}
              fill={city.name === 'Jaipur' ? 'var(--gold)' : city.name === 'Delhi' ? 'var(--sky-blue-deep)' : 'var(--navy)'}
              opacity={city.primary ? 1 : 0.7}
            />
            {/* City label */}
            <text
              x={city.x + (city.name === 'Delhi' ? 14 : city.name === 'Udaipur' ? -2 : 0)}
              y={city.y - 12}
              textAnchor="middle"
              className="india-map-label"
              fill="var(--navy)"
              fontSize={city.primary ? '13' : '11'}
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
