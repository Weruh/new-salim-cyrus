import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import MobileStickyBar from './MobileStickyBar';
import FinalCTA from './FinalCTA';

const HIDE_FINAL_CTA_ROUTES = ['/certifications', '/contact', '/coaching'];

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const hideFinalCTA = HIDE_FINAL_CTA_ROUTES.includes(location.pathname);

  return (
    <div className="bg-[color:var(--bg)] text-[color:var(--text)]">
      <Navbar />
      <main className="pb-24 md:pb-10">
        {children}
        {!hideFinalCTA && <FinalCTA />}
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Layout;
