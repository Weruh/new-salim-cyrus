import Button from './Button';
import ImageWithFallback from './ImageWithFallback';
import Section from './Section';

export type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  ctas?: CTA[];
  trustLine?: string;
  imageHeight?: number;
  sectionClassName?: string;
  ctaWrapperClassName?: string;
};

const PageHero = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctas = [],
  trustLine,
  imageClassName,
  imageWrapperClassName,
  imageHeight = 520,
  sectionClassName,
  ctaWrapperClassName = 'pt-2'
}: Props) => (
  <Section className={sectionClassName}>
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <article className="space-y-8 lg:space-y-10">
        <p className="text-xs uppercase tracking-[0.5em] text-[color:var(--muted)]">Salim Cyrus</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">{title}</h1>
        <p className="text-lg leading-relaxed text-[color:var(--muted)]">{subtitle}</p>
        <div className={`flex flex-wrap gap-4 ${ctaWrapperClassName}`}>
          {ctas.map((cta) => (
            <Button key={cta.label} href={cta.href} variant={cta.variant}>
              {cta.label}
            </Button>
          ))}
        </div>
        {trustLine && (
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--muted)]">{trustLine}</p>
        )}
      </article>
      <div className="flex justify-center lg:justify-end">
        <div
          className={`relative w-full overflow-hidden rounded-[16px] border border-[color:var(--border)] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)] ${
            imageWrapperClassName ?? 'max-w-[480px]'
          }`}
        >
          <div className="relative w-full" style={{ height: imageHeight }}>
            <ImageWithFallback
              src={imageSrc}
              alt={imageAlt}
              width={520}
              height={imageHeight}
              className={
                imageClassName ?? 'h-full w-full object-cover object-top transition duration-300'
              }
              fallback={<span className="text-sm font-semibold">Image unavailable</span>}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default PageHero;
