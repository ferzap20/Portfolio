import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="section-lg">
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '60vh'
      }}>
        <h1 style={{
          fontSize: 'clamp(4rem, 15vw, 8rem)',
          fontWeight: 700,
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-md)'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 600,
          color: 'var(--color-text)',
          marginBottom: 'var(--space-sm)'
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-xl)',
          maxWidth: '500px'
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
