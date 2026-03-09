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
        <span className="pm-nav-title">Grandkids&rsquo; Memories with Dadi</span>
      </nav>

      {/* Hero */}
      <header className="pm-hero">
        <h1 className="pm-heading fade-in">Grandkids&rsquo; Memories with Dadi</h1>
        <p className="pm-heading-hindi fade-in">दादी के साथ पोते-पोतियों की यादें</p>
        <p className="pm-intro fade-in">
          These are personal memories &mdash; moments we lived, things we witnessed,
          feelings we carry. Not a biography but letters from grandchildren to the
          woman who shaped us through rotis, silence, and unwavering presence.
        </p>
      </header>

      {/* ============================================
          HER PRESENCE & ESSENCE
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Her Presence</h2>
        <p className="pm-section-subtitle">How We Remember Her</p>

        <p>
          Sky blue was her favorite color &mdash; the color of the sky. She wore
          it often throughout her life, in different celebrations and events. Looking
          through photos over the years &mdash; the 2018 Jaipur visit, at home, at
          celebrations &mdash; she wore that beautiful sky blue in so many situations
          and scenarios. She also loved wearing flowers in her sari. That&rsquo;s how
          we picture her. The photo we used for her memorial website shows her in sky
          blue with flowers &mdash; that&rsquo;s exactly who she was.
        </p>

        <p>
          Her hands were soft but experienced &mdash; hands that had rolled thousands
          of rotis, washed dishes, and done housework throughout her entire lifetime.
          She smelled of jasmine or rose &mdash; the scent we associate with India
          itself. Her voice is preserved in the video recordings we have of her,
          and we&rsquo;re grateful for that.
        </p>

        <p>
          As she aged, her walk changed to more of a waddle, using a cane. We
          remember the sound of her footsteps, the way she moved through spaces.
          But her spirit never slowed. She put 100% effort into everything she
          did &mdash; this wasn&rsquo;t just about being a grandmother. She was a
          woman who fought hard to continue her education when it wasn&rsquo;t
          encouraged, who juggled an MA and B.Ed after marriage and children.
        </p>
      </section>

      {/* ============================================
          SENSORY MEMORIES
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Sensory Memories</h2>
        <p className="pm-section-subtitle">The Sights, Sounds &amp; Scents of Dadi</p>

        <div className="pm-sensory-grid fade-in">
          <div className="pm-sensory-card">
            <span className="pm-sensory-label">Scent</span>
            <p>Jasmine or rose &mdash; the fragrance we associate with India itself. It lingered wherever she sat, wherever she prayed.</p>
          </div>
          <div className="pm-sensory-card">
            <span className="pm-sensory-label">Hands</span>
            <p>Soft but experienced. Hands that rolled thousands of rotis on the belen, washed dishes after every meal, and knitted sweaters for grandchildren.</p>
          </div>
          <div className="pm-sensory-card">
            <span className="pm-sensory-label">Color</span>
            <p>Sky blue &mdash; like the sky. Her saris with flowers. That&rsquo;s how we picture her across every photo, every celebration, every memory.</p>
          </div>
          <div className="pm-sensory-card">
            <span className="pm-sensory-label">Sound</span>
            <p>Her footsteps &mdash; later with a cane, a gentle waddle. Her contagious laughter that filled the room. Her voice saying &ldquo;Oh, I got it!&rdquo; during card games.</p>
          </div>
          <div className="pm-sensory-card">
            <span className="pm-sensory-label">Taste</span>
            <p>Roti sabji, fresh off the tawa. Shakar bare saak. Morning namkeen and nashta, full of spices. Mangoes at the dining table, any time of day.</p>
          </div>
          <div className="pm-sensory-card">
            <span className="pm-sensory-label">Sight</span>
            <p>Parrots in the Jaipur garage, loved for their multicolored beauty. Plants growing in the front yard. Pages and pages of &ldquo;Jai Shri Krishna&rdquo; in her notebook.</p>
          </div>
        </div>
      </section>

      {/* ============================================
          LOVE THROUGH ACTION
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Love Through Action</h2>
        <p className="pm-section-subtitle">She Never Said It &mdash; She Showed It</p>

        <p>
          Dadi was not a hugger. She didn&rsquo;t say &ldquo;I love you&rdquo;
          frequently. Everything was shown through actions &mdash; she expressed
          care through serving rotis, making food, and constant service. She was
          determined and sometimes fierce. That was part of her nature and personality.
        </p>

        <blockquote className="pm-quote fade-in">
          She would make rotis throughout the entire meal, continuously serving
          everyone at the table. The rotis would keep on coming from her. She&rsquo;d
          eat last &mdash; sometimes after everyone had finished. Then she would do
          the dishes after everyone got up.
        </blockquote>

        <p>
          When we offered to help, she said how important it was for her to do the
          work &mdash; to use her hands and feet, to wash dishes, to keep herself
          healthy through motion and housework. She never had anyone fully helping
          her until she could not do it herself. Even if anyone tried to help, she
          wouldn&rsquo;t allow it. She wanted to stay self-sufficient and never be
          a burden.
        </p>

        <p>
          She would get angry if something was out of place or not done properly.
          She was strict about order. But she was surprisingly lenient and playful
          about playing cards and anything relating to the grandkids &mdash; making
          time for us was always important to her.
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
          Roti sabji &mdash; the main dish, made again and again. We can picture
          her hands rolling rotis on the belen, even sitting on the ground in
          Jaipur. Saak, like shakar bare, was her favorite thing to make. And the
          namkeen and nashta &mdash; morning snacks that smelled really yummy,
          always full of spices and different aromas. Everything was very, very
          delicious.
        </p>

        <p>
          She was always composed in the kitchen. She knew how to move around,
          parallel process, manage multiple things at once. We would stand by her
          and just watch her work. There was a quiet confidence in how she handled
          everything.
        </p>

        <h3 className="pm-subsection fade-in">Meal Rituals</h3>

        <p>
          Sitting together was very important to her &mdash; everyone eating
          together as a family. During chai time, there would be different snacks,
          bohre, nashta from the Indian market. The rhythm of family meals was
          everyone sitting together with the different bowls of food in the middle,
          serving ourselves, while she kept rolling rotis. They would keep on
          coming from her.
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
          MANGOES, CHAI & CELEBRATIONS
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Mangoes, Chai &amp; Celebrations</h2>
        <p className="pm-section-subtitle">The Flavors of Being Together</p>

        <h3 className="pm-subsection fade-in">Eating Mangoes</h3>

        <p>
          One of our favorite memories: sitting at the dining table in the main
          area of the Jaipur home, eating mangoes. Any time of day &mdash; morning
          or evening. Just eating mangoes together. It was fun and sweet. A simple
          thing, but the simplicity is what made it beautiful.
        </p>

        <h3 className="pm-subsection fade-in">Chai Time</h3>

        <p>
          At chai time, there would always be different snacks &mdash; bohre,
          namkeens from the Indian store or the market. We would all sit together
          always. That was very important to her. For everyone to sit and eat
          together. Whether it was a workday or weekend, chai time was sacred.
        </p>

        <h3 className="pm-subsection fade-in">The 51st Anniversary</h3>

        <p>
          During the 2018 India trip, we celebrated Dadi and Dada&rsquo;s 51st
          wedding anniversary. Everyone sat down for photos &mdash; such a treasure
          now. Selfies on the first phone from middle school. Everyone sitting
          together, cutting the cake, celebrating them. Big family meals with around
          10 people at the table &mdash; eating chole bhature, roti sabji, puri,
          raita. Always tons of good food throughout the whole experience.
        </p>

        <h3 className="pm-subsection fade-in">Birthdays Across Countries</h3>

        <p>
          Dadi was there for the 21st birthday celebration &mdash; both sides of
          the family coming together in San Ramon and Sunnyvale. Birthdays were
          also celebrated in Jaipur, where Dadi and Dada would put on a big
          celebration just to bring all the family together. Whether in India or
          America, the gatherings always had the same warmth.
        </p>
      </section>

      {/* ============================================
          CARD GAMES ACROSS GENERATIONS
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Around the Table</h2>
        <p className="pm-section-subtitle">Card Games &amp; Weekend Gatherings</p>

        <h3 className="pm-subsection fade-in">The Games</h3>

        <p>
          Rummy was her favorite &mdash; though she&rsquo;d get a bit annoyed
          sometimes, especially when someone made fast moves. We also played Uno and
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
          THE SUMMER OF 2024
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">The Summer of 2024</h2>
        <p className="pm-section-subtitle">Three Precious Months in Sunnyvale</p>

        <p>
          From May through late July, Dadi stayed with us in Sunnyvale. She
          arrived before college semester finished, and after it ended summer work
          started. Even while working, there was a precious window every
          day &mdash; 5pm to 8:30pm, after work and before she went to bed. Every
          minute counted.
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;I won&rsquo;t need to be living with regret.&rdquo; &mdash;
          Consciously making time for her, carving out evenings and weekends even
          while working that summer. This is something we will cherish forever.
        </blockquote>

        <h3 className="pm-subsection fade-in">Google Maps on the Projector</h3>

        <p>
          In the garage, Google Maps went up on the projector and she traveled
          the world &mdash; street by street, city by city. She watched with wide
          eyes and amazement.
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;I can&rsquo;t believe from here we can travel the world from
          sitting at home.&rdquo;
        </blockquote>

        <p>
          That captured something really special about bridging generations with
          technology. She always needed help with her phone &mdash; learning how
          to dial and end calls when she was in the US. But seeing the world
          through a projector on the garage wall? That amazed her.
        </p>

        <h3 className="pm-subsection fade-in">Michael&rsquo;s &amp; Knitting</h3>

        <p>
          A trip to Michael&rsquo;s to get yarn for knitting projects. It was
          wonderful for her to see all the arts and crafts and be able to do
          creative work that wasn&rsquo;t a priority in Jaipur. She got to try
          knitting and making new things during her time here. She knitted a
          sweater for Samya &mdash; her hands still steady, still creating after
          all those years.
        </p>

        <h3 className="pm-subsection fade-in">Walking Through My Education</h3>

        <p>
          Every stage of the educational journey was shared with her.
          At <strong>elementary school</strong> &mdash; the classrooms, the
          playground, the different things learned with English, science, math,
          and the book fairs. <strong>Middle school</strong>, shown from the
          outside &mdash; the building and how different subjects were studied
          there.
        </p>

        <p>
          At <strong>high school</strong>, we actually got to go inside the campus.
          The robotics room, the Olympic pool where swimming happened for so many
          years, the large gymnasium, the amphitheater where friends used to hang
          out. All of these different memories came together.
        </p>

        <p>
          <strong>UC Berkeley</strong> got the deepest tour. Midterm exams and
          professors, the different clubs and activities, dorms, the food and
          meal culture, all the different aspects of Berkeley. The view and the
          sunset and how beautiful the campus was. It was wonderful to take the
          time to reflect and share all the different aspects of that four-year
          experience.
        </p>

        <p>
          Her reaction was pure pride. She was really happy and smiled seeing the
          college campus and the pool and everything. It was incredibly meaningful
          given her own struggles for education.
        </p>

        <h3 className="pm-subsection fade-in">The Full Circle</h3>

        <blockquote className="pm-quote fade-in">
          In India, she had walked us through all her certificates &mdash; her BA
          in Economics, her cookery and baking certificates. There is even video of
          her showing them. She always said, &ldquo;I did a BA in
          Economics,&rdquo; and that she was very smart in math. She wanted us to
          see how intelligent she was, how much she knew about different subjects.
          Then we walked her through the campuses. Both of us sharing our educational
          journeys with each other.
        </blockquote>

        <p>
          She fought so hard for education, gave up her career dreams for the
          family&rsquo;s education, and then her grandchildren walked her through
          every stage of their educational journey. That full circle &mdash; from
          her certificates in Jaipur to campuses in California &mdash; might be
          the moment we treasure most.
        </p>

        <h3 className="pm-subsection fade-in">Pinecrest Lake</h3>

        <p>
          Around July 4th, the whole family went to Pinecrest Lake. There was a
          drone show. Afterwards, everyone was in the patio area, stargazing.
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
          going back and forth on Albatross Drive, outside the house, just within
          the neighborhood &mdash; going to Ortega was too far now. But she still
          walked, every evening, insisting on her independence.
        </p>

        <h3 className="pm-subsection fade-in">The 21st Birthday</h3>

        <p>
          She kept saying she wanted to go back to India &mdash; &ldquo;I want to
          go back to India soon, as soon as possible. When can someone come with
          me?&rdquo; The family convinced her to stay at least until the birthday,
          because it was a big moment to have a grandmother there for that
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
          was hard because we didn&rsquo;t know if we&rsquo;d see her again. You
          want to always spend more time and you only have so many days.
        </p>

        <p>
          But we did see her again &mdash; the family went to India in early 2025.
        </p>
      </section>

      {/* ============================================
          PARROTS, GARDENS & THE OUTDOORS
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Parrots, Gardens &amp; the Outdoors</h2>
        <p className="pm-section-subtitle">She Was Always Outside, Always Growing Something</p>

        <p>
          Her favorite animal was the parrot &mdash; she loved their multicolored
          beauty, though it was hard seeing them in cages. We got two parrots in
          the Jaipur garage over the past few years, and she loved watching them.
          She loved the colors.
        </p>

        <p>
          There was always something growing in the front yard in Jaipur. She was
          a member of the Kitchen Gardeners Association and would tend to her
          garden. Even outside the kitchen, she was always nurturing something
          &mdash; growing, tending, making things bloom.
        </p>

        <p>
          Walking was essential to her. The five-minute walk to temple in Jaipur,
          walking slowly while we kept up with her pace. Walks to Ortega Park in
          Sunnyvale when she was younger. Four rounds on Albatross Drive when the
          park became too far. She would not sit still &mdash; being outdoors and
          moving was part of who she was.
        </p>

        <p>
          At Nahargarh Fort during the 2018 trip, she enjoyed walking around,
          exploring, seeing the animals. At Jantar Mantar, despite the 110-degree
          heat, she walked and described and showed different things. At
          Dada&rsquo;s property, she walked through the grass with us. Being
          outside, moving &mdash; that was her element.
        </p>
      </section>

      {/* ============================================
          TWO WORLDS: INDIA VS. AMERICA
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Two Worlds</h2>
        <p className="pm-section-subtitle">India &amp; America &mdash; Two Different Lives</p>

        <h3 className="pm-subsection fade-in">In India</h3>

        <p>
          Independence. Community. Walking to the temple by herself at 7am. Meeting
          other grandparents. Maids to help with the household. The joint family
          structure of three generations under one roof. Constant company, constant
          noise, constant life. But also: the weight of managing the entire
          multi-generational household, the responsibilities that were always on
          her shoulders, the pressure that never let up.
        </p>

        <h3 className="pm-subsection fade-in">In America</h3>

        <p>
          Quiet weekdays when everyone was working. Needing someone to drive her
          anywhere. No other grandparents to meet. No temple walks alone. The
          nuclear family structure &mdash; doing your own dishes, your own
          housework, managing everything yourself. It was an adjustment for someone
          so social, so used to being surrounded by people.
        </p>

        <p>
          But also: Google Maps on the projector that amazed her. The sunsets and
          stars at Pinecrest Lake. Michael&rsquo;s craft store. Walking through
          grandchildren&rsquo;s schools and college campuses. Weekends filled with
          visiting family friends from San Jose, Pleasanton, and Fremont. The full
          house atmosphere she thrived in.
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;I can&rsquo;t believe from here we can travel the world from
          sitting at home.&rdquo; &mdash; Her wonder at technology bridged the
          two worlds. She marveled at what was possible while missing what was
          familiar.
        </blockquote>

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
          her pace. The street was full of cars. At the temple, she would show us
          around the different idols. Then we would sit down, and she would do her
          puja and prayers during arti. We would sit and watch and listen. Sometimes
          we walked in comfortable silence. Sometimes asking her about different
          things.
        </p>

        <blockquote className="pm-quote fade-in">
          Just always being interested in learning about our grandparents is the
          most important thing we can do.
        </blockquote>

        <h3 className="pm-subsection fade-in">The 2018 India Trip</h3>

        <p>
          <strong>Jantar Mantar</strong> &mdash; the old clock tower area. It was
          super hot, like 110 degrees. But it was really nice going there for her
          to describe and show different things despite the heat.
        </p>

        <p>
          <strong>Nahargarh Fort</strong> &mdash; one of the popular forts. Dadi
          enjoyed walking around with us, exploring, and seeing the animals.
          Always in the AC car &mdash; the Maruti Suzuki &mdash; making sure we
          had air conditioning.
        </p>

        <p>
          <strong>Dada&rsquo;s property</strong> &mdash; driving the Maruti Suzuki
          to see the plot of land and the houses being built. Dadi walking around
          with us through the grass. Seeing Dada&rsquo;s real estate development
          work and his incredible work ethic up close.
        </p>

        <h3 className="pm-subsection fade-in">The Final Visit &mdash; Early 2025</h3>

        <p>
          The family visited India in early 2025 for a little over a week. This was
          the last time we saw her. We didn&rsquo;t know that at the time.
        </p>

        <p>
          Saying goodbye in Jaipur:
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;Achha sero, make sure you live well.&rdquo;
        </blockquote>

        <p>
          We kept WhatsApp calling and video calling after. Always making sure
          they were doing well. Her passing came suddenly and unexpectedly.
          We&rsquo;re grateful we went when we did.
        </p>
      </section>

      {/* ============================================
          THE CHANGES I WITNESSED
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">The Changes We Witnessed</h2>
        <p className="pm-section-subtitle">2013 &rarr; 2018 &rarr; 2024</p>

        <p>
          Most vivid memories are from 2024, as adults. Some childhood memories
          from 2013, and the 2018 India trip. We met in person every two or three
          years, but the changes were noticeable each time.
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
      </section>

      {/* ============================================
          HER EDUCATION & INTELLIGENCE
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Her Education &amp; Intelligence</h2>

        <p>
          She was extremely proud of her education. She always said, &ldquo;I
          did a BA in Economics,&rdquo; and that she always learned and was very
          smart in math. She wanted to make sure we saw how intelligent she was
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
          learning. Cookery and baking in 1981 at Khasa Kothi, Jaipur. Food
          preservation in Udaipur in 1978 &mdash; making toffee, jelly, jam,
          candy, squashes, syrups. Cutting and tailoring in 1987. Music &mdash;
          tabla and harmonium with an exam from Prayag University. Kitchen
          gardening as a member of the Kitchen Gardeners Association. Astrology
          done with Dada. First aid in Delhi around 1959 with St. John Ambulance.
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
          with this practice, both in Sunnyvale and in India. We can picture her
          sitting there writing those pages. She was incredibly disciplined and
          consistent. The notebook is in India now. She would also show her book
          where she wrote, and say &ldquo;Om Shanti Shanti&rdquo; and different
          shlokas. Seeing all the pages and pages she would write daily &mdash;
          that was remarkable.
        </p>

        <p>
          She read the Gita for knowledge about how to live life, how to
          understand different beings, nature, why things exist. She went to
          temple at 7am daily in Jaipur for arti &mdash; three different artis:
          Shiv ji, Ram-Krishna-Lakshman-Sita-Hanuman-Radha Govind, and Ganesh ji.
          She would do all three, take prasad, then come home.
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
          much longer.
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
          FAMILY BONDS
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">Family Bonds</h2>

        <h3 className="pm-subsection fade-in">With Samya</h3>

        <p>
          Dadi&rsquo;s relationship with Samya, the youngest cousin, was special
          because Samya was born in Jaipur and lived with Dadi. They grew up
          together &mdash; the grandchild growing up with the grandmother. The
          loss was especially hard for Samya, who had Dadi as part of daily life
          from the very beginning.
        </p>

        <h3 className="pm-subsection fade-in">With Manan</h3>

        <p>
          Always trying to do the best with Dadi, especially spending time with
          her when she was in the US and always prioritizing time with grandparents.
          Proud of how those moments were prioritized &mdash; from the three-month
          summer of 2024 to the school tours to the evening card games.
        </p>

        <h3 className="pm-subsection fade-in">The People Person</h3>

        <p>
          She was a very much people-focused person, always used to having people
          around. She thrived in big family environments and struggled with the
          quietness of weekdays in Sunnyvale when everyone was working. In India,
          there was constant company &mdash; the joint family structure of three
          generations. She needed the noise, the fullness, the life of a house
          overflowing with people.
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
          to help her children and grandchildren progress.
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
          WHAT WE CARRY FORWARD
          ============================================ */}
      <section className="pm-section fade-in">
        <h2 className="pm-section-title">What We Carry Forward</h2>

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
          relationships, because we saw her make rotis for everyone until the end.
        </p>

        <p>
          <strong>Honor her sacrifices</strong> &mdash; recognizing what she gave
          up for the family&rsquo;s success. Her sacrifices weren&rsquo;t done in
          vain. Kids and grandchildren have done much more and gone ahead in
          life. Everyone is successful. We want to make sure this is always honored
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
          she instilled within her grandchildren, and it shaped every opportunity
          we&rsquo;ve had.
        </p>

        <blockquote className="pm-quote fade-in">
          &ldquo;Being the best grandkid is just wanting to know about the best
          of our grandparents and really capture all their memories and all their
          life&rsquo;s work.&rdquo;
        </blockquote>

        <p>
          We actively lived this. Through the interview conducted three years ago.
          Through the videos recorded. Through walking her through schools.
          Through making time during that summer of 2024. Through being present
          with her. Through building this site.
        </p>

        <p>
          We want to remember how she did so much in India. How she managed an
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
          &mdash; Her Grandchildren
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
