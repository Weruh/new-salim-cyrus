import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../components/Button';
import Section from '../components/Section';
import { brandConfig } from '../lib/config';

const CONTACT_EMAIL = 'hekimahubconnect@gmail.com';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormValues((current) => ({ ...current, [id]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `New contact message from ${formValues.name || 'Website visitor'}`;
    const body = [
      `Name: ${formValues.name}`,
      `Email: ${formValues.email}`,
      `WhatsApp: ${formValues.whatsapp}`,
      '',
      formValues.message
    ].join('\n');
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('submitted');
  };

  const subject = `New contact message from ${formValues.name || 'Website visitor'}`;
  const body = [
    `Name: ${formValues.name}`,
    `Email: ${formValues.email}`,
    `WhatsApp: ${formValues.whatsapp}`,
    '',
    formValues.message
  ].join('\n');
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CONTACT_EMAIL
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <Section className="py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[18px] border border-[color:var(--border)] bg-white shadow-[0_45px_90px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 items-stretch gap-0 lg:min-h-[520px] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex h-full flex-col justify-between gap-6 p-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.5em] text-[color:var(--muted)]">Contact</p>
              <h2 className="text-3xl font-semibold">Calm clarity for serious people</h2>
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                I don’t coach for hype. I coach for decisions. Tell me what you’re holding and we build the system
                that returns you to yourself.
              </p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formValues.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-[color:var(--border)] px-4 py-3 text-sm focus:border-[color:var(--brand)] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-[color:var(--border)] px-4 py-3 text-sm focus:border-[color:var(--brand)] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]" htmlFor="whatsapp">
                  WhatsApp
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  required
                  value={formValues.whatsapp}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-[color:var(--border)] px-4 py-3 text-sm focus:border-[color:var(--brand)] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formValues.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-[color:var(--border)] px-4 py-3 text-sm focus:border-[color:var(--brand)] focus:outline-none"
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
            {status === 'submitted' && (
              <div className="space-y-2 text-sm font-semibold text-[color:var(--brand)]">
                <p>We tried to open your email app.</p>
                <p className="text-xs font-normal text-[color:var(--muted)]">
                  If it didn’t open, use one of these links:
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    className="rounded-full border border-[color:var(--brand)] px-4 py-2 text-[color:var(--brand)]"
                    href={mailtoLink}
                  >
                    Open Email App
                  </a>
                  <a
                    className="rounded-full border border-[color:var(--brand)] px-4 py-2 text-[color:var(--brand)]"
                    href={gmailComposeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Gmail
                  </a>
                </div>
              </div>
            )}
            <div className="space-y-4 rounded-[14px] border border-[color:var(--border)] bg-white/60 p-5 text-sm">
              <h3 className="text-lg font-semibold">Contact Options</h3>
              <p className="text-sm">
                Email:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[color:var(--brand)]">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <div className="pt-1">
                <Button variant="secondary" href={brandConfig.whatsappLink}>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="/assets/optimized/images/salim4.webp"
              alt="Salim Cyrus in conversation"
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
