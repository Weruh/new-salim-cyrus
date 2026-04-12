import Card from '../components/Card';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Testimonials from '../components/Testimonials';

const certifications = [
  { title: 'Certified Life Coach', issuer: 'Issuing Body', year: '2023' },
  { title: 'Advanced Emotional Intelligence', issuer: 'Issuing Body', year: '2022' },
  { title: 'Strategic Accountability Coach', issuer: 'Issuing Body', year: '2024' },
  { title: 'Human Potential Practitioner', issuer: 'Issuing Body', year: '2021' },
  { title: 'Decision Architecture Specialist', issuer: 'Issuing Body', year: '2020' }
];

const galleryImages = [
  { src: '/assets/optimized/images/certificate 1.webp', alt: 'Salim Cyrus presenting a certification' },
  { src: '/assets/optimized/images/certificate 11.webp', alt: 'Salim Cyrus holding a certificate' },
  { src: '/assets/optimized/images/certificate 111.webp', alt: 'Salim Cyrus displaying a certificate' }
];

const Certifications = () => (
  <>
    <PageHero
      title="Certifications"
      subtitle="Credentials support the work. Results define it."
      imageSrc="/assets/optimized/images/certificate 2.webp"
      imageAlt="Certificate of achievement"
      imageClassName="rounded-none object-cover shadow-lg"
      imageHeight={280}
      sectionClassName="!py-8 !md:py-12"
    />

    <Section>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold">Credentials</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{cert.title}</h3>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {cert.issuer}
              </p>
              <p className="text-xs text-[color:var(--muted)]">{cert.year}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Certificate Gallery</h2>
        <p className="text-sm text-[color:var(--muted)]">Moments that capture the authority behind every credential.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm"
            >
              <div className="relative h-[28rem] w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Testimonials />
  </>
);

export default Certifications;
