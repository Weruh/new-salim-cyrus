import Button from '../components/Button';
import Card from '../components/Card';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { brandConfig } from '../lib/config';

const whoItIsFor = [
  {
    label: 'High-responsibility people',
    detail: 'You carry expectations set by others; this program gives you private structure so your energy serves the priorities you actually choose.'
  },
  {
    label: 'Transitions (career, identity, relationships, purpose)',
    detail: 'Every meaningful move ripples into your days—together we map the cost, the gain, and the simplest next action that keeps momentum alive.'
  },
  {
    label: 'Burnout, drift, indecision',
    detail: 'We diagnose the repeating pattern, isolate the drain, and turn that insight into a decision you can defend internally and externally.'
  }
];

const whoItIsNotFor = [
  {
    label: 'People looking for motivation, not structure',
    detail: 'If you want a pep talk instead of a detailed accountability plan, this isn’t the right place.'
  },
  {
    label: 'People unwilling to make decisions',
    detail: 'The work asks for deliberate moves; we pause rather than progress when you need more time to choose.'
  }
];

const offers = [
  {
    title: 'Starter Session (30 min)',
    description: 'Quick clarity on one decision.',
    duration: '30 minutes',
    outcome: 'Leave with one clear next step.',
    header: {
      headline: 'Starter Session',
      strap: '30 MIN',
      subhead: '30 minutes',
      topImage: '/assets/optimized/images/starter session.webp'
    },
    checklist: ['Name the blocker.', 'Pick the next move.'],
    ctas: [
      { label: 'Book 30 min', href: 'https://paystack.com/buy/30-mins-personal-clarity-and-direction-session-qsrjip' },
      { label: 'WhatsApp', href: brandConfig.whatsappLink, variant: 'secondary' }
    ]
  },
  {
    title: 'Clarity Session (60 min)',
    description: 'Solve one key decision fast.',
    duration: '60 minutes',
    outcome: 'Clear plan for this week.',
    header: {
      headline: 'Clarity Session',
      strap: '60 MIN',
      subhead: '60 minutes',
      topImage: '/assets/optimized/images/clarity session.webp'
    },
    checklist: ['Map what is blocking you.', 'Set one committed action.'],
    ctas: [
      { label: 'Book 60 min', href: 'https://paystack.com/buy/1-hour-personal-coaching-session-mfkrkq' },
      { label: 'WhatsApp', href: brandConfig.whatsappLink, variant: 'secondary' }
    ]
  },
  {
    title: 'Deep Reset Session (120 min)',
    description: 'Reset patterns that keep repeating.',
    duration: '120 minutes',
    outcome: 'A reset plan you can keep.',
    header: {
      headline: 'Deep Reset Session',
      strap: '120 MIN',
      subhead: '120 minutes',
      topImage: '/assets/optimized/images/deep reset.webp'
    },
    checklist: ['Find the root loop.', 'Build a focused reset routine.'],
    ctas: [
      { label: 'Book 120 min', href: 'https://paystack.com/buy/2-hours-mindset-reset-qufnqu' },
      { label: 'WhatsApp', href: brandConfig.whatsappLink, variant: 'secondary' }
    ]
  },
  {
    title: 'Private Coaching (4-8 weeks)',
    description: 'Weekly support and accountability.',
    duration: 'Weekly touchpoints for 4-8 weeks',
    outcome: 'Steady momentum for 4-8 weeks.',
    header: {
      headline: 'Private Coaching',
      strap: '4-8 WEEKS',
      subhead: 'Weekly touchpoints for 4-8 weeks',
      topImage: '/assets/optimized/images/private coaching.webp'
    },
    checklist: ['Weekly coaching call.', 'Midweek check-in support.'],
    ctas: [
      { label: 'Book coaching', href: 'https://paystack.com/buy/vip-breakthrough-experience-gaogfu' },
      { label: 'WhatsApp', href: brandConfig.whatsappLink, variant: 'secondary' }
    ]
  }
];

const transformationStats = [
  { value: '92%', label: 'clients regain measurable clarity by session two' },
  { value: '3', label: 'core commitments defended in every coaching conversation' },
  { value: '24h', label: 'max response window for accountability check-ins' }
];

const testimonial = {
  quote:
    'Within four weeks I stopped reacting to the calendar and started running the demands I chose—the accountability kept me honest.',
  name: 'Selena',
  role: 'VP of Product'
};

