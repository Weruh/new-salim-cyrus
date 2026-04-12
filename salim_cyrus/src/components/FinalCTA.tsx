import Button from './Button';
import Section from './Section';
import { brandConfig } from '../lib/config';

const FinalCTA = () => (
  <Section className="bg-[color:var(--bg)]">
    <div className="rounded-[32px] border border-[color:var(--border)] bg-white p-10 text-center shadow-lg">
      <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Ready?</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">If You’re Serious, Start Now.</h2>
      <p className="mt-4 text-sm text-[color:var(--muted)]">Limited weekly slots.</p>
      <div className="mt-6 flex justify-center">
        <Button href={brandConfig.bookLink}>Book A Session</Button>
      </div>
    </div>
  </Section>
);

export default FinalCTA;
