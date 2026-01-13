/**
 * Composant Badge - Badge réutilisable pour les sections
 * Utilisé pour afficher un badge avec une icône et un texte
 */
import { type ReactNode } from 'react';
import '../styles/Badge.css';

interface BadgeProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Badge({ icon, children, className = '' }: BadgeProps) {
  return (
    <div className={`section-badge ${className}`.trim()}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{children}</span>
    </div>
  );
}



