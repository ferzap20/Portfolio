import Button from './Button';

interface HeroProps {
  name: string;
  name_header: string;
  title: string;
  tagline: string;
  headshot: string;
  cv: string;
}

export default function Hero({ name, title, tagline, cv }: HeroProps) {
  return (
    <section style={{ padding: 'clamp(3rem, 25vh, 8rem) 0' }}>
      <div className="container container-lg">
        <div style={{
          display: 'grid',
         gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 'clamp(2rem, 8vw, 5rem)',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{
              fontSize: 'clamp(3.5rem, 10vw, 5rem)',
              fontWeight: 600,
              lineHeight: 1,
              marginBottom: 'var(--space-lg)',
              color: 'var(--color-text)'
            }}>
              {name}
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 5vw, 1.7rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--space-xl)'
            }}>
              {tagline}
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Button variant="primary" href="#work">View my Work</Button>
              <Button variant="secondary" href={cv}>Download my CV</Button>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img
              src="/img_header.png"
              alt={name}
              style={{
                width: 'clamp(300px, 90vw, 700px)',
                height: 'auto',
                maxWidth: '90%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
