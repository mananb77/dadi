import { useEffect, useState, useRef, useCallback, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import './LifeStory.css';
import hiContent from './lifeStoryHindi';
import translitMap from './lifeStoryTranslit';

const LangContext = createContext('en');

function PullQuote({ hindi, english, lang: langProp }) {
  const langCtx = useContext(LangContext);
  const lang = langProp || langCtx;
  const displayHindi = lang === 'en-tr' ? (translitMap[hindi] || hindi) : hindi;
  return (
    <div className="ls-pullquote">
      <p className={`ls-pullquote-hindi${lang === 'en-tr' ? ' ls-pullquote-translit' : ''}`}>{displayHindi}</p>
      {lang !== 'hi' && english && <p className="ls-pullquote-english">{english}</p>}
    </div>
  );
}

function ChapterDivider() {
  return (
    <div className="ls-divider">
      <span className="ls-divider-dot" />
    </div>
  );
}

function H({ children }) {
  const lang = useContext(LangContext);
  if (lang === 'en-tr') {
    const text = typeof children === 'string' ? children : '';
    const translit = translitMap[text];
    if (translit) {
      return <span className="ls-hindi ls-hindi-translit">{translit}</span>;
    }
  }
  return <span className="ls-hindi">{children}</span>;
}

function Para({ children, hi, lang }) {
  if (lang === 'hi' && hi) {
    return <p className="ls-para ls-para-hindi">{hi}</p>;
  }
  return <p className="ls-para">{children}</p>;
}

function LifeStory() {
  const [progress, setProgress] = useState(0);
  const [showLinks, setShowLinks] = useState(false);
  const [lang, setLang] = useState('en');
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const toggleLang = useCallback(() => {
    // Find the paragraph nearest to viewport center
    const paras = contentRef.current?.querySelectorAll('.ls-para, .ls-chapter-number');
    if (!paras?.length) { setLang(l => l === 'en' ? 'en-tr' : l === 'en-tr' ? 'hi' : 'en'); return; }
    const viewCenter = window.scrollY + window.innerHeight / 2;
    let closest = paras[0];
    let closestDist = Infinity;
    paras.forEach(p => {
      const dist = Math.abs(p.getBoundingClientRect().top + window.scrollY - viewCenter);
      if (dist < closestDist) { closestDist = dist; closest = p; }
    });
    const offsetBefore = closest.getBoundingClientRect().top;
    setLang(l => l === 'en' ? 'en-tr' : l === 'en-tr' ? 'hi' : 'en');
    requestAnimationFrame(() => {
      const offsetAfter = closest.getBoundingClientRect().top;
      window.scrollBy(0, offsetAfter - offsetBefore);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setShowLinks(scrollTop > heroBottom - 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LangContext.Provider value={lang}>
    <div>
      <div className="ls-progress" style={{ width: `${progress}%` }} />

      <nav className="ls-nav">
        <div className="ls-nav-inner">
          <Link to="/" className="ls-nav-back">&larr; Memorial</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button className={`ls-lang-toggle${lang === 'hi' ? ' ls-lang-toggle-en' : ''}`} onClick={toggleLang}>
              {lang === 'en' ? 'Aa → अ' : lang === 'en-tr' ? 'हिंदी' : 'English'}
            </button>
            <span className={`ls-nav-title${lang === 'en-tr' ? ' ls-hindi-translit' : ''}`}>{lang === 'en-tr' ? 'Jeevan Kahani' : 'जीवन कहानी'}</span>
          </div>
        </div>
        <div className={`ls-nav-links ${showLinks ? 'ls-nav-links-visible' : ''}`}>
          <a href="https://youtu.be/Vr5SEu2DvKY" target="_blank" rel="noopener noreferrer">
            &#9654; Lifestory Video
          </a>
          <a href="https://youtu.be/_Wd5UGzt5WE" target="_blank" rel="noopener noreferrer">
            &#9654; Diwali 2022 Pooja
          </a>
          <a href="https://photos.app.goo.gl/njNxdR8tnVYrUKhU9" target="_blank" rel="noopener noreferrer">
            Best Photos
          </a>
          <a href="https://photos.app.goo.gl/QHKtYrbuytDfGmoQA" target="_blank" rel="noopener noreferrer">
            Dadi Photo Album Memories
          </a>
          <Link to="/">Memorial Home</Link>
        </div>
      </nav>

      <header className="ls-hero" ref={heroRef}>
        <p className="ls-hero-label">{lang === 'hi' ? hiContent.hero.label : 'Her Life Story'}</p>
        <h1>{lang === 'hi' ? hiContent.hero.title : 'A Journey of Strength, Service, and Spirit'}</h1>
        {lang !== 'hi' && <p className={`ls-hero-hindi${lang === 'en-tr' ? ' ls-hindi-translit' : ''}`}>{lang === 'en-tr' ? translitMap['शक्ति, सेवा और आत्मा की यात्रा'] : 'शक्ति, सेवा और आत्मा की यात्रा'}</p>}
        <p className="ls-hero-meta">{lang === 'hi' ? hiContent.hero.meta : 'A narrative account compiled from video interview, January 2023'}</p>
      </header>

      <div className="ls-content" ref={contentRef}>

        {/* Chapter 1 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch1.number : 'Chapter One'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch1.title : 'The Beginning: A Child of the Railways'}</h2>

          <Para lang={lang} hi={hiContent.ch1.paras[0]}>
            In the Delhi of the early 1940s, in a time when India still lived under British rule, a daughter was born to Shri Ram Bhargava and his wife Narayani. She was the seventh child in a family that would eventually number eleven children. Four brothers and three sisters surrounded her in the bustling household. Her father, born in 1901, served as a Senior Mail Rail Guard, a position of some importance in the Indian Railways. He was the kind of man who hoisted the flag at the railway station, a duty that spoke to his standing in the community.
          </Para>

          <Para lang={lang} hi={hiContent.ch1.paras[1]}>
            The family lived in a large railway bungalow behind the station, provided by the government as part of her father&rsquo;s employment. <H>&ldquo;बड़ा बंगला था जिसमें तीन चार कमरे थे,&rdquo;</H> she remembers. It was a big bungalow with three or four rooms. But this was the India of the 1940s and early 1950s, and even a railway officer&rsquo;s home lacked many basic amenities. The bathroom and toilet stood outside the main house, and in those early years, there was no electricity at all.
          </Para>

          <Para lang={lang} hi={hiContent.ch1.paras[2]}>
            Instead, every evening brought the ritual of lighting lamps and lanterns. She can still describe the meticulous process: <H>&ldquo;हमारे घर के लोग लैंप की जो चिमनिया होती थी या लैंप की चिमनिया होती थी उन्हें राख से साफ करते थे कपड़े से पोंछते थे और फिर उनको तैयार करते थे शाम के लिए।&rdquo;</H> The family would clean the lamp chimneys with ash, wipe them with cloth, and prepare them for the evening. These lamps would burn through the night, their flickering light the only illumination in the darkness.
          </Para>

          <Para lang={lang} hi={hiContent.ch1.paras[3]}>
            The servant quarters on the compound housed a teacher and a washerwoman who helped with the daily work. Beyond the house stretched extensive fencing and a large yard where her brothers tended a garden. <H>&ldquo;लॉन था बड़े-बड़े कमरे थे,&rdquo;</H> she recalls. There was a lawn, and hedges all around. It was a life of relative comfort, but one that required constant effort to maintain.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 2 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch2.number : 'Chapter Two'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch2.title : 'The Water Challenge: Lessons in Resourcefulness'}</h2>

          <Para lang={lang} hi={hiContent.ch2.paras[0]}>
            Perhaps nothing captures the reality of those early years better than the daily struggle for water. With no running water in the house, the family hired a man whose sole job was carrying water. <H>&ldquo;वो अपने कंधों पर एक लकड़ी की बैंगी जिसे बोलते थे वो बनी रहती थी,&rdquo;</H> she explains. He carried a wooden pole across his shoulders, with thick iron wires hanging down. From these wires hung hooks, and on the hooks, canisters, cut ghee or oil containers, each holding sixteen liters of water.
          </Para>

          <Para lang={lang} hi={hiContent.ch2.paras[1]}>
            The man would make his journey four times a day, bringing two canisters per trip. <H>&ldquo;तो दो एक बार में दो दो कैनस्टर पानी लाया करता था 32 लीटर्स,&rdquo;</H> she notes. Thirty-two liters at a time. Their family ordered four trips daily, bringing approximately 128 liters of water to sustain the household.
          </Para>

          <Para lang={lang} hi={hiContent.ch2.paras[2]}>
            But even this wasn&rsquo;t always enough. The family maintained high standards of cleanliness, and with brothers tending an extensive garden and plants everywhere, water needs constantly exceeded supply. When this happened, the children took matters into their own hands. <H>&ldquo;हम खुद नल पर गए और 100 मीटर दूर पर नल था वहां से भर भर के बाल्टियां हम बच्चे से ले आते थे,&rdquo;</H> she remembers. They would walk 100 meters to the public tap, fill buckets, and carry them back themselves. Even as children, they learned that when something needs doing, you do it yourself.
          </Para>

          <Para lang={lang} hi={hiContent.ch2.paras[3]}>
            For bathing, the family improvised a system in the veranda. <H>&ldquo;बरांडे में और वहीं पर पर्दा डाल के हम लोग एक अलग ही नहा लेते थे,&rdquo;</H> she says. They hung a curtain behind an iron grill, creating a private space with a drain so water would flow out properly. It was simple, functional, and required no complaint, just acceptance of reality and creative problem-solving.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 3 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch3.number : 'Chapter Three'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch3.title : 'The Walk to School: Building a Steel Body'}</h2>

          <Para lang={lang} hi={hiContent.ch3.paras[0]}>
            Education meant walking. Every day, she and her siblings would walk about one and a half kilometers to the railway school, carrying their cloth bags: <H>&ldquo;थैलियों के बस्ते होते थे जैसे थैला होता है वैसा बस्ता होता था&rdquo;</H> Simple sacks made of cloth that they filled with their school materials and slung over their shoulders.
          </Para>

          <Para lang={lang} hi={hiContent.ch3.paras[1]}>
            The railway school offered certain privileges. <H>&ldquo;दूध भी मिलता था वहां पे क्योंकि रेलवे का था,&rdquo;</H> she notes. They received milk at school because it was a railway institution. The fees, though nominal, were deducted directly from her father&rsquo;s salary over two-month periods, along with all other household expenses. Only after everything was deducted would her father receive his remaining pay.
          </Para>

          <Para lang={lang} hi={hiContent.ch3.paras[2]}>
            At school, they addressed their teachers with deep respect. <H>&ldquo;पहले मास्टर बोलते थे भैया जी बोलते थे तो हम मास्टर साहब से पढ़ते थे,&rdquo;</H> she remembers. The masters taught them well, giving proper lectures, but some of the most valuable lessons came from unexpected sources.
          </Para>

          <Para lang={lang} hi={hiContent.ch3.paras[3]}>
            One day stands out in her memory even now, more than seventy years later. The school invited a sadhu, a holy man, to teach the children about health. <H>&ldquo;वो एक बार मुझे अभी भी याद है और मैं अभी भी करती हूं,&rdquo;</H> she says with emphasis. She still remembers it and still does it. The sadhu taught them to fill their mouths with water and splash it repeatedly over their eyes and face.
          </Para>

          <PullQuote
            hindi="&ldquo;उससे मेरी आंखें बिल्कुल ठीक है। 81 साल की उम्र है तो उस समय भी ठीक है मेरी। मतलब नसें वगैरह मेरी काफी ठीक है जैसा कि सर्जन ने बताया।&rdquo;"
            english="&ldquo;From this, my eyes are completely fine. At the time, the surgeon said my nerves are remarkably healthy.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch3.paras[4]}>
            Another practice shaped her physical health for life: eating sugarcane. <H>&ldquo;गन्ने को छीला और छीलने के बाद मुंह से गंडेरिया चूसा करते थे तो मेरे दांत बहुत मजबूत है,&rdquo;</H> she explains. They would peel sugarcane and chew it thoroughly to extract the juice, and her teeth became remarkably strong as a result. Even now, dentists comment with surprise on the strength of her teeth at eighty years old. This wasn&rsquo;t just an occasional treat. After marriage, she would buy sugarcane by the <em>man</em> (approximately forty kilograms), sit on the roof terrace, and spend time breaking it at the joints, peeling it, and chewing the sweet inner fiber. <H>&ldquo;यह गन्ने खाने का काम तो शादी के बाद भी चलता रहा,&rdquo;</H> she confirms. The practice continued well into her married life.
          </Para>

          <Para lang={lang} hi={hiContent.ch3.paras[5]}>
            Between the daily walks, the physical activities, and the wholesome nutrition, she built what she calls a &ldquo;steel body.&rdquo; <H>&ldquo;मतलब सॉलिड बॉडी बना ली थी,&rdquo;</H> she says with satisfaction. Later, when she arrived at her in-laws&rsquo; house after marriage, she would tell them:
          </Para>

          <PullQuote
            hindi="&ldquo;स्टैंड और स्टील की बॉडी बनाई बना के दी है। कितना भी काम कर लो अपन को कोई बीमारी नहीं कुछ नहीं।&rdquo;"
            english="&ldquo;They&rsquo;ve built and given me a body of steel. Any amount of work, and no illness befalls me.&rdquo;"
            lang={lang}
          />
        </section>

        <ChapterDivider />

        {/* Chapter 4 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch4.number : 'Chapter Four'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch4.title : 'The Family Crisis: Fighting for Education'}</h2>

          <Para lang={lang} hi={hiContent.ch4.paras[0]}>
            The year 1955 brought significant change. Her father retired from railway service after decades of dedication. But retirement in those days didn&rsquo;t bring the security it might today. <H>&ldquo;उनको पेंशन नहीं थी। पीएफ मिला था,&rdquo;</H> she explains. There was no pension, only the Provident Fund, a lump sum payment. And he faced enormous responsibilities: five weddings to arrange, including hers, for his children.
          </Para>

          <Para lang={lang} hi={hiContent.ch4.paras[1]}>
            This financial pressure created an immediate conflict with her educational aspirations. Moving back to their family home in Delhi: <H>&ldquo;152 कटरा मशरूम, दरीबा कलान, दिल्ली,&rdquo;</H> a massive house with twenty-two to twenty-four rooms arranged around a central courtyard. Should have meant opportunity. Her grandfather had purchased this ancestral home some eighty-six years before her birth. But in 1956, at age sixteen, she found herself fighting for something many families didn&rsquo;t consider essential: continued education for a daughter.
          </Para>

          <PullQuote
            hindi="&ldquo;हम तो पढ़ेंगे।&rdquo;"
            english="&ldquo;I will study.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch4.paras[2]}>
            The resistance wasn&rsquo;t merely about money. Girls&rsquo; education wasn&rsquo;t always encouraged in those times. Society had different expectations. But she refused to accept this limitation. <H>&ldquo;हमने पढ़ाई का आगे रखा कि हम तो पढ़ेंगे उसके लिए हमें थोड़ा सा स्ट्रगल करना पड़ा,&rdquo;</H> she acknowledges. She had to struggle for this, especially for college education. Her father wasn&rsquo;t ready, the family hesitated, but she stood firm.
          </Para>

          <Para lang={lang} hi={hiContent.ch4.paras[3]}>
            Eventually, her father, this man born in 1901, gave his permission. This was progressive thinking for that era, and she has never forgotten that he ultimately supported her dreams. To manage finances, the family arranged two weddings in 1957 and 1959. Her own marriage would wait until 1967, when she was twenty-seven. Extraordinarily late for those times, but it allowed her to complete her education.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 5 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch5.number : 'Chapter Five'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch5.title : 'Delhi Days: The Daily Journey to Knowledge'}</h2>

          <Para lang={lang} hi={hiContent.ch5.paras[0]}>
            Getting into high school required help. Her eldest brother&rsquo;s wife, a Delhi native familiar with the school system, became her advocate. They first tried the Government school near Jama Masjid. <H>&ldquo;जमा मस्जिद के गवर्नमेंट स्कूल था। वहां हो गई थी। हमें जगह नहीं मिली,&rdquo;</H> she recalls. No space available. Government schools were more common then, private schools fewer, but this meant admission could be competitive.
          </Para>

          <Para lang={lang} hi={hiContent.ch5.paras[1]}>
            Her sister-in-law tried again, this time at a Government Girls&rsquo; School in the Rajghat area, not far from where Gandhi Ji&rsquo;s memorial stands. The principal agreed, and she was enrolled at Government Girls Higher Secondary School, Dariyaganj.
          </Para>

          <Para lang={lang} hi={hiContent.ch5.paras[2]}>
            The school lay approximately four to five kilometers from her home in Dariba Kalan. For one brief month, she experienced the luxury of bus transportation. A bus service was arranged specifically for the girls. Students and daughters of jewelers, filling the vehicle completely. The cost was remarkably modest: <H>&ldquo;&#x20B9;1 लेती थी उस समय बस किराया जाने का और आने का&rdquo;</H> One rupee for the entire month, for both going and coming.
          </Para>

          <Para lang={lang} hi={hiContent.ch5.paras[3]}>
            But after just one month, <H>&ldquo;बस और हम लोग पैदल जाया करते थे,&rdquo;</H> she says. The bus stopped and they walked. Every single day, for years, she walked the route: from Dariba Kalan to Parade Ground, then to Dariyaganj, past Ghanta Masjid, to her school near Rajghat. <H>&ldquo;हमें आधा घंटा लगता था,&rdquo;</H> she recalls. Thirty minutes each way. This wasn&rsquo;t seen as a hardship. It was simply what one did. The walk built strength, discipline, and determination.
          </Para>

          <Para lang={lang} hi={hiContent.ch5.paras[4]}>
            During these years, from ninth through eleventh standard, her mind stayed focused on studies. <H>&ldquo;बस पढ़ाई में ही दिमाग रहता था,&rdquo;</H> she emphasizes. But she wasn&rsquo;t merely bookish. Her spiritual side flourished too. During ninth and eleventh standards, she wrote the Gayatri Mantra thousands of times. First 2,500, then 5,000 repetitions.
          </Para>

          <PullQuote
            hindi="&ldquo;ढाई हजार का मेरे पास अभी भी कागज है कि मैंने सन 60 में मथुरा तपोभूमि और ढाई हजार मंत्र भेजे।&rdquo;"
            english="&ldquo;I still have the paper from 1960 showing I sent 2,500 mantras to Mathura Tapobhoomi as a spiritual offering.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch5.paras[5]}>
            <H>&ldquo;मैं आदर्शवादी थी। मेरी दादी को मैं पढ़ के सुनाती थी कृष्ण लीला और रामायण,&rdquo;</H> she remembers. She was idealistic, spiritually inclined. Her grandmother couldn&rsquo;t read, so she would read aloud the Krishna Leela and Ramayana to her. An act of service and devotion combined.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 6 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch6.number : 'Chapter Six'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch6.title : 'College: Breaking Barriers'}</h2>

          <Para lang={lang} hi={hiContent.ch6.paras[0]}>
            When the time came for college, she faced an ironic situation. Her academic record in eleventh standard showed distinction marks in Lower Mathematics and Domestic Science, good marks in English and Hindi, but only sixty percent in Economics. Her weakest subject. <H>&ldquo;Economics मेरे कम नंबर थे,&rdquo;</H> she admits frankly.
          </Para>

          <Para lang={lang} hi={hiContent.ch6.paras[1]}>
            Yet Economics was exactly where she ended up, thanks to her third brother. He had studied at Ramjas College in Maurice Nagar, Delhi, completing BA Honours in Economics, and knew the Head of Department, N. Agarwal. <H>&ldquo;उन्होंने मेरे को वहां एडमिशन दिलाया और Economics में ढलाया जिसमें की मेरे सबसे कम नंबर आए थे,&rdquo;</H> she says with a laugh. They got her admission and &ldquo;pushed&rdquo; her into Economics despite it being her weakest subject.
          </Para>

          <Para lang={lang} hi={hiContent.ch6.paras[2]}>
            The irony didn&rsquo;t defeat her. She studied at Ramjas College for three years, from 1961 to 1964, completing her BA Honours. The teaching was entirely in English, exams in English, and she took membership at the nearby Delhi School of Economics library. There she read the English economic writers, Bentham, Malthus, and others, making notes in English, absorbing theories of development that would shape her worldview for life.
          </Para>

          <Para lang={lang} hi={hiContent.ch6.paras[3]}>
            <H>&ldquo;हमने यू एस ए का डेवलपमेंट रशिया का जापान का इंग्लैंड का सारे डेवलपमेंट पढ़े थे,&rdquo;</H> she reflects. She studied the development of the USA, Russia, Japan, and England. Meanwhile, India was a developing country: <H>&ldquo;रिच इन रिसोर्सेज एंड इनहैबिटेड बाय पुअर्स&rdquo;</H> Rich in resources but inhabited by poor people. The question that formed in her mind would guide her entire life: <H>&ldquo;कैसे अपने को आगे बढ़ाएं बच्चों को कैसे बढ़ाएं&rdquo;</H> How to advance ourselves, how to advance our children.
          </Para>

          <Para lang={lang} hi={hiContent.ch6.paras[4]}>
            Her commute to Ramjas involved walking from Dariba Kalan to Splendid Road, then to Cycle Market, reaching Lal Qila where special buses ran during college hours carrying students to Maurice Nagar. <H>&ldquo;पूरे भर के बस जाती थी,&rdquo;</H> she remembers. The bus would be completely full, stopping at Kamala Nehru College and Indraprastha College before reaching Ramjas.
          </Para>

          <Para lang={lang} hi={hiContent.ch6.paras[5]}>
            In her class of about twenty-two students, only four were girls. <H>&ldquo;हम चार चार लड़कियां थे कॉलेज में क्लास के अंदर और बाकी लड़के थे,&rdquo;</H> she notes. <H>&ldquo;मैं सब ग्रुप लीडर रहती थी,&rdquo;</H> she states proudly. She was always the group leader. The girls didn&rsquo;t fear anything when she was around, though she herself remained appropriately cautious around boys.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 7 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch7.number : 'Chapter Seven'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch7.title : <>NCC: Learning &ldquo;Do or Die&rdquo;</>}</h2>

          <Para lang={lang} hi={hiContent.ch7.paras[0]}>
            College brought an experience that would mark her permanently: the National Cadet Corps. For three years, first year, second year, and third year, she participated in NCC training. The standard training involved wearing a uniform, NCC pants and shirt with a cap, and drilling for an hour daily. <H>&ldquo;एक घंटा NCC करते थे मार्च पास करते थे,&rdquo;</H> she recalls. They learned to march in formation, received 10 grams of butter and a roll each session, and practiced coordinated movements with various implements including a musical stick. A wooden rod with chains and bells that would chime as they maneuvered it. <H>&ldquo;मैं ग्रुप लीडर हुआ करती थी उसमें सबको सिखाती थी,&rdquo;</H> she notes. She was group leader for this too, teaching everyone the movements.
          </Para>

          <Para lang={lang} hi={hiContent.ch7.paras[1]}>
            But everything changed after 1962. <H>&ldquo;जब China की लड़ाई हुई 62 में तो 63 में हमको उन्होंने rifle training दी,&rdquo;</H> she explains. The India-China war brought a new intensity to their training. In her third year, they learned actual rifle handling. <H>&ldquo;कंधे पर rifle को रख के इधर सीधे कंधे पे और निशाना लगाना कि कहां जाएगा,&rdquo;</H> she describes. How to hold the rifle on the shoulder, how to take aim, where the bullet would go. She actually fired real rifles.
          </Para>

          <Para lang={lang} hi={hiContent.ch7.paras[2]}>
            The practical application never came. <H>&ldquo;पर उसका कोई उपयोग नहीं हुआ। बस हम सीख के रह गए,&rdquo;</H> she admits. They learned but never used it in actual service. Yet something more important stayed with her:
          </Para>

          <PullQuote
            hindi="&ldquo;जो एक मेन बात हम वहां सीखे 'डू एंड डाई' वो अभी भी चल रही है हमारे दिमाग में।&rdquo;"
            english="&ldquo;The main lesson we learned there &mdash; 'Do or Die' &mdash; is still running in my mind today.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch7.paras[3]}>
            That spirit of determination, of never giving up, of being willing to sacrifice everything for what matters. This became part of her character. She also played sports. <H>&ldquo;थ्रोबॉल खेलते थे,&rdquo;</H> she says. Essentially baseball. Between the physical training, the rifle practice, the marching drills, the sports, and the daily walking, she built extraordinary physical strength.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 8 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch8.number : 'Chapter Eight'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch8.title : 'The Journey Continues: Marriage and Teaching'}</h2>

          <Para lang={lang} hi={hiContent.ch8.paras[0]}>
            By 1967, she had completed her MA First Year from Meerut University. When Meerut and Agra Universities separated, she completed her MA Final Year through Agra University privately, traveling to Delhi to give exams. Her degree came from Agra University in 1968. That same year, newly married at the late age of twenty-seven, she took her first teaching position.
          </Para>

          <Para lang={lang} hi={hiContent.ch8.paras[1]}>
            From July to December 1968, while pregnant with her first son, she taught mathematics to eighth standard students. <H>&ldquo;अर्थमेटिक ज्योमेट्री और अलजेब्रा तीनों सब्जेक्ट पढ़ाती थी,&rdquo;</H> she lists. Arithmetic, geometry, and algebra, all three subjects. Her teaching method was remarkable: <H>&ldquo;बिना देखे कुछ किताब खोली और पढ़ा दिया। कभी मैं पढ़ के नहीं पढ़ती थी,&rdquo;</H> she emphasizes. She never opened the book to teach, never read and then taught. Just taught directly from her understanding. <H>&ldquo;मेरा मैथ बहुत अच्छा था,&rdquo;</H> she states simply. She still possesses the certificate stating she taught excellently.
          </Para>

          <Para lang={lang} hi={hiContent.ch8.paras[2]}>
            But the salary was modest. Fifteen rupees per month. Others with B.Ed. degrees earned more, so she decided to get the qualification herself. The B.Ed. course in 1970-71 presented challenges. She had to manage four different locations: a Parai school, a college, a hostel where she sometimes stayed overnight, and her home where her small son waited.
          </Para>

          <Para lang={lang} hi={hiContent.ch8.paras[3]}>
            <H>&ldquo;एक दिन जिद कर ली इन्होंने कि मम्मी को लेके ही जाऊंगा मैं,&rdquo;</H> she remembers with a laugh. One day her son insisted at the hostel: I will take Mummy with me, I won&rsquo;t leave without her. The warden finally said, <H>&ldquo;तुम घर जाओ बच्चा तुम्हारा साथ जाएगा&rdquo;</H> You go home, the child will go with you. After B.Ed., her salary jumped to fifty rupees. The practical value of education was clear to her, not just the theoretical knowledge but its concrete impact on life.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 9 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch9.number : 'Chapter Nine'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch9.title : 'Following the Bank: A Nomadic Decade'}</h2>

          <Para lang={lang} hi={hiContent.ch9.paras[0]}>
            Her husband&rsquo;s career with Union Bank of India shaped their next decade. He progressed steadily, clerk to supervisor to special assistant to officer to manager, and with each promotion came transfers.
          </Para>

          <Para lang={lang} hi={hiContent.ch9.paras[1]}>
            <strong>Jodhpur</strong> came first, from 1967 to 1973. They lived in Shivniwas on Sardarpur B Road, a bank bungalow. Their first son was born there in February 1969, their second in 1973. Those six years in Jodhpur meant <H>&ldquo;बस तीनों बच्चों की बच्चों को&rdquo;</H> Just serving the children, raising them, managing the household. Her focus was complete: their development, their needs, their future.
          </Para>

          <Para lang={lang} hi={hiContent.ch9.paras[2]}>
            <strong>Kota</strong> followed from 1973 to 1975. <H>&ldquo;Shopping Center में रहते थे मुफ्तलाल की दुकान है नीचे और ऊपर हमारा मकान था,&rdquo;</H> she describes. They lived above Muftlal&rsquo;s shop in the shopping center. Their third son was born there in 1974. The house was walking distance from St. Paul&rsquo;s School where the boys studied.
          </Para>

          <Para lang={lang} hi={hiContent.ch9.paras[3]}>
            Then <strong>Ajmer</strong> for less than a year in 1975-76. They lived near Raja Cycle and Martin Bridge in a bungalow with a courtyard, a Sanjina tree, and large airy rooms. <H>&ldquo;बड़ा घर था हमारा,&rdquo;</H> she notes. It was a big house. But the stay was brief, another transfer already pending.
          </Para>

          <Para lang={lang} hi={hiContent.ch9.paras[4]}>
            <strong>Udaipur</strong> claimed them from 1976 to 1981, a full five years. They lived first on Residency Road, then moved to Bhatt Ji Ki Badi. The lakes, Pichola, Swaroop Sagar, Fateh Sagar, lay just a few kilometers away. All three sons attended St. Paul&rsquo;s School in Bhopalpur.
          </Para>

          <Para lang={lang} hi={hiContent.ch9.paras[5]}>
            Through all these moves, her purpose remained constant:
          </Para>

          <PullQuote
            hindi="&ldquo;मेरे तो कैसे अपने को आगे बढ़ाएं बच्चों को कैसे बढ़ाएं यही था।&rdquo;"
            english="&ldquo;How to advance ourselves, how to advance the children &mdash; this was always on my mind.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch9.paras[6]}>
            The Economics education had shaped her thinking. She had studied how developed countries grew. <H>&ldquo;यह दिमाग में था बस,&rdquo;</H> she emphasizes. This stayed in her mind.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 10 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch10.number : 'Chapter Ten'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch10.title : 'The Jaipur Years Begin: Finding Home'}</h2>

          <Para lang={lang} hi={hiContent.ch10.paras[0]}>
            1981 brought them to Jaipur, and Jaipur would become home. They came when her eldest son was in seventh standard, the middle one in third, and the youngest in first. Initially they lived behind Khasa Kothi, near the railway station and Gangaur Hotel. But the landlord wanted them out.
          </Para>

          <Para lang={lang} hi={hiContent.ch10.paras[1]}>
            <H>&ldquo;मैंने कहा मैं ऐसे मकान में नहीं रहूंगी। दूसरा लेलो,&rdquo;</H> she insisted. I won&rsquo;t live in such a house. Take another one. They paid to vacate the current residents from their chosen house and moved in.
          </Para>

          <Para lang={lang} hi={hiContent.ch10.paras[2]}>
            That was 1981. <H>&ldquo;अब तक अभी 42 इयर्स 42 सालों में यहां,&rdquo;</H> she says. Forty-two years in the same house as of 2023. The exact month has blurred, but the fact remains: this became their permanent home.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 11 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch11.number : 'Chapter Eleven'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch11.title : 'The Choice: Career or Family'}</h2>

          <Para lang={lang} hi={hiContent.ch11.paras[0]}>
            Once settled in Jaipur, she made a conscious decision about her life&rsquo;s work. The principal of Seedling School approached her: <H>&ldquo;तुम हमारे घर हमारे स्कूल में पढ़ाने आ जाओ&rdquo;</H> Come teach at our school. <H>&ldquo;मैंने कहा मैं नहीं आ सकती,&rdquo;</H> she responded. I can&rsquo;t come, I had children at home.
          </Para>

          <Para lang={lang} hi={hiContent.ch11.paras[1]}>
            Instead, she taught privately. <H>&ldquo;तो मैंने बैच में पढ़ाती थी टेबल पर बैठ के,&rdquo;</H> she explains. She taught in batches, sitting at the table at home. <H>&ldquo;मेरे हाथ के बच्चे बहुत अच्छे निकले,&rdquo;</H> she says with satisfaction. Children taught by her turned out very well. <H>&ldquo;उनकी मां अभी तक मेरे से मिलती है,&rdquo;</H> she notes. Their mothers still meet her today, grateful for the education their children received.
          </Para>

          <PullQuote
            hindi="&ldquo;मैं सोचती थी अगर नौकरी करती तो दो काम करने पड़ते। अब एक ही काम करना पड़ रहा है बस घर का काम करो।&rdquo;"
            english="&ldquo;I thought if I took a job, I&rsquo;d have to do two works. Now only one work needs doing: household work.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch11.paras[2]}>
            She accepted the trade-offs frankly. <H>&ldquo;नहीं हुआ डेवलपमेंट कोई बात नहीं,&rdquo;</H> she acknowledges. If development doesn&rsquo;t happen in other areas, no problem. <H>&ldquo;हॉबीज पूरी नहीं हुई,&rdquo;</H> she admits. Hobbies couldn&rsquo;t all be fulfilled. <H>&ldquo;यह सब किस्मत है मेरी,&rdquo;</H> she concludes. This is all my fate.
          </Para>

          <Para lang={lang} hi={hiContent.ch11.paras[3]}>
            But her choice was deliberate. She had a vision shaped by her Economics education:
          </Para>

          <PullQuote
            hindi="&ldquo;भाई मेरे तीन बच्चे हैं चौथे पति है पांचवी में हूं। इन्हीं का काम जो है वो मेरे लिए वर्क है। वही वर्क इज़ वरशिप है। यह सब भगवान के जीव हैं।&rdquo;"
            english="&ldquo;I have three children, fourth is husband, fifth is myself. Their work is my work. That work IS worship. These are all God&rsquo;s beings.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch11.paras[4]}>
            Moreover, she wasn&rsquo;t just raising three sons. <H>&ldquo;शुरू से मैं इनके बहन भाई में रही हूं,&rdquo;</H> she notes. From the beginning, she lived among her husband&rsquo;s siblings. After just one year alone setting up the house, his two sisters and one brother came to live with them. Five people&rsquo;s work became her responsibility.
          </Para>

          <Para lang={lang} hi={hiContent.ch11.paras[5]}>
            Their weddings, their education, their jobs. She helped with all of it. <H>&ldquo;कभी मना नहीं किया कि नहीं करूंगी मैं यह काम,&rdquo;</H> she insists. Never refused saying I won&rsquo;t do this work. <H>&ldquo;मैं कहती हूं जो पुण्य का काम हो रहा है मैं पाप की भागी क्यों बनूं मना करके?&rdquo;</H> she asks. If virtuous work is happening, why become party to sin by refusing? <H>&ldquo;करो भाई हम आ रही हूं,&rdquo;</H> she would say. Do it, brother, I&rsquo;m coming to help.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 12 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch12.number : 'Chapter Twelve'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch12.title : 'A Lifetime of Learning: Never Stop Growing'}</h2>

          <Para lang={lang} hi={hiContent.ch12.paras[0]}>
            What makes her story remarkable isn&rsquo;t just what she accomplished early in life, but that she never stopped learning. Even while raising children and managing a household that often included extended family, she pursued course after course, skill after skill.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[1]}>
            In 1978, while still in Udaipur, she took a food preservation course. <H>&ldquo;टॉफी बनानी, जेली बनानी, जैम बनाना, कैंडी बनानी, स्क्वैशेस और सिरप्स यह सब सीखा,&rdquo;</H> she lists. Toffees, jellies, jams, candies, squashes, and syrups, she learned them all.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[2]}>
            The moment they arrived in Jaipur in 1981, she enrolled in a cookery and bakery course at Khasa Kothi. <H>&ldquo;Government of India चलाती थी तब मैंने किया,&rdquo;</H> she notes. The Government of India ran it. One month, alternate days. Pizza, cakes, all bakery items.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[3]}>
            In 1987, six years after settling in Jaipur, she took a six-month cutting and tailoring course. <H>&ldquo;कपड़ों का काटना और सी काट के सिलना उसको,&rdquo;</H> she defines it. The course was comprehensive: <H>&ldquo;जांगिया सिलना, बनियाने सिलनी। फिर उसके बाद फ्रॉक वगैरह बनाने, ब्लाउज बनाने, सलवार कमीज़ बनाने, नाइट सूट बनाने, पेंट बनाने, कमीज़ बनानी बच्चों की,&rdquo;</H> she enumerates. Underwear, vests, frocks, blouses, salwar kameez, nightsuits, pants, children&rsquo;s shirts. Everything.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[4]}>
            She joined the Kitchen Gardening Association on Tank Road. <H>&ldquo;कई प्राइस दिए उसने,&rdquo;</H> she says. Won several prizes for her gardening work.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[5]}>
            Her music education, begun in 1954 with tabla and harmonium, continued intermittently. She gave the second year exam from Allahabad University, bought the third year book, but stopped when her young brother-in-law died at forty-one. <H>&ldquo;तो मैंने छोड़ दिया कि लोग कहेंगे लहंगा वाना बजाती है यह तो जवान देवर मरा है,&rdquo;</H> she explains. Social propriety in mourning demanded she stop. <H>&ldquo;इसलिए मैंने खुद ने ही छोड़ दिया,&rdquo;</H> she emphasizes. I myself stopped, by my own choice.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[6]}>
            Even first aid training came early, in 1959 in Delhi, from St. Ambulance. She later taught food preservation herself for a month at Maharaja School, passing on what she had learned to others. And around 2001, in Chennai, she completed an astrology course alongside her husband.
          </Para>

          <Para lang={lang} hi={hiContent.ch12.paras[7]}>
            Her daughter-in-law Kokila compiled all these certificates into one collection, making it easy to reference a lifetime of learning. Every few years, a new skill, a new qualification, a new capability. At age sixty-one, she completed the astrology course. This is a woman who never stopped growing, never stopped adding to her knowledge and abilities.
          </Para>

          <PullQuote
            hindi="&ldquo;कोई ना कोई हॉबी डेवलप करते रहो।&rdquo;"
            english="&ldquo;Keep developing some hobby or other.&rdquo;"
            lang={lang}
          />
        </section>

        <ChapterDivider />

        {/* Chapter 13 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch13.number : 'Chapter Thirteen'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch13.title : 'Teaching Values: The Three Core Principles'}</h2>

          <Para lang={lang} hi={hiContent.ch13.paras[0]}>
            Yet of all the education she received, the most fundamental came from her mother. <H>&ldquo;मेरी मां कहती थी मतलब इनकी नानी,&rdquo;</H> she explains. My mother used to say, meaning their grandmother. Three principles, simple and clear:
          </Para>

          <PullQuote
            hindi="&ldquo;चोरी मत करो। झूठ मत बोलो। किसी की जीभ को मत दुखाओ। यही भगवान की सेवा है।&rdquo;"
            english="&ldquo;Don&rsquo;t steal. Don&rsquo;t lie. Don&rsquo;t hurt anyone with your tongue. This itself is serving God.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch13.paras[1]}>
            <H>&ldquo;और वही धर्म मैंने पालन किया,&rdquo;</H> she states. And this same dharma I followed. These weren&rsquo;t abstract principles but practical guidelines lived every day.
          </Para>

          <Para lang={lang} hi={hiContent.ch13.paras[2]}>
            She passed them to her children with equal firmness. Teaching them to share was lesson one. <H>&ldquo;जैसे अंगूर लाए इनको चार तीनों को बांट दिए,&rdquo;</H> she illustrates. Like grapes, she would distribute to all three sons. <H>&ldquo;और कहा बेटा मुझे दो थोड़े से मैं भी तो खाऊंगी,&rdquo;</H> she would add. Son, give me a couple too, I also want to eat. The rule was absolute: <H>&ldquo;कोई भी चीज़ खाओ तो बांट के खाओ&rdquo;</H> Whatever you eat, eat by sharing.
          </Para>

          <Para lang={lang} hi={hiContent.ch13.paras[3]}>
            On honesty, she was equally unwavering. <H>&ldquo;फिर इनको सिखाया कि किसी की चीज़ चोरी नहीं करके लेनी है,&rdquo;</H> she taught. If they found something lying around: <H>&ldquo;तो वो भगवान की मंदिर में दे दो&rdquo;</H> Give it to the temple. The right way was clear: <H>&ldquo;अपनी मेहनत से करो&rdquo;</H> Earn by your own hard work.
          </Para>

          <Para lang={lang} hi={hiContent.ch13.paras[4]}>
            She enforced this strictly. <H>&ldquo;कभी पेंसिल भी लिया है तो मैंने कहा वापस दे के आओ,&rdquo;</H> she recalls. Even if they took a pencil by mistake, I said return it immediately. <H>&ldquo;नहीं मैं दे के आऊंगी स्कूल में,&rdquo;</H> she would threaten. If you don&rsquo;t, I&rsquo;ll go to school and return it myself. The result: they never brought anything home belonging to others.
          </Para>

          <Para lang={lang} hi={hiContent.ch13.paras[5]}>
            She taught by example too. Never hiring tutors, she taught all three sons herself through twelfth standard. <H>&ldquo;हमने ट्यूशन नहीं लगाई एक बार भी इनको अपने घर में,&rdquo;</H> she states emphatically. Never hired tuitions even once for them at our home. <H>&ldquo;और वो भी क्या था कि मैंने ही पढ़ाती थी इन बच्चों को तीनों को,&rdquo;</H> she continues. And moreover, I myself taught all three children. Her eldest, when he started giving tuitions himself in twelfth standard for IIT Chemistry preparation, had learned from her teaching.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 14 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch14.number : 'Chapter Fourteen'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch14.title : 'The Philosophy of the Four Ashrams'}</h2>

          <Para lang={lang} hi={hiContent.ch14.paras[0]}>
            As she reached her eighties, her understanding of life&rsquo;s structure became clearer and more important to her. <H>&ldquo;चार आश्रम होते हैं,&rdquo;</H> she explains. There are four ashrams, four stages of life:
          </Para>

          <Para lang={lang} hi={hiContent.ch14.paras[1]}>
            <H>&ldquo;एक बाल आश्रम होता है&rdquo;</H> Bal Ashram, childhood, from birth to twenty-five. <H>&ldquo;गृहस्थ आश्रम होता है&rdquo;</H> Grihastha Ashram, householder stage, twenty-five to fifty. <H>&ldquo;एक वानप्रस्थ आश्रम होता है&rdquo;</H> Vanprastha Ashram, retirement stage, fifty to seventy-five. <H>&ldquo;और एक सन्यास आश्रम&rdquo;</H> And Sanyas Ashram, renunciation stage, seventy-five onward.
          </Para>

          <Para lang={lang} hi={hiContent.ch14.paras[2]}>
            <H>&ldquo;तो अब मैं सन्यास आश्रम में आ गई,&rdquo;</H> she declares. Now I&rsquo;ve entered the Sanyas Ashram at eighty-one. <H>&ldquo;तो मुझे दुनिया से को छोड़ना है,&rdquo;</H> she explains. I must leave worldly attachments. <H>&ldquo;मतलब धीरे-धीरे कटिंग करनी है हर चीज़ की और भगवान में लगना है,&rdquo;</H> she continues. Gradually cut off from everything and engage in God.
          </Para>

          <Para lang={lang} hi={hiContent.ch14.paras[3]}>
            This wasn&rsquo;t mere theory. It manifested in concrete changes. <H>&ldquo;अब ज्यादा तामझाम पसंद नहीं करती,&rdquo;</H> she notes. Don&rsquo;t like too much pomp and show now. <H>&ldquo;शादी में जाना पसंद नहीं करती,&rdquo;</H> she adds. Don&rsquo;t like going to weddings. <H>&ldquo;अकेले में रहना पसंद करती हूं,&rdquo;</H> she states. Prefer to stay alone, so she can focus on her daily routine.
          </Para>

          <PullQuote
            hindi="&ldquo;बस मेरा यही उद्देश्य है कि जो आश्रम मैंने गुज़ारा उसको मैं अच्छी तरह गुज़ारूं।&rdquo;"
            english="&ldquo;My goal is whatever ashram stage I&rsquo;m passing through, I should pass through it properly.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch14.paras[4]}>
            Looking back, she evaluated her life by this framework. <H>&ldquo;बाल आश्रम में बचपन की चीज़ें,&rdquo;</H> she reflects. In childhood stage, did childhood things properly. <H>&ldquo;गृहस्थ आश्रम में गृहस्थ की सारी चीज़ें,&rdquo;</H> she continues. In householder stage, did all household duties. Weddings, birthdays, mundan ceremonies. All completed. Now in Sanyas Ashram, her focus had shifted fundamentally. The time for social obligations had passed. The time for spiritual practice had arrived.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 15 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch15.number : 'Chapter Fifteen'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch15.title : 'Daily Spiritual Practice: The Morning Routine'}</h2>

          <Para lang={lang} hi={hiContent.ch15.paras[0]}>
            Every morning at seven o&rsquo;clock sharp, she walks to the temple. <H>&ldquo;7:00 बजे आरती होती है,&rdquo;</H> she states. She attends not one but three aartis sequentially. <H>&ldquo;एक तो होती है शिव जी की आरती,&rdquo;</H> she lists. First is Shiv Ji&rsquo;s aarti. <H>&ldquo;दूसरी होती है ओम जय जगदीश हरे राम कृष्ण लक्ष्मण सीता हनुमान जी की और राधा गोविंद की,&rdquo;</H> she continues. Second is the Om Jai Jagdish Hare for Ram, Krishna, Laxman, Sita, Hanuman, and Radha Govind. <H>&ldquo;तीसरी होती है गणेश जी की,&rdquo;</H> she completes. Third is Ganesh Ji&rsquo;s aarti.
          </Para>

          <Para lang={lang} hi={hiContent.ch15.paras[1]}>
            <H>&ldquo;तीनों आरती करके प्रसाद ले के वहां से मैं फिर घर आती हूं,&rdquo;</H> she explains. After all three aartis, taking prasad, then returning home.
          </Para>

          <Para lang={lang} hi={hiContent.ch15.paras[2]}>
            Returning home, she faces her second major spiritual practice: writing. <H>&ldquo;रोज़ दो पेज लिखती हूं,&rdquo;</H> she states. Two pages daily. Not just any writing. She writes <H>&ldquo;जय श्री कृष्णा&rdquo;</H> repeatedly, methodically, devotionally.
          </Para>

          <Para lang={lang} hi={hiContent.ch15.paras[3]}>
            Her system is precise. <H>&ldquo;छह कॉलम बने हुए हैं पेज में एक कॉलम में 37 नाम आते हैं,&rdquo;</H> she explains. Six columns per page, thirty-seven names per column. <H>&ldquo;छह कॉलम में 222 नाम आ जाते हैं,&rdquo;</H> she calculates. 222 names total per page. Since 108 names equal one mala, two malas complete per page. Two pages equal four malas. <H>&ldquo;रोज़ लिखना मेरा काम है,&rdquo;</H> she emphasizes. Writing this daily is my work.
          </Para>

          <Para lang={lang} hi={hiContent.ch15.paras[4]}>
            But her system includes an ingenious safeguard. <H>&ldquo;यह दो पेज एडवांस में लिख के रखूंगी,&rdquo;</H> she explains. She writes two pages in advance. The reasoning came from experience. When she went to the hospital on the third, her writing was already done. When she returned on the fifth, she wrote for the fourth and fifth. Day by day, advancing, she reached several days ahead.
          </Para>

          <PullQuote
            hindi="&ldquo;और इस से मुझे बहुत अच्छी शांति मिली है। लिख के।&rdquo;"
            english="&ldquo;And from this writing, I have received very good peace.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch15.paras[5]}>
            Her third practice is reading. <H>&ldquo;बस गीता पढ़ती हूं,&rdquo;</H> she states simply. The Bhagavad Gita gives her something essential. <H>&ldquo;गीता से मुझे ज्ञान मिलता है कि कैसे अपन को जीवन जीना है,&rdquo;</H> she explains. Gita gives knowledge of how to live life. <H>&ldquo;कैसे दूसरों से समझना है कि भाई यह प्राणी क्या है,&rdquo;</H> she continues. How to understand others, what are these beings. <H>&ldquo;पेड़ पौधे पशु पक्षी इंसान क्यों बने कैसे बने भगवान ने यह सारे,&rdquo;</H> she muses. Trees, plants, animals, birds, humans. Why did God make all these, how were they made.
          </Para>

          <Para lang={lang} hi={hiContent.ch15.paras[6]}>
            She also attended Shiv Puran discourses at the temple. These discourses taught <H>&ldquo;सृष्टि क्या है और अपन को कैसे रहना है&rdquo;</H> What is creation and how should we live. But she was thoughtful about application. The ancient texts describe Satya Yuga, Treta Yuga, Dwapara Yuga, and now Kaliyuga. <H>&ldquo;वो वाली चीज़ें यहाँ फिट नहीं बैठती है,&rdquo;</H> she observed astutely. Those old practices don&rsquo;t fit here now. <H>&ldquo;लेकिन जहाँ तक वो उन चीज़ों का जो सार है जो उद्देश्य है जो लक्ष्य है उसको पकड़े रखो,&rdquo;</H> she advised, but whatever is the essence, the purpose, the goal, hold onto THAT. <H>&ldquo;लेकिन अपन को लक्ष्य पे पहुँचना है,&rdquo;</H> she insisted. But we must reach the goal.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 16 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch16.number : 'Chapter Sixteen'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch16.title : 'The Philosophy of Karma and Rebirth'}</h2>

          <Para lang={lang} hi={hiContent.ch16.paras[0]}>
            Her spiritual study gave her a clear framework for understanding action and consequence. <H>&ldquo;गीता कहती है कि अगर सात्विक कर्म किए तो देव योनि मिलेगी,&rdquo;</H> she explains. Gita says if you do satvik (pure) actions, you&rsquo;ll get divine birth. <H>&ldquo;और अगर राजस कर्म किए तो मनुष्य योनि मिलेगी,&rdquo;</H> she continues. If rajasic (passionate) actions, human birth. <H>&ldquo;और अगर आपने तामसी कर्म किए तो कीट पतंगा नीची वाली योनियाँ मिलेगी,&rdquo;</H> she completes. If tamasic (dark) actions, you&rsquo;ll become insects, moths, lower life forms.
          </Para>

          <PullQuote
            hindi="&ldquo;खुशी दोगे तो खुशी लोगे। अच्छा किसी का करोगे सुख दोगे तो सुख लोगे। दुःख दोगे तो दुःख लोगे।&rdquo;"
            english="&ldquo;Give happiness, receive happiness. Do good for someone, give comfort, you&rsquo;ll receive it. Give sorrow, receive sorrow.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch16.paras[1]}>
            But here&rsquo;s the crucial teaching: <H>&ldquo;फिर मरने के बाद यह चीज़ें 10 गुना ज्यादा होकर मिलती है,&rdquo;</H> she emphasizes. After death, these things return tenfold. If you steal one rupee, you&rsquo;ll repay ten after death. Why? Because what accompanies you is not the physical body but the subtle body. Mind, consciousness, intellect, and the actions of the senses. <H>&ldquo;जैसा कि गीता बताती है,&rdquo;</H> she adds. As Gita explains.
          </Para>

          <Para lang={lang} hi={hiContent.ch16.paras[2]}>
            So her reasoning was clear: <H>&ldquo;तो मैं यही सोचती हूँ क्यों अपन ऐसे काम करें जिस से कि अधोग योनि में पड़े दुःख पाए,&rdquo;</H> she asks. Why should we do deeds that lead to lower birth and suffering? <H>&ldquo;अपन अच्छे कर्म करें जिस से अच्छी योनि में जाए। अच्छे विचार रखें बस,&rdquo;</H> she summarizes. Do good deeds so we go to good rebirth. Keep good thoughts, that&rsquo;s all.
          </Para>

          <Para lang={lang} hi={hiContent.ch16.paras[3]}>
            Interestingly, she didn&rsquo;t want moksha, liberation from the cycle entirely. <H>&ldquo;और मोक्ष नहीं चाहती कि भगवान के वहाँ जाकर बैठ जाए,&rdquo;</H> she declares. Instead: <H>&ldquo;पुण्य करो भगवान के वहाँ जाओ थोड़े दिन जितने पुण्य है उतने भोगो फिर वापस आ जाओ,&rdquo;</H> she explains. Do good deeds, go to God&rsquo;s realm, enjoy for a while according to your merit, then come back. She wanted to keep serving, keep coming back, keep being useful. Permanent mergence with God didn&rsquo;t appeal to her service-oriented nature.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 17 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch17.number : 'Chapter Seventeen'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch17.title : 'Dealing with People: Making Friends, Not Enemies'}</h2>

          <Para lang={lang} hi={hiContent.ch17.paras[0]}>
            Her approach to human relationships reflected deep psychological understanding. <H>&ldquo;बुराई अगर किसी की देख ली अपन ने उसको वहीं त्याग दो,&rdquo;</H> she advises. If you see evil in someone, leave it right there. <H>&ldquo;और अपने मुँह मोड़ के अपना रास्ता पकड़ लो,&rdquo;</H> she continues. Turn your face and take your own path.
          </Para>

          <Para lang={lang} hi={hiContent.ch17.paras[1]}>
            <H>&ldquo;संसार में सब तरह की चीज़ें मिलेंगी,&rdquo;</H> she observes. In this world you&rsquo;ll find all types. Good people and bad people both. The critical instruction: <H>&ldquo;घृणा किसी से मत करो&rdquo;</H> Don&rsquo;t hate anyone. Why? Because it strikes back at you.
          </Para>

          <PullQuote
            hindi="&ldquo;शत्रु पैदा मत करो। मित्र बनाओ सबको। मनुष्य अपना ही मित्र है अपना ही शत्रु है।&rdquo;"
            english="&ldquo;Don&rsquo;t create enemies. Make everyone friends. A human being is their own friend, their own enemy.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch17.paras[2]}>
            She illustrated the fundamental choice we face with every person: if you think of people as enemies, &ldquo;Oh no, where did they come from?&rdquo;. Confusion comes. But if you think positively, a friend is meeting, how wonderful!, clarity comes.
          </Para>

          <Para lang={lang} hi={hiContent.ch17.paras[3]}>
            To remove confusion: <H>&ldquo;ना तो खुश हो और ना दुःख मनाओ,&rdquo;</H> she advises. Neither be too happy nor sad. <H>&ldquo;सबको समान मानो,&rdquo;</H> she instructs. Consider everyone equal. <H>&ldquo;अच्छी चीज़ों को पकड़ के आगे बढ़ो। उनको फेंक दो कचरे की टोकरी में,&rdquo;</H> she concludes. Catch the good things and move forward. Throw the bad things in the garbage basket.
          </Para>

          <Para lang={lang} hi={hiContent.ch17.paras[4]}>
            When someone insulted you, her mother&rsquo;s teaching applied: <H>&ldquo;किसी ने गाली दी तो गाली तुम्हारी नहीं हुई अगर तुम&rdquo;</H> If someone gives an insult, it&rsquo;s not yours if you don&rsquo;t accept it.
          </Para>

          <Para lang={lang} hi={hiContent.ch17.paras[5]}>
            <H>&ldquo;पर दुःख तब होता था,&rdquo;</H> she admits honestly. But sometimes it hurt. When pain came, she would tell someone to lighten the sorrow: <H>&ldquo;भाई ऐसा आज हुआ यह हुआ वो हुआ,&rdquo;</H> she would share. But she didn&rsquo;t seek solution or revenge. Her action was measured: decided to stay away from that person so she heard minimum from them. <H>&ldquo;पर उसको जवाब नहीं दिया,&rdquo;</H> she emphasizes. But didn&rsquo;t give them a reply. Didn&rsquo;t retaliate. Better to maintain distance than create ongoing conflict.
          </Para>

          <Para lang={lang} hi={hiContent.ch17.paras[6]}>
            <H>&ldquo;तो ऐसे करके अपनी ज़िंदगी मैंने तो निकाली है,&rdquo;</H> she summarizes. This is how I led my life. No gossip, focus on work, avoid negativity, make friends, keep distance from those who can&rsquo;t be friends, but never create enemies.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 18 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch18.number : 'Chapter Eighteen'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch18.title : 'The Debt Philosophy: Serving Without Creating Obligation'}</h2>

          <Para lang={lang} hi={hiContent.ch18.paras[0]}>
            As she grew older, a particular philosophy intensified. <H>&ldquo;मैं सबकी कर्ज़दार थी,&rdquo;</H> she reflects. I was indebted to everyone. <H>&ldquo;जो मैं चुकाती रही सारे लोन कि भाई इनकी सेवा करो,&rdquo;</H> she explains. Which she kept repaying like loans, serving them.
          </Para>

          <Para lang={lang} hi={hiContent.ch18.paras[1]}>
            But her thinking evolved. <H>&ldquo;किसी की सेवा नहीं लेनी,&rdquo;</H> she states. Don&rsquo;t take anyone&rsquo;s service. <H>&ldquo;चाहे बेटा भी हो,&rdquo;</H> she continues. Even if it&rsquo;s your own son. <H>&ldquo;उसका भी करके चलो,&rdquo;</H> she instructs. Do his work yourself too. <H>&ldquo;जिस से उसका ऋण अपने ऊपर नहीं चढ़े,&rdquo;</H> she reasons. So his debt doesn&rsquo;t accumulate on you.
          </Para>

          <PullQuote
            hindi="&ldquo;जीव का जीव ऋण चढ़ता है। मैंने तुम्हारा काम किया तुमने मेरा किया बराबर हो गया। तुम करते रहोगे तो मैं तुम्हारी कर्ज़दार हो जाऊंगी सेवा की।&rdquo;"
            english="&ldquo;One being becomes indebted to another. I did your work, you did mine, we&rsquo;re equal. If you keep doing for me, I become indebted for the service.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch18.paras[2]}>
            Even in her eighties, she still did all her own cleaning, organizing, and housework. She couldn&rsquo;t compromise on three things: <H>&ldquo;स्वास्थ्य और सफाई और धरा उठाई इनसे अभी तक भी समझौता नहीं कर पाई,&rdquo;</H> she states. Health, cleanliness, and organizing.
          </Para>

          <Para lang={lang} hi={hiContent.ch18.paras[3]}>
            <H>&ldquo;मैं अपने हाथों से सुबह सुबह सफाई वगैरह करती हूँ,&rdquo;</H> she emphasizes. Cleaning with her own hands every morning. This included everything. Dustbins scrubbed with soap if needed, buckets and mugs washed before every bath, fresh water from the tap only, never reusing water. The philosophy extended to teaching: <H>&ldquo;अपने-अपने बिस्तर अपने आप सोकर उठ के तय करो,&rdquo;</H> she instructs. Make your own bed after getting up. This wasn&rsquo;t just about cleanliness but about self-sufficiency, about not creating debts of service even within family.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 19 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch19.number : 'Chapter Nineteen'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch19.title : 'The Health Crisis and Recovery'}</h2>

          <Para lang={lang} hi={hiContent.ch19.paras[0]}>
            January 2023 brought a moment that could have been fatal. <H>&ldquo;तीन तारीख को मैं हॉस्पिटल गई थी,&rdquo;</H> she recounts. She went to hospital on the third. Her blood sugar had dropped dangerously. <H>&ldquo;31 शुगर लेवल पहुँच गया,&rdquo;</H> she states. Reached thirty-one. This is critically, life-threateningly low.
          </Para>

          <Para lang={lang} hi={hiContent.ch19.paras[1]}>
            Her grandson Somya&rsquo;s reaction captured the family&rsquo;s terror: <H>&ldquo;दोनों रोने लग गए,&rdquo;</H> she remembers. <H>&ldquo;सोम्या भी कि दादी को क्या हो गया? दादी को क्या हो गया?&rdquo;</H> she repeats. Somya crying, &ldquo;What happened to Dadi?&rdquo;
          </Para>

          <Para lang={lang} hi={hiContent.ch19.paras[2]}>
            But Bhaiyu acted instantly. <H>&ldquo;भवू इमीडिएटली मेरे को ले गया,&rdquo;</H> she says. <H>&ldquo;अगर पाँच मिनट भी देर हो जाती तो पता नहीं क्या होता,&rdquo;</H> she reflects soberly. If even five minutes delay had happened, who knows what would have happened. Those five minutes could have been the difference between life and death.
          </Para>

          <Para lang={lang} hi={hiContent.ch19.paras[3]}>
            The doctor&rsquo;s orders changed her routine fundamentally. <H>&ldquo;डॉक्टर ने कहा दो-दो घंटे से खाओ,&rdquo;</H> she explains. Eat every two hours. <H>&ldquo;भाई काम छोड़ो पहले खाने में लगो,&rdquo;</H> she instructs herself. Leave work, first focus on eating. Eat anything, drink coconut water, then work.
          </Para>

          <PullQuote
            hindi="&ldquo;अब तुम लोगों की सबकी दुआएँ काम कर गई। जी रही है।&rdquo;"
            english="&ldquo;Now all of you people&rsquo;s prayers worked. I&rsquo;m living.&rdquo;"
            lang={lang}
          />
        </section>

        <ChapterDivider />

        {/* Chapter 20 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch20.number : 'Chapter Twenty'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch20.title : 'The Steel Body'}</h2>

          <Para lang={lang} hi={hiContent.ch20.paras[0]}>
            Looking back at her physical journey, the progression is remarkable. The childhood of walking, carrying water, playing sports, doing drill, practicing throwball, the NCC training with actual rifle firing, the march practices, the coordination with musical sticks. All of it built what she proudly calls her steel body.
          </Para>

          <Para lang={lang} hi={hiContent.ch20.paras[1]}>
            <H>&ldquo;जब मैं ससुराल में आती थी तो मैं कहती थी स्टैंड और स्टील की बॉडी बनाई बना के दी है,&rdquo;</H> she recalls telling her in-laws. They built and gave her a body of steel. <H>&ldquo;कितना भी काम कर लो अपन को कोई बीमारी नहीं कुछ नहीं,&rdquo;</H> she declares. Any amount of work, no illness comes.
          </Para>

          <Para lang={lang} hi={hiContent.ch20.paras[2]}>
            The only exception: <H>&ldquo;बस सर्दी से बीमारी ब्रोंकाइटिस आती थी,&rdquo;</H> she notes. Only from cold, bronchitis would come. This happened during the hectic years of raising children, constantly going in and out with temperature changes. Otherwise, no other illness came.
          </Para>

          <Para lang={lang} hi={hiContent.ch20.paras[3]}>
            Medical professionals confirmed the results of that steel body. Her teeth, strengthened by decades of sugarcane chewing: the doctor who treated her said her teeth are remarkably strong. Her eyes, maintained by that childhood sadhu&rsquo;s teaching: <H>&ldquo;उससे मेरी आंखें बिल्कुल ठीक है,&rdquo;</H> she states. Her nerves, as the surgeon confirmed, are very good. Recent health scare aside, the foundation built in childhood continued supporting her eighth decade.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 21 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch21.number : 'Chapter Twenty-One'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch21.title : 'The Video Call: Connecting Generations'}</h2>

          <Para lang={lang} hi={hiContent.ch21.paras[0]}>
            The interview itself, conducted via video call during winter break in January 2023, revealed the bridge between generations. Her grandchildren, calling from abroad, showed her their virtual reality experiences. A new technology she&rsquo;d never heard of. They explained the digital world you can see through devices. <H>&ldquo;अच्छा,&rdquo;</H> she responded with interest.
          </Para>

          <Para lang={lang} hi={hiContent.ch21.paras[1]}>
            They shared their artwork. Naman showed his resin art pieces, while Manan showed his burn pen art on wood, calligraphy, and lettering practice. <H>&ldquo;मैंने यह मेसेज लिख लिया आपके लिए,&rdquo;</H> he explained. I wrote this message for you. &ldquo;Enjoy Every Moment,&rdquo; the artwork read. <H>&ldquo;बहुत बढ़िया,&rdquo;</H> she responded warmly.
          </Para>

          <Para lang={lang} hi={hiContent.ch21.paras[2]}>
            They discussed their college studies. Computer science, data science, entrepreneurship courses. <H>&ldquo;बहुत बढ़िया बात,&rdquo;</H> she approved. <H>&ldquo;सफलता के मार्ग पर चल रहे हो,&rdquo;</H> she encouraged. Walking on the path of success. <H>&ldquo;डेवलपिंग स्किल है अच्छी बात,&rdquo;</H> she noted. Developing skills, good thing. <H>&ldquo;कोई ना कोई हॉबी डेवलप करते रहो,&rdquo;</H> she advised. Keep developing some hobby or other.
          </Para>

          <Para lang={lang} hi={hiContent.ch21.paras[3]}>
            They showed her Google Maps, searching for her old addresses. Dariba Kalan in Old Delhi. The railway bungalow locations, long changed. Ramjas College, still standing. She peered at the screen, memory and present converging. <H>&ldquo;हाँ ऐसा ही था,&rdquo;</H> she confirmed. Yes, it was like this. St. Paul&rsquo;s School in Kota, Udaipur addresses, Jodhpur locations. One by one they reconstructed her geographic journey through technology.
          </Para>

          <Para lang={lang} hi={hiContent.ch21.paras[4]}>
            A conversation across continents, across generations, documenting a life that spanned from pre-Independence India to the digital age.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 22 */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch22.number : 'Chapter Twenty-Two'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch22.title : 'The Legacy: What Remains'}</h2>

          <Para lang={lang} hi={hiContent.ch22.paras[0]}>
            As the interview closed, what emerged wasn&rsquo;t just a life story but a philosophy, a template for how to live with purpose, dignity, and constant growth.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[1]}>
            From childhood she learned self-sufficiency. Carrying water when needed, walking to school regardless of distance, building physical strength through practical activity. She learned spiritual practices young and maintained them for eight decades. The eye-washing, the sugarcane chewing, the physical discipline. These weren&rsquo;t temporary enthusiasms but lifetime commitments.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[2]}>
            When education was denied her as a girl, she fought for it. Not with anger but with firm insistence: <H>&ldquo;हम तो पढ़ेंगे&rdquo;</H> I will study. She struggled, especially for college, but never wavered. Her father eventually supported her, and she completed not just BA but MA, not to mention B.Ed. and decades of additional courses.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[3]}>
            When Economics education showed her global development patterns, she applied them at home. India was developing; she would help develop her household. <H>&ldquo;कैसे अपने को आगे बढ़ाएं बच्चों को कैसे बढ़ाएं,&rdquo;</H> she made her mission. How to advance ourselves, advance our children.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[4]}>
            When faced with the choice between career and family, she chose deliberately. <H>&ldquo;इन्हीं का काम जो है वो मेरे लिए वर्क है वही वर्क इज़ वरशिप है,&rdquo;</H> she explained. Their work is my work, that work is worship. <H>&ldquo;यह सब भगवान के जीव हैं,&rdquo;</H> she reasoned. These are all God&rsquo;s beings. Serving them was serving God.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[5]}>
            She taught her children three core values from her mother: don&rsquo;t steal, don&rsquo;t lie, don&rsquo;t hurt with words. She added lessons on sharing, on earning through own effort, on returning even borrowed pencils. The enforcement was firm. The results showed in three successful sons who learned honesty and hard work.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[6]}>
            She never stopped learning. Even while raising three sons and often extended family, she pursued courses: food preservation in 1978, cookery and bakery in 1981, cutting and tailoring in 1987, kitchen gardening with prizes, music through second year, astrology in 2001, first aid in 1959. Her daughter-in-law compiled the certificates. Testimony to six decades of continuous growth.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[7]}>
            From the Gita and Puranas she extracted philosophical framework. The four ashrams gave her life structure. The karma philosophy guided her actions. <H>&ldquo;खुशी दोगे तो खुशी लोगे,&rdquo;</H> she understood. Give happiness, get happiness. After death, tenfold return. So choose good actions, good thoughts.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[8]}>
            Human relationships followed clear principles: make friends not enemies, throw bad things in the garbage basket, don&rsquo;t hate because it returns to you, maintain distance from those incompatible but never create active conflict. Even debt became spiritual concept. Don&rsquo;t take anyone&rsquo;s service, even from own children. Do everything yourself so debt doesn&rsquo;t accumulate.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[9]}>
            Her daily spiritual practice showed her focus: three aartis at 7 AM, writing &ldquo;Jai Shri Krishna&rdquo; two pages daily (four malas), reading Gita, attending Puran discourses. <H>&ldquo;और इस से मुझे बहुत अच्छी शांति मिली है,&rdquo;</H> she testifies. From this she received very good peace.
          </Para>

          <Para lang={lang} hi={hiContent.ch22.paras[10]}>
            Her advice to grandchildren combined traditional and modern understanding. Keep developing skills. Keep learning. Make friends. Do good actions because they return tenfold. Serve but don&rsquo;t create debts. <H>&ldquo;कोई ना कोई हॉबी डेवलप करते रहो,&rdquo;</H> she encouraged. Growth doesn&rsquo;t stop at any age.
          </Para>
        </section>

        <ChapterDivider />

        {/* Chapter 23 - Conclusion */}
        <section className="ls-chapter">
          <p className="ls-chapter-number">{lang === 'hi' ? hiContent.ch23.number : 'Final Chapter'}</p>
          <h2 className={lang === 'hi' ? 'ls-chapter-title-hindi' : ''}>{lang === 'hi' ? hiContent.ch23.title : <>Conclusion: &ldquo;Do or Die&rdquo;</>}</h2>

          <Para lang={lang} hi={hiContent.ch23.paras[0]}>
            If one phrase captures her life, it&rsquo;s the lesson from NCC that still ran in her mind after sixty years: <H>&ldquo;डू एंड डाई&rdquo;</H> Do or Die. When girls weren&rsquo;t encouraged in education, she insisted and succeeded. When Economics was her weakest subject, she completed Honours. When career conflicted with family, she chose family but elevated it to spiritual practice. When courses were available, she took them into her sixties. When spiritual practice called, she answered with daily discipline. When health crisis struck, she recovered and adapted.
          </Para>

          <Para lang={lang} hi={hiContent.ch23.paras[1]}>
            <H>&ldquo;मेरा तो अब यह जो जीवन है वो ऐसा चल रहा है,&rdquo;</H> she reflected. My life now is proceeding like this. Not with complaint, not with regret, but with continued purpose. The four ashrams gave structure. The three principles from mother gave foundation. The karma philosophy gave motivation. The steel body gave capability. The continuous learning gave adaptability. The spiritual practice gave peace.
          </Para>

          <PullQuote
            hindi="&ldquo;बस मेरा यही उद्देश्य है कि जो आश्रम मैंने गुज़ारा उसको मैं अच्छी तरह गुज़ारूं।&rdquo;"
            english="&ldquo;My goal is whatever ashram stage I&rsquo;m passing through, I pass through it properly.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch23.paras[2]}>
            She did childhood properly. She did householder stage properly, raising family with values. She did retirement stage properly, managing ceremonies and celebrations. She did renunciation stage properly, focusing on God while maintaining dignity and independence.
          </Para>

          <PullQuote
            hindi="&ldquo;अच्छे विचार रखें बस।&rdquo;"
            english="&ldquo;Keep good thoughts, that&rsquo;s all.&rdquo;"
            lang={lang}
          />

          <Para lang={lang} hi={hiContent.ch23.paras[3]}>
            Simple advice from eight decades of living. Good thoughts, good actions, good karma. Serve without creating debt. Learn without stopping. Make friends without making enemies. Throw bad in garbage, keep good close. Share what you have. Return what you borrowed. Don&rsquo;t steal, don&rsquo;t lie, don&rsquo;t hurt with words. This is serving God.
          </Para>

          <Para lang={lang} hi={hiContent.ch23.paras[4]}>
            From pre-Independence railway bungalow with lamp-lit nights and carried water to video calls with grandchildren across continents discussing virtual reality, from walking miles to school with cloth bags to managing households across cities with three sons educated to success, from fighting for her own education to teaching generations without hired tutors, from learning dozens of courses to writing four malas of &ldquo;Jai Shri Krishna&rdquo; daily in neat columns. This was a life lived with intention, adaptation, and unwavering commitment to growth and service.
          </Para>

          <Para lang={lang} hi={hiContent.ch23.paras[5]}>
            &ldquo;Do or Die&rdquo; she learned at nineteen. At eighty-four, she still lived it.
          </Para>
        </section>

        {/* Closing */}
        <div className="ls-closing">
          <p className={`ls-closing-om${lang === 'en-tr' ? ' ls-hindi-translit' : ''}`}>{lang === 'en-tr' ? 'Jai Shri Krishna 🙏' : 'जय श्री कृष्णा 🙏'}</p>
          <p className="ls-closing-meta">
            {lang === 'hi' ? hiContent.closing.meta1 : 'Compiled from video interview conducted January 2023'}
            <br />
            {lang === 'hi' ? hiContent.closing.meta1b : 'With grandchildren across continents'}
            <br />
            {lang === 'hi' ? hiContent.closing.meta1c : 'A life documented, a philosophy preserved, a legacy continued'}
          </p>
          <p className="ls-closing-meta" style={{ marginTop: '1rem' }}>
            {lang === 'hi' ? hiContent.closing.meta2 : <>Born Delhi, 1944 &bull; Mother of three &bull; Grandmother &bull; Great-grandmother</>}
            <br />
            {lang === 'hi' ? hiContent.closing.meta2b : <>1944 &ndash; 2026</>}
          </p>
          <p className={`ls-closing-om${lang === 'en-tr' ? ' ls-hindi-translit' : ''}`} style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>
            {lang === 'en-tr' ? 'Om Shanti Shanti Shanti' : 'ॐ शान्ति शान्ति शान्ति'}
          </p>
          <div className="ls-links">
            <a
              href="https://youtu.be/Vr5SEu2DvKY"
              target="_blank"
              rel="noopener noreferrer"
              className="ls-back-home"
            >
              &#9654;&ensp;Watch Lifestory Video
            </a>
            <a
              href="https://youtu.be/_Wd5UGzt5WE"
              target="_blank"
              rel="noopener noreferrer"
              className="ls-back-home"
            >
              &#9654;&ensp;Diwali 2022 Pooja
            </a>
            <a
              href="https://photos.app.goo.gl/njNxdR8tnVYrUKhU9"
              target="_blank"
              rel="noopener noreferrer"
              className="ls-back-home"
            >
              Best Photos
            </a>
            <a
              href="https://photos.app.goo.gl/QHKtYrbuytDfGmoQA"
              target="_blank"
              rel="noopener noreferrer"
              className="ls-back-home"
            >
              Dadi Photo Album Memories
            </a>
          </div>
          <Link to="/" className="ls-back-home">&larr; Return to Memorial</Link>
        </div>

      </div>

      <footer className="ls-footer">
        <div className="ls-footer-inner">
          <div className="ls-footer-links">
            <Link to="/" className="ls-footer-link">Memorial Home</Link>
            <Link to="/memories" className="ls-footer-link">Share a Memory</Link>
            <a
              href={`https://wa.me/?text=${encodeURIComponent('In loving memory of Kalpana Bhargava (1944–2026). A life of purpose, strength, and devotion.\n\nhttps://mananb77.github.io/dadi/')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ls-footer-link"
            >
              Share on WhatsApp
            </a>
          </div>
          <p className="ls-footer-family">The Bhargava Family</p>
          <p className="ls-footer-family-hindi">भार्गव परिवार</p>
        </div>
      </footer>
    </div>
    </LangContext.Provider>
  );
}

export default LifeStory;
