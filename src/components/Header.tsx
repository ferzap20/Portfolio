import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/ia-tests', label: 'Exploratory Vibecoding Experiments' },
    { href: '/process', label: 'Design Process' },
    { href: '/management', label: 'Product Mangement' },
    { href: '/research', label: 'UX Research Projects' },
    { href: '/brand', label: 'Design Showcase' }
  ];

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'var(--space-md) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link
              to="/"
              style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 600,
                color: 'var(--color-text)',
                textDecoration: 'none'
              }}
            >
              {title}
            </Link>

            <nav style={{
              display: 'none',
              gap: 'var(--space-lg)',
              alignItems: 'center'
            }} className="desktop-nav">
              <style>{`
                @media (min-width: 768px) {
                  .desktop-nav {
                    display: flex !important;
                  }
                  .mobile-menu-btn {
                    display: none !important;
                  }
                }
              `}</style>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/fernando_zapata_cv_-_eng.pdf"
                className="btn btn-primary"
                style={{ fontSize: 'var(--font-size-sm)' }}
              >
                
                Download my CV
              </a>
            </nav>

            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text)',
                cursor: 'pointer',
                padding: 'var(--space-xs)',
                display: 'flex'
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '65px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--color-bg)',
          zIndex: 99,
          padding: 'var(--space-xl) var(--space-md)'
        }} className="mobile-menu">
          <style>{`
            @media (min-width: 768px) {
              .mobile-menu {
                display: none !important;
              }
            }
          `}</style>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-lg)'
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  padding: 'var(--space-sm) 0',
                  borderBottom: '1px solid var(--color-border)'
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/fernando_zapata_cv_-_eng.pdf"
              className="btn btn-primary"
              style={{ marginTop: 'var(--space-md)' }}
            >
              Download my CV
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
