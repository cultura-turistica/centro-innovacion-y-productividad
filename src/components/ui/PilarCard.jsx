import { useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";

export function PilarCard({ pilar }) {
  const Icon = LucideIcons[pilar.icon] || LucideIcons.HelpCircle;
  const navigate = useNavigate();

  const colorMap = {
    'bg-orange-600': '#F06000',
    'bg-emerald-800': '#055C38',
    'bg-blue-900': '#032968'
  };
  const hexColor = colorMap[pilar.color] || '#F06000';

  const handleClick = (e) => {
    e.preventDefault();
    navigate(pilar.link);
  };

  return (
    <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left' }}>
      <div className="icon-wrapper" style={{ background: hexColor }}>
        <Icon size={28} />
      </div>
      <h4 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968' }}>
        {pilar.title}
      </h4>
      <p style={{ color: '#475569', marginBottom: '2rem', lineHeight: '1.6' }}>
        {pilar.description}
      </p>
      <a href={pilar.link} onClick={handleClick} className="btn-primary" style={{ background: hexColor }}>
        {pilar.buttonText} <LucideIcons.ArrowRight size={18} />
      </a>
    </div>
  );
}
