import { type LucideIcon } from 'lucide-react';
import '../styles/InfoCard.css';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string | React.ReactNode;
  iconSize?: number;
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

export default function InfoCard({ 
  icon: Icon, 
  title, 
  description, 
  iconSize = 40, 
  className = '',
  layout = 'horizontal'
}: InfoCardProps) {
  return (
    <div className={`info-card ${layout === 'vertical' ? 'info-card-vertical' : ''} ${className}`}>
      <div className="info-icon">
        <Icon size={iconSize} strokeWidth={2.5} />
      </div>
      <div className="info-content">
        <h3 className="info-title">{title}</h3>
        <div className="info-text">{description}</div>
      </div>
    </div>
  );
}
