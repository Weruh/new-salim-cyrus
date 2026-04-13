import Button from '../components/Button';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { brandConfig } from '../lib/config';

const programs = [
  {
    title: 'The Identity Reformation Program',
    format: '8-12 weeks',
    tag: 'Flagship',
    focus: 'Identity, purpose, inner healing',
    summary: 'Flagship transformation track that replaces false identities with purpose and disciplined execution.',
    applyLink: 'https://paystack.shop/pay/jgbl6hhq7v',
    image: {
      src: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.47 (1).jpeg',
      alt: 'Salim Cyrus studio portrait'
    },
    pricing: {
      local: 'KES 25,000',
      global: 'USD 193'
    },
    steps: [
      'Weeks 1-3: Breaking false identities (culture, trauma, religion)',
      'Weeks 4-6: Renewing the mind (Romans 12:2 AMP)',
      'Weeks 7-9: Purpose alignment and calling',
      'Weeks 10-12: Execution and discipline'
    ],
    scripture: 'Romans 12:2 (AMP) - be transformed by the renewing of your mind.',
    outcome: 'This is where people stop performing and start becoming.'
  },
  {
    title: 'Kingdom Mentality Masterclass',
    format: 'Monthly subscription',
    tag: 'Membership',
    focus: 'Spiritual intelligence plus practical life systems',
    summary: 'Build a community of thinkers who can apply revelation to real life decisions.',
    applyLink: 'https://paystack.shop/pay/p2j14f4bbo',
    image: {
      src: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.47.jpeg',
      alt: 'Salim Cyrus at a desk in warm light'
    },
    pricing: {
      local: 'KES 2,500 / month',
      global: 'USD 20 / month'
    },
    steps: [
      'Religion versus revelation',
      'Laws of the Kingdom: identity, authority, dominion',
      'Application to money, relationships, and leadership'
    ],
    scripture: 'Luke 17:21 (AMP) - the kingdom of God is within you.',
    outcome: 'This builds a community of thinkers, not just followers.'
  },
  {
    title: 'Defining Manhood Bootcamp',
    format: 'Men only',
    tag: 'Men Only',
    focus: 'Masculinity, discipline, responsibility',
    summary: 'A direct challenge to rebuild strength, accountability, and leadership in men.',
    applyLink: 'https://paystack.shop/pay/997xi94hc4',
    image: {
      src: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.50.jpeg',
      alt: 'Salim Cyrus in a pink polo'
    },
    pricing: {
      local: 'KES 25,000',
      global: 'USD 193'
    },
    steps: [
      'Sexual discipline and self-mastery',
      'Leadership in relationships',
      'Emotional control and accountability',
      'Provision mindset'
    ],
    scripture: '1 Corinthians 16:13 (AMP) - act like men, be courageous, be strong.',
    outcome: 'This will challenge men where society has made them comfortable.'
  },
  {
    title: 'Relationship Intelligence Program',
    format: 'Cohort or private track',
    tag: 'Relationships',
    focus: 'Modern relationships, truth over fantasy',
    summary: 'Build relational clarity with tools that replace confusion with maturity.',
    applyLink: 'https://paystack.shop/pay/6v8heotsk5',
    image: {
      src: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.48 (3).jpeg',
      alt: 'Salim Cyrus speaking in a blue suit'
    },
    pricing: {
      local: 'KES 20,000',
      global: 'USD 155'
    },
    steps: [
      'Compatibility versus chemistry',
      'Trauma bonding versus genuine connection',
      'Communication frameworks',
      'Pre-marital clarity systems'
    ],
    scripture: '1 Peter 4:8 (AMP) - love one another deeply.',
    outcome: 'This is where illusions die and truth begins.'
  },
  {
    title: 'The Discipline and Execution System',
    format: '30-60 days',
    tag: 'Execution',
    focus: 'Action, consistency, results',
    summary: 'Turn revelation into consistent action with daily structure and accountability.',
    applyLink: 'https://paystack.shop/pay/e2i5qf7s4v',
    image: {
      src: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.50 (1).jpeg',
      alt: 'Salim Cyrus speaking at an event'
    },
    pricing: {
      local: 'KES 20,000',
      global: 'USD 155'
    },
    steps: [
      'Daily structure for mind, body, and spirit',
      'Habit-building frameworks',
      'Accountability tracking',
      'Weekly evaluations'
    ],
    scripture: '2 Timothy 1:7 (AMP) - power, love, and self-discipline.',
    outcome: 'Because revelation without execution is self-deception.'
  },
  {
    title: 'Hekima Inner Circle',
    format: 'Premium membership',
    tag: 'Inner Circle',
    focus: 'Proximity, mentorship, exclusivity',
    summary: 'A private container for leaders who want direct access and live case analysis.',
    applyLink: 'https://paystack.shop/pay/501d4mbx4c',
    image: {
      src: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.48.jpeg',
      alt: 'Salim Cyrus in a light blue shirt'
    },
    pricing: {
      local: 'KES 20,000 / month',
      global: 'USD 155 / month'
    },
    steps: [
      'Weekly private sessions',
      'Direct Q and A access',
      'Real-life case breakdowns',
      'Networking with serious individuals'
    ],
    outcome: 'This is where you stop speaking to crowds and start raising leaders.'
  },
  {
    title: 'Healing and Restoration Intensive',
    format: 'Intensive format',
    tag: 'Healing',
    focus: 'Emotional wounds, betrayal, past trauma',
    summary: 'Walk through healing with a clear process that restores trust and self-worth.',
    applyLink: 'https://paystack.shop/pay/ergo2eagg-',
    image: {
      src: '/assets/program/WhatsApp Image 2026-04-13 at 09.54.48 (1).jpeg',
      alt: 'Salim Cyrus by the ocean'
    },
    pricing: {
      local: 'KES 15,000',
      global: 'USD 116'
    },
    steps: [
      'Forgiveness as a decision, not a feeling',
      'Breaking soul ties',
      'Restoring self-worth',
      'Rebuilding trust intelligently'
    ],
    scripture: 'Psalm 147:3 (AMP) - He heals the brokenhearted and binds their wounds.',
    outcome: 'Many people are not broken by life, but by unprocessed pain.'
  }
];

