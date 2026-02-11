import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './PersonalMemories.css';

function PersonalMemories() {
  const containerRef = useScrollReveal();

  return (
    <div className="pm" ref={containerRef}>
      {/* Nav */}
      <nav className="pm-nav">
        <Link to="/" className="pm-back">&larr;</Link>
        <span className="pm-nav-title">Manan&rsquo;s Memories with Dadi</span>
      </nav>

      {/* Hero */}
      <header className="pm-hero">
        <h1 className="pm-heading fade-in">Manan&rsquo;s Memories with Dadi</h1>
        <p className="pm-heading-hindi fade-in">दादी के साथ मनन की यादें</p>
        <p className="pm-intro fade-in">
          These are personal memories &mdash; moments I lived, things I witnessed,
          feelings I carry. Not a biography but a grandson&rsquo;s letter to the
          woman who shaped him through rotis, silence, and unwavering presence.
        </p>
      </header>

      {/* ============================================
          HER PRESENCE & ESSENCE
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Her Presence</h2>
        <p className="pm-section-subtitle">How I Remember Her</p>

        <p>
          Sky blue was her favorite color &mdash; the color of the sky. She wore
          it often throughout her life, in different celebrations and events. Looking
          through photos over the years &mdash; the 2018 Jaipur visit, at home, at
          celebrations &mdash; she wore that beautiful sky blue in so many situations
          and scenarios. She also loved wearing flowers in her sari. That&rsquo;s how
          I picture her. The photo we used for her memorial website shows her in sky
          blue with flowers &mdash; that&rsquo;s exactly who she was.
        </p>

        <p>
          Her hands were soft but experienced &mdash; hands that had rolled thousands
          of rotis, washed dishes, and done housework throughout her entire lifetime.
          She smelled of jasmine or rose &mdash; the scent I associate with India
          itself. Her voice is preserved in the video recordings I have of her,
          and I&rsquo;m grateful for that.
        </p>

        <p>
          As she aged, her walk changed to more of a waddle, using a cane. I
          remember the sound of her footsteps, the way she moved through spaces.
          But her spirit never slowed. She put 100% effort into everything she
          did &mdash; this wasn&rsquo;t just about being a grandmother. She was a
          woman who fought hard to continue her education when it wasn&rsquo;t
          encouraged, who juggled an MA and B.Ed after marriage and children.
        </p>

        <h3 className="pm-subsection fade-in">How She Showed Love</h3>

        <p>
          Dadi was not a hugger. She didn&rsquo;t say &ldquo;I love you&rdquo;
          frequently. Everything was shown through actions &mdash; she expressed
          care through serving rotis, making food, and constant service. She was
          determined and sometimes fierce. That was part of her nature and personality.
        </p>

        <p>
          She would get angry if something was out of place or not done properly.
          She was strict about order. But she was surprisingly lenient and playful
          about playing cards and anything relating to the grandkids &mdash; making
          time for us was always important to her. Her laughter was contagious.
          Everybody loved it when she was really happy.
        </p>

        <h3 className="pm-subsection fade-in">The People Person</h3>

        <p>
          She was a very much people-focused person, always used to having people
          around. She thrived in big family environments and struggled with the
          quietness of weekdays in Sunnyvale when everyone was working. In India,
          there was constant company &mdash; the joint family structure of three
          generations. Coming to the US, where it was much quieter and she needed
          someone to drive her everywhere, was an adjustment. In India she could
          walk herself places, meet other grandparents. Here she was somewhat stuck
          at home, dependent on others in a way she never wanted to be.
        </p>

        <h3 className="pm-subsection fade-in">Her Favorite Things</h3>

        <p>
          Color: sky blue, like the sky. Animal: parrots &mdash; she loved their
          multicolored beauty, though it was hard seeing them in cages. We even
          got two parrots in the Jaipur garage over the past few years, and she
          loved seeing them. Food: all vegetables &mdash; she said each has
          different nutrients &mdash; but mainly roti sabji, always.
        </p>
      </section>

      {/* ============================================
          FOOD & KITCHEN
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Her Kitchen</h2>
        <p className="pm-section-subtitle">Food, Meals &amp; What She Taught Us</p>

        <h3 className="pm-subsection fade-in">What She Made</h3>

        <p>
          Roti sabji &mdash; the main dish, made again and again. I can picture
          her hands rolling rotis on the belen, even sitting on the ground in
          Jaipur. Saak, like shakar bare, was her favorite thing to make for me. And the
          namkeen and nashta &mdash; morning snacks that smelled really yummy,
          always full of spices and different aromas. Everything was very, very
          delicious.
        </p>

        <p>
          She was always composed in the kitchen. She knew how to move around,
          parallel process, manage multiple things at once. I would stand by her
          and just watch her work. There was a quiet confidence in how she handled
          everything.
        </p>

        <h3 className="pm-subsection fade-in">Meal Rituals</h3>

        <p>
          She would sit anywhere, but she would always be making rotis throughout
          the entire meal, continuously serving everyone at the table. The rotis
          would keep on coming from her. We would all sit together with the
          different bowls of food in the middle, serving ourselves, while she kept
          rolling. She&rsquo;d eat last &mdash; sometimes after everyone had
          finished. Then she would do the dishes after everyone got up.
        </p>

        <p>
          Sitting together was very important to her &mdash; everyone eating
          together as a family. During chai time, there would be different snacks,
          bohre, nashta from the Indian market. When she visited Sunnyvale, on weekdays it was
          just our immediate family, but weekends were filled with people visiting.
        </p>

        <p>
          I once asked if I could help, but she said how important it was for her
          to do the work &mdash; to use her hands and feet, to wash dishes, to
          keep herself healthy through motion and housework. She never had anyone
          fully helping her until she could not do it herself. Even if anyone tried
          to help, she wouldn&rsquo;t allow it. She wanted to stay self-sufficient
          and never be a burden.
        </p>

        <h3 className="pm-subsection fade-in">Food Values</h3>

        <blockquote className="pm-quote fade-in">
          Not a single boond of dal, not a grain of rice, not any vegetables
          wasted. She emphasized how food comes from farmers to the table, how
          lucky we are that we don&rsquo;t have to go farm and bring everything
          ourselves.
        </blockquote>

        <p>
          Sharing food was always emphasized in the way our family was. Food was
          always made for everyone &mdash; everyone eats together and sits together.
          This is how we grew up. It created an environment of a shared home and
          shared family experience. If you got grapes, you divided them among
          everyone.
        </p>
      </section>

      {/* ============================================
          THE SUMMER OF 2024
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">The Summer of 2024</h2>
        <p className="pm-section-subtitle">Three Precious Months in Sunnyvale</p>

        <p>
          From May through late July, Dadi stayed with us in Sunnyvale. She
          arrived before my college semester finished, and after it ended I started
          working for the summer. Even while working, I had a precious window every
          day &mdash; 5pm to 8:30pm, after my work and before she went to bed. I
          made sure to use every minute.
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;I won&rsquo;t need to be living with regret.&rdquo; &mdash; I
          consciously made time for her, carved out evenings and weekends even
          while working that summer. This is something I will cherish forever.
        </blockquote>

        <h3 className="pm-subsection fade-in">Google Maps on the Projector</h3>

        <p>
          In the garage, I set up Google Maps on the projector and took her
          traveling around the world &mdash; street by street, city by city. She
          watched with wide eyes and amazement.
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;I can&rsquo;t believe from here we can travel the world from
          sitting at home.&rdquo;
        </blockquote>

        <p>
          That captured something really special about bridging generations with
          technology. She always needed help with her phone &mdash; I had to teach
          her how to dial and end calls when she was in the US. But seeing the
          world through a projector on the garage wall? That amazed her.
        </p>

        <h3 className="pm-subsection fade-in">Michael&rsquo;s &amp; Knitting</h3>

        <p>
          I took her to Michael&rsquo;s to get yarn for knitting projects. It
          was wonderful for her to see all the arts and crafts and be able to do
          creative work that wasn&rsquo;t a priority in Jaipur. She got to try
          knitting and making new things during her time here. She knitted a
          sweater for Samya &mdash; her hands still steady, still creating after
          all those years.
        </p>

        <h3 className="pm-subsection fade-in">Walking Through My Education</h3>

        <p>
          I showed her every stage of my education. At my <strong>elementary
          school</strong>, I showed her where I grew up &mdash; the different
          classrooms, where we played, the playground, all the different things we
          learned with English, science, math, and the book fairs.
        </p>

        <p>
          <strong>Middle school</strong>, I showed her from the outside &mdash;
          the building and how I studied different subjects there.
        </p>

        <p>
          At <strong>high school</strong>, we actually got to go inside the campus.
          I showed her the robotics room, the Olympic pool where I swam for so many
          years, the large gymnasium, the amphitheater where me and my friends used
          to hang out. All of these different memories came together, and it was
          really great to give her a good walkthrough.
        </p>

        <p>
          <strong>UC Berkeley</strong> got the deepest tour. That was a significant
          chunk of time I spent living and immersing myself in that environment, so
          I was able to share so much more. I told her about my midterm exams and
          professors, the different clubs and activities, my dorms, the food and
          meal culture, all the different aspects of Berkeley. I showed her the view
          and the sunset and how beautiful the campus was. It was wonderful to take
          the time to reflect and share all the different aspects of my four-year
          experience there.
        </p>

        <p>
          Her reaction was pure pride. She was really happy and smiled seeing the
          college campus and the pool and everything. It was incredibly meaningful
          given her own struggles for education.
        </p>

        <h3 className="pm-subsection fade-in">The Parallel Moment</h3>

        <blockquote className="pm-quote fade-in">
          In India, she had walked me through all her certificates &mdash; her BA
          in Economics, her cookery and baking certificates. I even have video of
          her showing them. She always said, &ldquo;I did a BA in
          Economics,&rdquo; and that she was very smart in math. She wanted me to
          see how intelligent she was, how much she knew about different subjects.
          Then I walked her through my campuses. Both of us sharing our educational
          journeys with each other.
        </blockquote>

        <p>
          She fought so hard for education, gave up her career dreams for the
          family&rsquo;s education, and then her grandson walked her through every
          stage of his educational journey. That full circle &mdash; from her
          certificates in Jaipur to my campuses in California &mdash; might be the
          moment I treasure most.
        </p>

        <h3 className="pm-subsection fade-in">Pinecrest Lake</h3>

        <p>
          Around July 4th, the whole family went to Pinecrest Lake. There was a
          drone show. Afterwards, we were all in the patio area, stargazing.
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;Wow, there&rsquo;s so many stars in the sky.&rdquo;
        </blockquote>

        <p>
          One of the last trips she would take to the US.
        </p>

        <h3 className="pm-subsection fade-in">Walking on Albatross Drive</h3>

        <p>
          In 2013, when she was younger and more fit, she could walk all the way
          to Ortega Park and back by herself &mdash; Sunnyvale was safe, and we
          knew she would be fine on her own. By 2024, she would make four rounds
          going back and forth on Albatross Drive, outside our house, just within
          the neighborhood &mdash; going to Ortega was too far now. But she still
          walked, every evening, insisting on her independence.
        </p>

        <h3 className="pm-subsection fade-in">My 21st Birthday</h3>

        <p>
          She kept saying she wanted to go back to India &mdash; &ldquo;I want to
          go back to India soon, as soon as possible. When can someone come with
          me?&rdquo; My family convinced her to stay at least until my birthday,
          because it was a big moment to have my grandmother there for that
          milestone.
        </p>

        <p>
          The celebration was amazing &mdash; both sides of the family coming
          together in San Ramon and Sunnyvale. She actually switched back and
          forth: in the beginning she said she would only stay with us, but over
          time she got to stay with her other son Binu Chacha in San Ramon for a
          week too. Having the opportunity for her to spend time with both sons
          was amazing.
        </p>

        <h3 className="pm-subsection fade-in">The Goodbye in Late July</h3>

        <p>
          She left with Nidhi auntie around July 25th. She had been here from
          May all the way through July &mdash; about three to four months. It
          was hard because I didn&rsquo;t know if I&rsquo;d see her again. You
          want to always spend more time and you only have so many days.
        </p>

        <p>
          But I did see her again &mdash; we went to India in early 2025.
        </p>
      </section>

      {/* ============================================
          INDIA VISITS
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">India Visits</h2>

        <h3 className="pm-subsection fade-in">Jaipur &mdash; The Daily Rhythm</h3>

        <p>
          In the morning, she would do her puja and prayers, then nasta. Throughout
          the day, there was chai &mdash; and spending time together. In the
          evenings, card games with her, Dada, and the other grandkids. Then the
          walk to temple.
        </p>

        <p>
          The walk was only five minutes, but we would walk slowly to keep up with
          her pace. The street was full of cars. At the temple, she would show me
          around the different idols. Then we would sit down, and she would do her
          puja and prayers during arti. I would sit and watch and listen. Sometimes
          we walked in comfortable silence. Sometimes I was asking her about
          different things. I think just always being interested in learning about
          our grandparents is the most important thing we can do.
        </p>

        <p>
          There was also always something growing in the front yard &mdash; she
          was a member of the Kitchen Gardeners Association and would tend to her
          garden. Even outside the home and kitchen, she was always growing
          something.
        </p>

        <h3 className="pm-subsection fade-in">The 2018 India Trip</h3>

        <p>
          I was in middle school or early high school then. We went with my mom,
          brother, Samya (my younger cousin, who was about 3&ndash;4 years old
          then, still a toddler), and our Chachi.
        </p>

        <p>
          <strong>Jantar Mantar</strong> &mdash; the old clock tower area. I
          remember it being super hot, like 110 degrees, which was insane. But it
          was really nice going there for her to describe and show me different
          things despite the heat.
        </p>

        <p>
          <strong>Nahargarh Fort</strong> &mdash; one of the popular forts where
          a lot of people went. Dadi enjoyed walking around with us, exploring, and
          seeing the animals. I remember going in the AC car &mdash; the Maruti
          Suzuki &mdash; and always making sure we had air conditioning.
        </p>

        <p>
          <strong>Dada&rsquo;s property</strong> &mdash; we visited the plot of
          land that Dada owned. We drove the Maruti Suzuki to the house and saw
          different houses being built. Dadi was walking around with us too.
          Seeing Dada&rsquo;s real estate development work and his incredible work
          ethic up close was really interesting.
        </p>

        <p>
          <strong>Temple visits</strong> &mdash; seeing the different idols and
          statues with Dadi. She would walk me through everything, show me around.
        </p>

        <h3 className="pm-subsection fade-in">The 51st Anniversary</h3>

        <p>
          That trip included Dadi and Dada&rsquo;s 51st wedding anniversary. We
          had everyone sit down and take photos &mdash; such a treasure now. I
          took lots of selfies with Dadi on my first phone from middle school.
          Everyone sitting together, cutting the cake, celebrating them. I remember
          big family meals with around 10 people at the table &mdash; eating chole
          bhature, roti sabji, puri, raita. Always tons of good food throughout
          the whole experience.
        </p>

        <h3 className="pm-subsection fade-in">Eating Mangoes</h3>

        <p>
          One of my favorite memories: sitting at the dining table in the main
          area of the Jaipur home, eating mangoes. Any time of day &mdash; morning
          or evening. Just eating mangoes together. It was fun and sweet. A simple
          thing, but the simplicity is what made it beautiful.
        </p>

        <h3 className="pm-subsection fade-in">The Final Visit &mdash; Early 2025</h3>

        <p>
          We visited India in early 2025 for a little over a week. This was the
          last time I saw her. I didn&rsquo;t know that at the time.
        </p>

        <p>
          Saying goodbye in Jaipur:
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;Achha sero, make sure you live well.&rdquo;
        </blockquote>

        <p>
          We kept WhatsApp calling and video calling after. We always made sure
          they were doing well. Her passing came suddenly and unexpectedly. I&rsquo;m
          grateful I went when I did.
        </p>
      </section>

      {/* ============================================
          AROUND THE TABLE
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Around the Table</h2>
        <p className="pm-section-subtitle">Card Games &amp; Weekend Gatherings</p>

        <h3 className="pm-subsection fade-in">The Games</h3>

        <p>
          Rummy was her favorite &mdash; though she&rsquo;d get a bit annoyed
          sometimes, especially when I made fast moves. We also played Uno and
          various other card games. In Sunnyvale we played as a family when she
          visited. In India, we played with her, Dada, and the other grandkids
          &mdash; bringing all the generations together.
        </p>

        <p>
          She was happy when playing. Sometimes competitive, sometimes annoyed
          in Rummy, but she would laugh and have fun. She would say things like
          &ldquo;Oh, I got it.&rdquo; And her laughter was contagious &mdash;
          everybody loved it when she was really, truly happy. She always laughed
          at different jokes; anybody would make different types of jokes and it
          would lighten up the mood. She was very funny and very sweet.
        </p>

        <blockquote className="pm-quote fade-in">
          Having activities that bridge the generations is very important. This
          was our way of connecting across generational divides, bringing laughter,
          enjoyment, and happiness to everyone.
        </blockquote>

        <h3 className="pm-subsection fade-in">Weekend Gatherings in Sunnyvale</h3>

        <p>
          Since she struggled with the quiet weekdays when everyone was working,
          we made weekends special. Birthday and anniversary celebrations. Trips
          to San Ramon for handoffs between sons&rsquo; houses. Going to Ortega
          Park for walks. Playing cards. Visits with family friends in San Jose,
          Pleasanton, and Fremont.
        </p>

        <p>
          The full house atmosphere &mdash; talking, sharing laughter, memories,
          food, and chai. Everyone coming over. She thrived in this.
        </p>

        <blockquote className="pm-quote fade-in">
          Big family environments when everyone&rsquo;s all together &mdash;
          it&rsquo;s always so much fun. That&rsquo;s always the best. And that
          always happens on the weekends.
        </blockquote>
      </section>

      {/* ============================================
          HER EDUCATION & INTELLIGENCE
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Her Education &amp; Intelligence</h2>

        <p>
          She was extremely proud of her education. She always said, &ldquo;I
          did a BA in Economics,&rdquo; and that she always learned and was very
          smart in math. She wanted to make sure I saw how intelligent she was
          and how much she knew about different subjects.
        </p>

        <p>
          She was excellent at math &mdash; she could teach without even opening
          a book, teaching entirely from memory. She briefly taught children in
          schools, 8th class math &mdash; geometry, algebra, arithmetic. She also
          gave tuition at home, teaching from the table. She had certificates
          saying she taught well, and students&rsquo; mothers still meet with her
          and remember her teaching. That&rsquo;s why our family ended up as
          engineers &mdash; &ldquo;you can blame it on Dadi.&rdquo;
        </p>

        <h3 className="pm-subsection fade-in">The Lifelong Learner</h3>

        <p>
          Throughout her life, in different cities, she took courses to keep
          learning. Cookery and baking in 1981 at Khasa Kothi, Jaipur &mdash; a
          one-month course, alternate days. Food preservation in Udaipur in
          1978 &mdash; making toffee, jelly, jam, candy, squashes, syrups.
          Cutting and tailoring in 1987 &mdash; a six-month course learning to
          cut and sew clothes, blouses, salwar kameez, nightsuits, pants, shirts.
          Music &mdash; tabla and harmonium with an exam from Prayag University.
          Kitchen gardening as a member of the Kitchen Gardeners Association.
          Astrology done with Dada. First aid done in Delhi around 1959 with
          St. John Ambulance. Even teaching a one-month food preservation course
          at a maharaj school.
        </p>

        <p>
          She valued education deeply. This was core to who she was, and she
          instilled that value in her grandchildren. Education and knowledge
          were everything to her &mdash; &ldquo;Aage badho, aage badho&rdquo;
          &mdash; move forward, progress. She wanted us to have a bigger, better
          future.
        </p>
      </section>

      {/* ============================================
          HER SPIRITUAL LIFE
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Her Spiritual Life</h2>
        <p className="pm-section-subtitle">The Sanyas Ashram Stage</p>

        <h3 className="pm-subsection fade-in">Daily Practices</h3>

        <p>
          Every single morning, she would write &ldquo;Jai Shri Krishna&rdquo;
          &mdash; two pages, four malas, 108 times. She filled entire notebooks
          with this practice, both in Sunnyvale and in India. I can picture her
          sitting there writing those pages. She was incredibly disciplined and
          consistent. The notebook is in India now. She would also show me her
          book where she wrote, and say &ldquo;Om Shanti Shanti&rdquo; and
          different shlokas. Seeing all the pages and pages she would write daily
          &mdash; that was remarkable.
        </p>

        <p>
          She read the Gita for knowledge about how to live life, how to
          understand different beings, nature, why things exist. She went to
          temple at 7am daily in Jaipur for arti &mdash; three different artis:
          Shiv ji, Ram-Krishna-Lakshman-Sita-Hanuman-Radha Govind, and Ganesh ji.
          She would do all three, take prasad, then come home. She would also
          attend religious events, listening to Shiv Puran and other teachings.
        </p>

        <h3 className="pm-subsection fade-in">The Four Ashrams</h3>

        <p>
          She spoke about the four ashrams &mdash; stages of life. Bal ashram
          from 0&ndash;25: childhood and student life. Grihasth ashram from
          25&ndash;50: householder life. Vanprasth ashram from 50&ndash;75:
          gradual withdrawal. Sanyas ashram from 75 onward: spiritual focus and
          detachment.
        </p>

        <p>
          At 81, she was in sanyas ashram. This meant cutting ties with worldly
          things, preferring to be alone to focus on spiritual practices, not
          wanting elaborate celebrations, and focusing on devotion. Her spiritual
          devotion kept her rooted and grounded. Her faith allowed her to live
          much longer. These practices were really important parts of living long
          and being grounded and doing your part in the world.
        </p>

        <h3 className="pm-subsection fade-in">Her Beliefs</h3>

        <blockquote className="pm-quote fade-in">
          &ldquo;If you give happiness, you&rsquo;ll receive happiness. If you
          give sorrow, you&rsquo;ll receive sorrow. After death, things come
          back tenfold.&rdquo;
        </blockquote>

        <p>
          Good deeds for good rebirth. Don&rsquo;t create enemies &mdash;
          don&rsquo;t hate anyone. Accept both good and bad without being overly
          happy or sad. And if you see someone&rsquo;s bad behavior, turn away
          and take your own path. Let go.
        </p>
      </section>

      {/* ============================================
          THE CHANGES I WITNESSED
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">The Changes I Witnessed</h2>
        <p className="pm-section-subtitle">2013 &rarr; 2018 &rarr; 2024</p>

        <p>
          Most of my vivid memories are from 2024 when I was an adult. Some
          childhood memories from 2013, and the 2018 India trip when I was in
          middle school. We met in person every two or three years, but the
          changes were noticeable each time.
        </p>

        <p>
          In 2013, she was much younger, more fit and healthy. She could walk
          to Ortega Park and back by herself. Sunnyvale was safe. By 2024, she
          could only do four rounds on Albatross Drive &mdash; the park was too
          far. She became more frail over time, needed more help sitting down and
          getting up, required more assistance from children and grandchildren.
          That change definitely happens as the age increases, but it was still
          hard to witness.
        </p>

        <h3 className="pm-subsection fade-in">Her Adjustment to America</h3>

        <p>
          In India, she could walk herself places, meet other grandparents, go
          to temple, have independence. In the US, she needed someone to drive
          her everywhere, was somewhat stuck at home. In India there were maids
          and helpers; in the US you do everything yourself &mdash; dishes,
          housework, manage your own household. The joint family concept of three
          generations in one household was more Indian. In America it was much
          quieter, especially on weekdays.
        </p>

        <p>
          She had less independence in the US than in India, but she also had
          more pressure in India with all the responsibilities. It was hard all
          around. But she adapted, she endured, and she was always grateful to
          spend time with her family here.
        </p>
      </section>

      {/* ============================================
          HER RELATIONSHIP WITH FAMILY
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Family Bonds</h2>

        <h3 className="pm-subsection fade-in">With Samya</h3>

        <p>
          Dadi&rsquo;s relationship with Samya, my younger cousin, was special
          because Samya was born in Jaipur and lived with Dadi. They grew up
          together &mdash; the grandchild growing up with the grandmother. I
          always made sure to tell Samya: take care of Dadi and make sure she
          always does her best. This made the loss especially hard for Samya.
        </p>

        <h3 className="pm-subsection fade-in">With Me</h3>

        <p>
          I always tried to do my best with Dadi, especially spending time with
          her when she was in the US and always prioritizing time with our
          grandparents. I think these are such important things, and I&rsquo;m
          proud of how I prioritized them. I did really well, and I&rsquo;m proud
          of myself for that.
        </p>

        <h3 className="pm-subsection fade-in">What They Witnessed Together</h3>

        <p>
          Dadi and Dada saw so much in their lifetime &mdash; World War II,
          Partition, tumultuous events, but also the growth of their children
          moving to the US, grandchildren going to college in America, India
          growing from a developing country into something much more developed.
          She was really proud of India, how it started with independence from
          British rule and grew into a nation where people could have bigger,
          better lives. They witnessed all of it.
        </p>
      </section>

      {/* ============================================
          VALUES & LESSONS
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Values &amp; Lessons She Taught</h2>

        <h3 className="pm-subsection fade-in">About Food &amp; Resources</h3>

        <p>
          Never steal &mdash; even if you find something, don&rsquo;t take it.
          Share everything &mdash; if you get grapes, divide them among everyone.
          Never waste food &mdash; respect every grain because of the farmers&rsquo;
          work.
        </p>

        <h3 className="pm-subsection fade-in">About Education</h3>

        <blockquote className="pm-quote fade-in">
          &ldquo;Aage badho, aage badho.&rdquo; &mdash; Move forward, progress.
        </blockquote>

        <p>
          Her emphasis on education came from her own struggles &mdash; she had
          to fight her family to continue studying. She wanted us to have a bigger,
          better future. Education and knowledge were incredibly valuable to her.
        </p>

        <h3 className="pm-subsection fade-in">About Work &amp; Service</h3>

        <p>
          Put 100% into everything you do. Do your work with your own hands &mdash;
          washing dishes and doing housework kept her healthy. Her goal was always
          to help her children and grandchildren progress. She emphasized: how to
          raise the standard of living, how to develop the house full of
          facilities.
        </p>

        <h3 className="pm-subsection fade-in">About Respect</h3>

        <p>
          Always listen to and respect your elders. What elders say, they&rsquo;ve
          thought through carefully. Don&rsquo;t hurt anyone with your tongue or
          words. Mutual respect is essential.
        </p>

        <h3 className="pm-subsection fade-in">About Independence</h3>

        <p>
          She didn&rsquo;t want anyone&rsquo;s service. Didn&rsquo;t want to be
          a burden to her children. Wanted to stay self-sufficient as long as
          possible. She saw housework as keeping her physically and mentally
          healthy. Even when people tried to help, she wouldn&rsquo;t allow it.
        </p>
      </section>

      {/* ============================================
          WHAT I CARRY FORWARD
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">What I Carry Forward</h2>

        <p>
          <strong>Never waste food</strong> &mdash; remembering her teaching about
          every grain of rice, every drop of dal, and how food comes from farmers
          to the table.
        </p>

        <p>
          <strong>Share with others</strong> &mdash; food and resources are meant
          to be shared. If you get something, divide it among everyone.
        </p>

        <p>
          <strong>Put family first</strong> &mdash; prioritizing family
          relationships, because I saw her make rotis for everyone until the end.
        </p>

        <p>
          <strong>Honor her sacrifices</strong> &mdash; recognizing what she gave
          up for the family&rsquo;s success. Her sacrifices weren&rsquo;t done in
          vain. Kids and grandchildren have done much more and gone ahead in
          life. Everyone is successful. I want to make sure this is always honored
          and never lost.
        </p>

        <p>
          <strong>The spiritual practices</strong> &mdash; understanding the four
          life stages she taught about, the discipline of writing pages of
          &ldquo;Jai Shri Krishna&rdquo; every morning, the faith that kept her
          rooted.
        </p>

        <p>
          <strong>Education above all</strong> &mdash; because she fought for
          hers, and then she fought for ours. The value of knowledge is something
          she instilled within her grandchildren like me, and it shaped every
          opportunity I&rsquo;ve had.
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;Being the best grandkid is just wanting to know about the best
          of our grandparents and really capture all their memories and all their
          life&rsquo;s work.&rdquo;
        </blockquote>

        <p>
          I actively lived this. Through the interview I conducted three years ago.
          Through the videos I recorded. Through walking her through my schools.
          Through making time during that summer of 2024. Through being present
          with her. Through building this site.
        </p>

        <p>
          I want to remember how she did so much in India. How she managed an
          entire household. How she filled notebooks with devotion. How she rolled
          rotis for everyone and ate last and washed the dishes herself and never
          complained. How she fought for her education in an era that didn&rsquo;t
          want women to have one. How she loved parrots and sky blue and mangoes
          and the sound of a full house. How she walked four rounds on Albatross
          Drive because she would not sit still.
        </p>
      </section>

      {/* ============================================
          CLOSING
          ============================================ */}
      <section className="pm-section pm-closing fade-in">
        <p>
          She didn&rsquo;t say &ldquo;I love you.&rdquo; She made rotis. She
          walked to temple at 7am. She wrote &ldquo;Jai Shri Krishna&rdquo; 108
          times every morning. She ate last. She served first. She fought for her
          education and then fought for ours. She tended her garden and knitted
          sweaters and rolled dough on the ground and never wasted a single grain
          of rice. She smelled of jasmine. She wore sky blue. She loved parrots.
        </p>

        <p>
          That was her love &mdash; in every action, every sacrifice, every meal
          she served, every page she filled. Not in words, but in a lifetime of
          showing up.
        </p>

        <p className="pm-closing-sign">
          &mdash; Manan
        </p>

        <div className="pm-closing-om fade-in">
          <p>&#2384; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367; &ensp; &#2358;&#2366;&#2344;&#2381;&#2340;&#2367;</p>
        </div>

        <Link to="/" className="pm-back-link fade-in">
          &larr; Back to Memorial
        </Link>
      </section>
    </div>
  );
}

export default PersonalMemories;
