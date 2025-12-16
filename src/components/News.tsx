import { Newspaper, Calendar, User } from 'lucide-react';
import '../styles/News.css';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Expansion des Stations Africa Petroleum',
      date: '15 Décembre 2024',
      author: 'Direction Générale',
      excerpt: 'Africa Petroleum annonce l\'ouverture de 5 nouvelles stations dans les régions du Nord et de l\'Ouest du Cameroun.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      category: 'Expansion'
    },
    {
      id: 2,
      title: 'Nouveau Programme de Fidélité',
      date: '10 Décembre 2024',
      author: 'Service Marketing',
      excerpt: 'Découvrez notre nouveau programme de fidélité avec des récompenses exclusives pour nos clients réguliers.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      category: 'Programme'
    },
    {
      id: 3,
      title: 'Initiatives Environnementales',
      date: '5 Décembre 2024',
      author: 'Département Environnement',
      excerpt: 'Africa Petroleum s\'engage dans la protection de l\'environnement avec de nouvelles initiatives écologiques.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      category: 'Environnement'
    },
    {
      id: 4,
      title: 'Amélioration des Services',
      date: '1 Décembre 2024',
      author: 'Service Client',
      excerpt: 'Découvrez les dernières améliorations apportées à nos services pour une meilleure expérience client.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
      category: 'Service'
    }
  ];

  return (
    <div className="news-page" id="actualite">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Newspaper size={18} />
            <span>Actualités</span>
          </div>
          <h1 className="page-title">Actualités Africa Petroleum</h1>
          <p className="page-description">Restez informé des dernières nouvelles et développements de nos stations</p>
        </div>

        <div className="news-grid">
          {newsItems.map(item => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-category">{item.category}</div>
              </div>
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <div className="news-meta">
                  <div className="news-date">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <div className="news-author">
                    <User size={16} />
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