const strategicTruth = [
  'You create systems that scale.',
  'You build structure that disciples.',
  'You establish authority that multiplies impact.'
];

const nextSteps = [
  'Name each program with powerful branding.',
  'Structure pricing tiers (KES and global).',
  'Design landing page copy that converts.',
  'Map a funnel from free content to paid programs.'
];

const Programs = () => (
  <>
    <PageHero
      title="Programs Built For Transformation"
      subtitle="A session inspires, but a system transforms. These programs move people from information to formation to transformation."
      imageSrc="/assets/program/WhatsApp Image 2026-04-13 at 09.52.42.jpeg"
      imageAlt="Salim Cyrus by the ocean"
      trustLine="Flagship programs, memberships, and intensives"
      ctas={[
        { label: 'Contact Me', href: '/contact' },
        { label: 'WhatsApp', href: brandConfig.whatsappLink, variant: 'secondary' }
      ]}
     />

    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Strategic Truth</p>
          <h2 className="text-3xl font-semibold">Sessions inspire. Systems transform.</h2>
          <p className="text-sm text-[color:var(--muted)]">
            If you only sell time, you will always trade hours for income. Programs build structure that scales,
            deepens formation, and multiplies authority.
          </p>
        </div>
        <div className="space-y-3">
          {strategicTruth.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-white p-4 shadow-sm"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand)]" aria-hidden />
              <p className="text-sm text-[color:var(--muted)]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold">Program Structures</h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Each container is built to move people from clarity into sustained execution.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm"
            >
              <div className="relative h-[380px] w-full overflow-hidden">
                <img
                  src={program.image.src}
                  alt={program.image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2 rounded-xl bg-black/45 p-3 text-white backdrop-blur-[2px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80">
                    {program.format}
                  </p>
                  <h3 className="text-xl font-semibold leading-tight text-white">{program.title}</h3>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/80">{program.tag}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[color:var(--text)]">{program.focus}</p>
                  <p className="text-sm text-[color:var(--muted)]">{program.summary}</p>
                </div>
                <ul className="space-y-1 text-sm text-[color:var(--muted)]">
                  {program.steps.slice(0, 2).map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand)]" aria-hidden />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                {program.scripture && (
                  <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] p-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                      Scripture Anchor
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--text)]">{program.scripture}</p>
                  </div>
                )}
                <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] p-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    Pricing
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[color:var(--brand)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                      {program.pricing.local}
                    </span>
                    <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                      {program.pricing.global}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[color:var(--text)]">{program.outcome}</p>
                <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                  <Button
                    href={program.applyLink}
                    className="w-full text-xs font-semibold uppercase tracking-[0.2em] sm:w-auto"
                  >
                    Apply
                  </Button>
                  <Button
                    href={brandConfig.whatsappLink}
                    variant="secondary"
                    className="w-full text-xs font-semibold uppercase tracking-[0.2em] sm:w-auto"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="bg-[color:var(--bg)]">
      <div className="grid gap-8 rounded-[28px] border border-[color:var(--border)] bg-white p-10 shadow-lg md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Next Steps</p>
          <h2 className="text-3xl font-semibold">Build the movement, not just the service.</h2>
          <p className="text-sm text-[color:var(--muted)]">
            If you want help turning these programs into an offer stack, we can shape the branding, pricing,
            landing pages, and funnel.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact">Plan With Me</Button>
            <Button href={brandConfig.whatsappLink} variant="secondary">
              Message on WhatsApp
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          {nextSteps.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] p-4"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand)]" aria-hidden />
              <p className="text-sm text-[color:var(--muted)]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </>
);

export default Programs;
