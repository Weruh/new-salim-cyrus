import Button from '../components/Button';
import Card from '../components/Card';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { brandConfig } from '../lib/config';

const books = [
  {
    title: 'Concealed Redemption',
    description:
      'A pocket manual for catching the narrative you keep replaying so you can stop reliving the same stress and build a new pattern with small, sustainable rituals.',
    cover: '/assets/optimized/books/concealed redemption.webp',
    price: 'KES 1,499',
    buyLink: 'https://paystack.com/buy/concealed-redemption-wimdwx'
  },
  {
    title: 'The Great Deception',
    description:
      'A brutal accounting of how the stories you tell yourself keep stealing your focus, and how to reclaim the narrative with accountability and clarity.',
    cover: '/assets/optimized/books/the great deception.webp',
    price: 'KES 1,499',
    buyLink: 'https://paystack.com/buy/the-great-deception-rnjacy'
  },
  {
    title: 'Redemption',
    description:
      'A structured companion that keeps your weeks honest, pairing micro-checks with intention so the decisions that matter never slip away.',
    cover: '/assets/optimized/books/redemption.webp'
  }
  ,
  {
    title: 'The  Deception',
    description:
      'A brutal accounting of how the stories you tell yourself keep stealing your focus, and how to reclaim the narrative with accountability and clarity.',
    cover: '/assets/optimized/books/deception 2.webp'
  }
];

const bookCardClasses =
  'group mx-auto flex w-full max-w-[320px] flex-col gap-5 !rounded-[28px] !p-0 shadow-[0_25px_60px_rgba(13,13,13,0.12)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[color:var(--brand)] hover:shadow-[0_35px_70px_rgba(36,12,64,0.18)]';

const bookImageWrapperClasses =
  'relative h-72 w-full overflow-hidden rounded-t-[28px] border border-[color:var(--border)] bg-white p-3';

const bookImageClasses =
  'object-cover object-top transition-transform duration-500 ease-out scale-100 group-hover:scale-110';

const Books = () => (
  <>
   { /*<PageHero
      title="Books"
      subtitle="If you’re serious about change, start with a mirror."
      imageSrc="/assets/optimized/books/collection 2.webp"
      imageAlt="Books by Salim Cyrus"
     />*/}

    <Section>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Books That Confront What You Avoid</h2>
          <p className="text-sm text-[color:var(--muted)]">Practical mirrors, not motivation.</p>
        </div>
        <div className="grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Card key={book.title} className={bookCardClasses}>
              <div className={bookImageWrapperClasses}>
                <img
                  src={book.cover}
                  alt={book.title}
                  className={`h-full w-full ${bookImageClasses}`}
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 px-5 pt-5 pb-4">
                <h3 className="text-lg font-semibold text-[color:var(--text)]">{book.title}</h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">{book.description}</p>
              </div>
              {book.buyLink ? (
                <div className="mt-auto flex items-center justify-center gap-3 px-5 pb-5 pt-1">
                  <span className="rounded-full bg-[color:var(--brand)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
                    {book.price}
                  </span>
                  <Button variant="secondary" href={book.buyLink} className="self-start px-5 py-2 text-sm">
                    Buy Now
                  </Button>
                </div>
              ) : (
                <div className="mt-auto flex items-center justify-center px-5 pb-5 pt-1">
                  <Button variant="primary" disabled className="cursor-not-allowed px-6 py-2 text-sm opacity-95">
                    Coming Soon
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold">Want A Reset In One Page?</h2>
        <p className="mt-2 text-sm text-[color:var(--muted)]">A downloadable checklist to map the next decisive move.</p>
        <Button variant="secondary" href="#" className="mt-4">
          Download The Reset Checklist
        </Button>
      </div>
    </Section>
  </>
);

export default Books;
