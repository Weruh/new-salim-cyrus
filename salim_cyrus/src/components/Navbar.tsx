import { useState } from 'react';
import { Link } from 'react-router-dom';
import { brandConfig } from '../lib/config';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)] shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/optimized/brand/salim-cyrus-logo.webp"
            alt="Salim Cyrus signature"
            width={48}
            height={48}
            className="h-10 w-10 object-cover"
          />
          <span className="text-lg font-semibold">Salim Cyrus</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
          {brandConfig.navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="transition hover:text-[color:var(--brand)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="relative h-10 w-10 rounded-full border border-[color:var(--border)] transition md:hidden"
        >
          <span
            className={`absolute left-1/2 top-[30%] h-0.5 w-5 -translate-x-1/2 bg-[color:var(--text)] transition-transform duration-300 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-[color:var(--text)] transition-opacity duration-200 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-1/2 top-[70%] h-0.5 w-5 -translate-x-1/2 bg-[color:var(--text)] transition-transform duration-300 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/25 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute right-0 top-0 h-fit max-h-[100dvh] w-1/2 min-w-[220px] max-w-[360px] overflow-y-auto border-l border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-5 shadow-2xl transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mt-8 flex flex-col gap-1 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="mb-2 flex items-center gap-3 rounded-lg border border-[color:var(--border)] px-2 py-2 text-[color:var(--text)]"
            >
              <img
                src="/assets/optimized/brand/salim-cyrus-logo.webp"
                alt="Salim Cyrus logo"
                width={32}
                height={32}
                className="h-8 w-8 object-cover"
              />
              <span className="text-sm font-semibold">Home</span>
            </Link>
            {brandConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[color:var(--muted)] transition hover:bg-black/5 hover:text-[color:var(--text)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
