import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className = '', id }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="mx-auto max-w-6xl px-4">{children}</div>
  </section>
);

export default Section;
