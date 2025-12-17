/**
 * Composant News - Page des actualités
 * Affiche les dernières actualités de Africa Petroleum
 * Les actualités sont chargées depuis src/data/news.json
 */
import { useState, useEffect } from 'react';
import { Newspaper, Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import newsData from '../data/news.json';
import '../styles/News.css';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  category: string;
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fonction pour convertir la date au format "Jour Mois Année" en timestamp
  const parseDate = (dateStr: string): number => {
    const months: { [key: string]: number } = {
      'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3,
      'mai': 4, 'juin': 5, 'juillet': 6, 'août': 7,
      'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
    };
    
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const month = months[parts[1].toLowerCase()];
      const year = parseInt(parts[2]);
      if (!isNaN(day) && month !== undefined && !isNaN(year)) {
        return new Date(year, month, day).getTime();
      }
    }
    return 0;
  };

  // Charger les actualités depuis le fichier JSON
  useEffect(() => {
    try {
      // Les données sont importées directement depuis le fichier JSON
      const loadedNews = (newsData as { news: NewsItem[] }).news;
      // Trier par date (plus récentes en premier)
      const sortedNews = loadedNews.sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA;
      });
      setNewsItems(sortedNews);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des actualités:', error);
      setIsLoading(false);
      // En cas d'erreur, on peut définir une liste vide ou des données par défaut
      setNewsItems([]);
    }
  }, []);

  return (
    <div className="news-page" id="actualite">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Newspaper size={18} />
            <span>Actualités</span>
          </div>
          <h1 className="page-title">
            Actualités <span className="title-accent">Africa Petroleum</span>
          </h1>
          <p className="page-description">
            Restez informé des dernières nouvelles et développements de nos stations
          </p>
          <div className="news-stats">
            <div className="stat-item">
              <TrendingUp size={20} />
              <span>{newsItems.length} actualités</span>
            </div>
          </div>
        </div>

        {/* État de chargement */}
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Chargement des actualités...</p>
          </div>
        ) : newsItems.length === 0 ? (
          <div className="no-news-container">
            <Newspaper size={48} />
            <h2>Aucune actualité disponible</h2>
            <p>Il n'y a actuellement aucune actualité à afficher. Revenez bientôt pour découvrir les dernières nouvelles.</p>
          </div>
        ) : (
          <div className="news-grid">
            {newsItems.map((item, index) => (
            <article key={item.id} className="news-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="news-image-wrapper">
                <div className="news-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="image-overlay"></div>
                </div>
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
                <div className="news-footer">
                  <button className="news-read-more">
                    Lire la suite
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
