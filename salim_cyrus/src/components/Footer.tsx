import { Link } from 'react-router-dom';
import { brandConfig } from '../lib/config';

const Footer = () => (
  <footer className="border-t border-[color:var(--border)] bg-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Salim Cyrus. Private coaching.</p>
      <div className="flex flex-wrap gap-3">
        {brandConfig.navLinks.map((link) => (
          <Link key={link.href} to={link.href} className="hover:text-[color:var(--brand)]">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
