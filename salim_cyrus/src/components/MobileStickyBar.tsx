import Button from './Button';
import { brandConfig } from '../lib/config';

const MobileStickyBar = () => (
  <div className="md:hidden">
    <div className="fixed bottom-0 z-40 w-full border-t border-[color:var(--border)] bg-white/95 px-4 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <Button variant="primary" href={brandConfig.bookLink} className="w-full">
          Book Session
        </Button>
        <Button variant="secondary" href={brandConfig.whatsappLink} className="w-full justify-center">
          WhatsApp
        </Button>
      </div>
    </div>
    <div className="h-20 w-full" />
  </div>
);

export default MobileStickyBar;
