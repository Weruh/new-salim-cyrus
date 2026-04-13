const navItems = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'skills', href: '/skills' },
  { label: 'about me', href: '/about' },
  { label: 'contact', href: '/contact' }
];

const storyParagraphs = [
  'The first time I guided someone through a tough pivot, I felt the same calm curiosity that I now bring to every session. Coaching has never been about quick fixes for me it has always been about creating rituals that honor our full humanity, noticing the stories we repeat, and designing practical systems that keep people anchored through change.',
  'I studied psychology and later immersed myself in embodiment practices because I wanted a framework that honored both heart and strategy. Along the way I led workshops for restless executives and weary parents, and it became clear: the work that lights me up is helping good people rebuild trust with themselves, not because they are broken but because they are stretched thin.',
  'Today I blend deep listening, structured accountability, and creative experiments so my clients can feel both seen and empowered. Whether the goal is a career shift, a reset after burnout, or crafting a life that feels meaningful again, I help people step into decisions with grounded confidence and long-term momentum.'
];

const focusPoints = [
  {
    title: 'Rooted in real life',
    description:
      'Every dialogue I craft is grounded in the messy weekdays my clients actually live in, so the actions we design move with calendars, families, and boardrooms—not around them.'
  },
  {
    title: 'Built for clarity',
    description:
      'Sessions blend spacious reflection with practical experiments, creating a steady rhythm that keeps you honest about the next right action even when the world shifts.'
  },
  {
    title: 'Guided by wisdom + data',
    description:
      'I pair embodied listening with simple frameworks so you trust your intuition while still proving progress with tangible, measurable results.'
  }
];

const activeItem = 'about me';

const About = () => (
  <main className="min-h-screen bg-white text-slate-900">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:py-16">
      <div className="rounded-[24px] bg-[#ffffff] p-6 shadow-[0_35px_60px_rgba(17,17,17,0.12)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_auto]">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
            <div className="relative flex items-center justify-center overflow-hidden rounded-[18px] border border-slate-200 bg-white/70 p-4 shadow-[0_25px_40px_rgba(17,17,17,0.08)]">
              <span className="absolute inset-y-6 left-[35%] w-px bg-slate-200/70" />
              <img
                src="/assets/optimized/images/salim aboutme.webp"
                alt="Salim Cyrus portrait"
                width={900}
                height={900}
                className="h-[520px] max-w-full rounded-[18px] object-cover shadow-[0_20px_45px_rgba(15,15,15,0.25)]"
                loading="eager"
              />
            </div>
            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.5em] text-slate-500">story</p>
                <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                  My story<span className="text-[#de1d1a]">.</span>
                </h1>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                {storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-10 rounded-[24px] border border-slate-200 bg-white/90 px-5 py-8 shadow-[0_25px_45px_rgba(15,15,15,0.08)] md:mt-12 md:px-6 md:py-10 lg:px-8">
        <div className="grid divide-y divide-slate-200/70 text-slate-700 md:grid-cols-3 md:divide-x md:divide-y-0">
          {focusPoints.map((point) => (
            <div key={point.title} className="space-y-3 px-0 py-6 first:border-t-0 md:px-6 md:py-8">
              <h3 className="text-xl font-semibold text-slate-900">{point.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12 rounded-[24px] border border-slate-200 bg-white/90 px-5 py-8 shadow-[0_25px_45px_rgba(15,15,15,0.08)] md:px-6 md:py-10 lg:px-8">
        <div className="space-y-4 text-slate-700">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.5em] text-slate-500">moments</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Behind the coaching chair
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 md:max-w-2xl">
            A few frames that capture the calm, confident presence I bring into every session—real, focused, and grounded.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              src: '/assets/optimized/images/salim4.webp',
              alt: 'Salim Cyrus seated in a contemplative pose'
            },
            { src: '/assets/optimized/images/salim 12.webp', alt: 'Salim Cyrus looking into the distance' },
            { src: '/assets/optimized/images/salim 11.webp', alt: 'Salim Cyrus with arms folded' }
          ].map((photo) => (
            <div
              key={photo.alt}
              className="group relative overflow-hidden rounded-[14px] border border-slate-200 bg-slate-50"
            >
              <div className="relative h-72 w-full md:h-[420px]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Salim Cyrus</p>
                <p className="text-xs text-slate-500/80">Focused presence · intentional decisions</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default About;
