import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { brandConfig } from '../lib/config';

const resetFramework = [
  { title: 'Diagnose', text: 'Uncover the pattern.' },
  { title: 'Clarify', text: 'Remove emotional fog.' },
  { title: 'Build', text: 'Install structure that holds.' },
  { title: 'Execute', text: 'Accountability and follow-through.' }
];

const alignmentPainPoints = [
  'You’re productive but restless',
  'You delay hard decisions',
  'You feel responsible for everyone',
  'You avoid your own needs',
  'You say “I’m fine.”',
  'You suppress deeper questions',
  'You postpone clarity'
];

const coachingPreview = [
  {
    title: 'Starter Session (30 min)',
    text: 'Fast clarity on one issue.',
    meta: 'Quick 30-minute session',
    image: '/assets/optimized/images/starter session.webp'
  },
  {
    title: 'Clarity Session (60 min)',
    text: 'One issue. One direction.',
    meta: 'Book a single session',
    image: '/assets/optimized/images/clarity session.webp'
  },
  {
    title: 'Deep Reset Session (120 min)',
    text: 'Pattern diagnosis + practical blueprint.',
    meta: 'Double the time for depth',
    image: '/assets/optimized/images/deep reset.webp'
  },
  {
    title: 'Private Coaching (4–8 weeks)',
    text: 'Structure rebuild + accountability.',
    meta: 'Bespoke rhythm + follow-through',
    image: '/assets/optimized/images/private coaching.webp'
  }
];

const programHighlights = [
  {
    title: 'Identity Reformation Program',
    text: 'Break false identities and align purpose with execution.',
    meta: '8-12 weeks',
    tag: 'Flagship',
    image: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.47 (1).jpeg',
    applyLink: 'https://paystack.shop/pay/jgbl6hhq7v'
  },
  {
    title: 'Kingdom Mentality Masterclass',
    text: 'Spiritual intelligence plus real-life systems.',
    meta: 'Monthly membership',
    tag: 'Subscription',
    image: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.47.jpeg',
    applyLink: 'https://paystack.shop/pay/p2j14f4bbo'
  },
  {
    title: 'Defining Manhood Bootcamp',
    text: 'Discipline, leadership, and accountability for men.',
    meta: 'Men only',
    tag: 'Bootcamp',
    image: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.50.jpeg',
    applyLink: 'https://paystack.shop/pay/997xi94hc4'
  },
  {
    title: 'Relationship Intelligence',
    text: 'Compatibility, communication, and pre-marital clarity.',
    meta: 'Cohort or private',
    tag: 'Relationships',
    image: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.48 (3).jpeg',
    applyLink: 'https://paystack.shop/pay/6v8heotsk5'
  }
];

const coachingCardClasses =
  'group flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[color:var(--border)] transition duration-300 ease-out hover:-translate-y-1';

const bookCardClasses =
  'group mx-auto flex w-full max-w-[320px] flex-col gap-5 !rounded-none !p-0 shadow-[0_25px_60px_rgba(13,13,13,0.12)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:shadow-[0_35px_70px_rgba(36,12,64,0.18)]';

const books = [
  {
    title: 'Concealed Redemption',
    cover: '/assets/optimized/books/concealed redemption.webp',
    price: 'KES 1,499',
    buyLink: 'https://paystack.com/buy/concealed-redemption-wimdwx',
    description:
      'A pocket manual for catching the narrative you keep replaying so you can stop reliving the same stress and build a new pattern with small, sustainable rituals.'
  },
  {
    title: 'The Great Deception',
    cover: '/assets/optimized/books/the great deception.webp',
    price: 'KES 1,499',
    buyLink: 'https://paystack.com/buy/the-great-deception-rnjacy',
    description:
      'A brutal accounting of how the stories you tell yourself keep stealing your focus, and how to reclaim the narrative with accountability and clarity.'
  },
  {
    title: 'Ritual Scorecard',
    cover: '/assets/optimized/books/collection.webp',
    price: 'KES 3,000',
    description:
      'A structured companion that keeps your weeks honest, pairing micro-checks with intention so the decisions that matter never slip away.'
  }
];

