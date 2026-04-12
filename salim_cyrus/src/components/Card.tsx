import { CSSProperties, ReactNode } from 'react';

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Card = ({ title, children, className = '', style }: CardProps) => (
  <div
    className={`rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm ${className}`}
    style={style}
  >
    {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
    <div className="text-sm text-[color:var(--muted)]">{children}</div>
  </div>
);

export default Card;
