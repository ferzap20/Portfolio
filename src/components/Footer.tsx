import { Mail, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  email: string;
  linkedin: string;
  github: string;
}

export default function Footer({ email, linkedin, github }: FooterProps) {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--space-3xl) 0',
      marginTop: 'var(--space-4xl)'
    }}>
      <div className="container container-lg">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-lg)',
          textAlign: 'center'
        }}>
          <a
            href={`mailto:${email}`}
            style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 600,
              color: 'var(--color-text)',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}
          >
            {email}
          </a>

          <div style={{
            display: 'flex',
            gap: 'var(--space-lg)'
          }}>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-text-secondary)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-text-secondary)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${email}`}
              style={{
                color: 'var(--color-text-secondary)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)'
          }}>
            © {new Date().getFullYear()} Fernando Zapata. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
