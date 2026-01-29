import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ children, variant = 'primary', onClick, href, className = '' }: ButtonProps) {
  const baseClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
