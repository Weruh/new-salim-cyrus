import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<'button'>, 'href'>;

const VARIANT_STYLES: Record<'primary' | 'secondary', string> = {
  primary: 'bg-[color:var(--brand)] text-white border border-[color:var(--brand)]',
  secondary: 'border border-[color:var(--brand)] text-[color:var(--brand)] bg-white'
};

const Button = ({ variant = 'primary', href, children, className = '', ...rest }: ButtonProps) => {
  const isExternalHttpLink = Boolean(href && /^https?:\/\//i.test(href));
  const isAnchorLink = Boolean(
    href && (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#'))
  );

  const content = (
    <span className={`inline-flex items-center justify-center rounded-full px-8 py-2 text-xs font-semibold transition ${VARIANT_STYLES[variant]} ${className}`}>
      {children}
    </span>
  );

  if (href && (isExternalHttpLink || isAnchorLink)) {
    const anchorProps = isExternalHttpLink ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
      <a href={href} {...anchorProps} {...(rest as ComponentProps<'a'>)}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} {...(rest as ComponentProps<'a'>)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={rest.type ?? 'button'} {...rest}>
      {content}
    </button>
  );
};

export default Button;