const Home = () => (
  <>
    <PageHero
      title="Reset Your Life With Precision."
      subtitle="Private coaching for men and women who are tired of drifting and ready for structure."
      imageSrc="/assets/optimized/images/salim-4k.webp"
      imageAlt="Salim Cyrus"
      trustLine="Structured. Private. Results-driven."
      ctaWrapperClassName="pt-0"
      ctas={[
        { label: 'Book A Session', href: brandConfig.bookLink },
        { label: 'WhatsApp', href: brandConfig.whatsappLink, variant: 'secondary' }
      ]}
    />

    <Section className="bg-[color:var(--bg)]">
      <div className="border border-[color:var(--border)] bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] items-center">
          <div className="relative h-[560px] overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-[0_20px_35px_rgba(15,15,15,0.12)]">
            <img
              src="/assets/optimized/images/salim frame.webp"
              alt="Salim Cyrus in a blue suit"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-xs uppercase tracking-[0.5em] text-[color:var(--muted)]">Alignment Work</p>
            <div className="space-y-5">
              <h2 className="text-4xl font-semibold leading-tight text-[color:var(--text)] md:text-5xl">
                You Don’t Need Motivation. You Need Alignment.
              </h2>
              <p className="text-lg leading-relaxed text-[color:var(--muted)]">
                If your inner voice is noisy, we diagnose the drift and replace it with structure so that decisions become automatic instead of draining.
              </p>
            </div>
            <div className="grid gap-3 text-sm font-medium text-[color:var(--text)] sm:grid-cols-2">
              {alignmentPainPoints.map((point) => (
                <div
                  key={point}
                  className="group flex items-start gap-3 border border-[color:var(--border)] bg-[color:var(--bg)] p-3 transition duration-200 ease-out hover:border-[color:var(--brand)] hover:bg-white hover:shadow-[0_15px_40px_rgba(36,12,64,0.12)] hover:-translate-y-0.5"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand)]" aria-hidden />
                  <span className="text-[color:var(--muted)]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold">The Reset Framework</h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Four clear, sequential commitments to move past noise and into action.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {resetFramework.map((item) => (
            <Card key={item.title} title={item.title} className="text-[color:var(--text)]">
              <p className="text-sm text-[color:var(--muted)]">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold">Ways To Work With Salim</h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Choose the container that matches your horizon.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coachingPreview.slice(0, 3).map((item) => (
            <div key={item.title} className={coachingCardClasses}>
              <div className="relative h-[245px] overflow-hidden rounded-t-[14px] md:h-[290px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1 text-white">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">{item.meta}</p>
                  <p className="text-2xl font-semibold leading-tight">{item.title}</p>
                </div>
              </div>
              <div className="space-y-3 px-6 pb-6 pt-4">
                <p className="text-sm text-[color:var(--muted)]">{item.text}</p>
                <Link to="/coaching" className="text-sm font-semibold text-[color:var(--brand)]">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="bg-[color:var(--bg)]">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Programs Built For Transformation</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              System-first paths that move people from information to formation to transformation.
            </p>
          </div>
          <Button href="/programs" variant="secondary" className="self-start">
            View All Programs
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programHighlights.map((program) => (
            <div
              key={program.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm"
            >
              <div className="relative h-[320px] w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2 rounded-xl bg-black/45 p-3 text-white backdrop-blur-[2px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80">
                    {program.meta}
                  </p>
                  <h3 className="text-lg font-semibold leading-tight text-white">{program.title}</h3>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
                  {program.tag}
                </p>
                <p className="text-sm text-[color:var(--muted)]">{program.text}</p>
                <a
                  href={program.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[color:var(--brand)]"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Books That Confront What You Avoid</h2>
          <p className="text-sm text-[color:var(--muted)]">Practical mirrors, not motivation.</p>
        </div>
        <div className="grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Card key={book.title} className={bookCardClasses}>
              <div className="relative h-72 w-full overflow-hidden border border-[color:var(--border)] bg-white">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 px-5 pt-5">
                <h3 className="text-lg font-semibold text-[color:var(--text)]">{book.title}</h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">{book.description}</p>
              </div>
              {book.buyLink ? (
                <div className="mt-auto flex items-center justify-center gap-4 px-5 pb-5 pt-2">
                  <span className="rounded-full bg-[color:var(--brand)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
                    {book.price}
                  </span>
                  <Button variant="secondary" href={book.buyLink} className="self-start">
                    Buy Now
                  </Button>
                </div>
              ) : (
                <div className="mt-auto flex items-center justify-center px-5 pb-5 pt-1">
                  <Button variant="primary" disabled className="cursor-not-allowed opacity-95">
                    Coming Soon
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Calm Clarity For Serious People</h2>
          <p className="text-sm font-semibold text-[color:var(--muted)]">I don’t coach for hype. I coach for decisions.</p>
          <p className="text-sm font-semibold text-[color:var(--muted)]">
            If your life is noisy inside, we build a system that returns you to yourself.
          </p>
          <div className="pt-2">
            <Button href="/about">About Me</Button>
          </div>
        </div>
        <img
          src="/assets/optimized/salim/salim 3.webp"
          alt="Salim Cyrus"
          width={420}
          height={320}
          className="mx-auto h-[350px] w-auto max-w-full object-contain md:h-[420px]"
          loading="eager"
        />
      </div>
    </Section>
  </>
);

export default Home;