const faq = [
  {
    question: 'How quickly can I expect to see movement?',
    answer:
      'We pair every session with a private debrief, action plan, and a 24-hour accountability reminder. Movement shows up as early as the second session because the context is structured, recorded, and easy to revisit between meetings.'
  },
  {
    question: 'What happens between sessions?',
    answer:
      'You get a short recap of what changed, a one-line next step, and an “accountability pulse” note via WhatsApp. If something shifts, we re-prioritize together before the next session so momentum doesn’t stall.'
  },
  {
    question: 'Do you offer support outside the scheduled time?',
    answer:
      'Yes there is a dedicated channel for asynchronous updates. Voice notes or texts are answered within 24 hours, and every answer feeds into the shared agenda so nothing slips through the cracks.'
  },
  {
    question: 'What if I need to pause the work?',
    answer:
      'Pause is part of the plan. We document where you left off, set a soft restart date, and keep the accountability page ready so the next session feels seamless.'
  },
  {
    question: 'How do you keep the engagement private?',
    answer:
      'Sessions and notes live in a private, encrypted space. I never share your identity or story elsewhere, and every follow-up keeps the tone confidential—no group messaging, no surprise call-outs.'
  }
];

const Coaching = () => (
  <>
    <PageHero
      title="Private coaching for leaders in transition"
      subtitle="Clarity, structure, and accountability for people ready to stop negotiating with the same problems."
      imageSrc="/assets/optimized/images/salim coaching.webp"
      imageAlt="Salim Cyrus coaching"
      trustLine="60-minute clarity calls through 8-week private engagement"
      ctas={[
        { label: 'contact me', href: '/contact' },
        { label: 'Message on WhatsApp', href: brandConfig.whatsappLink, variant: 'secondary' }
      ]}
    />

    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Who It's For</h2>
          <ul className="space-y-4 text-sm leading-relaxed">
            {whoItIsFor.map((item) => (
              <li key={item.label}>
                <p className="font-semibold text-[color:var(--text)]">{item.label}</p>
                <p className="text-[color:var(--muted)]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Who It's Not For</h2>
          <ul className="space-y-4 text-sm leading-relaxed">
            {whoItIsNotFor.map((item) => (
              <li key={item.label}>
                <p className="font-semibold text-[color:var(--text)]">{item.label}</p>
                <p className="text-[color:var(--muted)]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Offers</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-[color:var(--border)] bg-white shadow-[0_25px_45px_rgba(15,15,15,0.15)] transition-shadow duration-300"
            >
              <div className="relative h-[245px] overflow-hidden rounded-t-[14px]">
                <img
                  src={offer.header.topImage}
                  alt={offer.header.headline}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-5 flex flex-col gap-1 text-white">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">{offer.header.subhead}</p>
                  <p className="text-2xl font-semibold leading-tight">{offer.header.headline}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">{offer.header.strap}</p>
                </div>
              </div>
              <div className="space-y-3 px-5 pb-5 pt-4">
                <p className="text-sm leading-snug text-[color:var(--text)]">{offer.description}</p>
                <ul className="space-y-2 text-xs leading-snug text-[color:var(--muted)]">
                  {offer.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand)]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">{offer.outcome}</p>
                <div className="flex flex-col items-center gap-2 pt-2 sm:flex-row sm:flex-wrap sm:justify-center">
                  {offer.ctas.map((cta) => (
                    <Button
                      key={cta.label}
                      href={cta.href}
                      variant={cta.variant === 'secondary' ? 'secondary' : 'primary'}
                      className="w-full sm:w-auto text-xs font-semibold uppercase tracking-[0.2em]"
                    >
                      {cta.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Process</h2>
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--muted)]">
          Diagnose → Decide → Build → Execute → Review
        </p>
        <p className="text-sm text-[color:var(--muted)]">
          Every phase follows the same cadence: we diagnose the hidden loop, decide the next defense, build the rituals that guard the new move, execute with weekly accountability, and review before the next session. You also get midweek summaries so follow-through stays visible without needless meetings.
        </p>
      </div>
    </Section>

    <Section>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Transformation</h2>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm text-[color:var(--muted)]">
              The coaching is designed to make your new rhythm feel inevitable. We keep the wins, the blind spots, and the follow-up crisp so you can defend the commitments that matter most.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {transformationStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-[color:var(--border)] bg-white p-4 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-[color:var(--text)]">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-gradient-to-br from-white/90 via-white to-slate-50 text-[color:var(--text)] shadow-sm">
            <p className="text-base text-[color:var(--text)]">{testimonial.quote}</p>
            <div className="mt-4 border-t border-[color:var(--border)] pt-3 text-xs font-normal uppercase tracking-[0.2em] text-[color:var(--muted)]">
              <span className="block text-sm font-semibold text-[color:var(--text)]">{testimonial.name}</span>
              {testimonial.role}
            </div>
          </Card>
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-[color:var(--border)] bg-white p-6 text-[color:var(--text)] shadow-sm"
            >
              <summary className="cursor-pointer text-sm font-semibold text-[color:var(--text)]">{item.question}</summary>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  </>
);

export default Coaching;
