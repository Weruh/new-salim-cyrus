import Card from './Card';

const testimonials = [
  {
    quote: 'I stopped overthinking and started executing.',
    name: 'Milo',
    role: 'Strategy Lead'
  },
  {
    quote: 'I finally set boundaries without guilt.',
    name: 'Aria',
    role: 'Executive Coach'
  },
  {
    quote: 'My life got quieter inside.',
    name: 'Jordan',
    role: 'Creative Director'
  },
  {
    quote: 'The plan was simple - and it worked.',
    name: 'Nora',
    role: 'Operations Partner'
  },
  {
    quote: 'I regained control of my days.',
    name: 'Theo',
    role: 'Product Lead'
  },
  {
    quote: 'It felt private, honest, and practical.',
    name: 'Imani',
    role: 'Design Strategist'
  }
];

const Testimonials = () => (
  <section className="py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4 space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Social proof</p>
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">What Clients Say</h2>
        <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 text-lg text-[color:var(--muted)] shadow-sm">
          "After one session, I made a decision I had delayed for years. The clarity wasn't emotional. It was structural."
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ quote, name, role }) => (
          <Card
            key={quote}
            className="bg-gradient-to-br from-white/90 via-white to-slate-50 text-base font-semibold text-[color:var(--text)] shadow-sm"
          >
            <p className="text-base text-[color:var(--text)]">{quote}</p>
            <div className="mt-4 border-t border-[color:var(--border)] pt-3 text-xs font-normal uppercase tracking-[0.2em] text-[color:var(--muted)]">
              <span className="block text-sm font-semibold text-[color:var(--text)]">{name}</span>
              {role}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
