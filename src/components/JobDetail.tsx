/**
 * Composant JobDetail - Page de détails d'une offre d'emploi
 * Affiche tous les détails d'une offre avant de permettre la candidature
 */
import { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Send, ArrowLeft, FileText, Upload, X, XCircle, Target, Award, Users, Calendar, CheckCircle2 } from 'lucide-react';
import jobsData from '../data/jobs.json';
import '../styles/JobDetail.css';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  requirements: string[];
  department: string;
  missions?: string[];
  skills?: string[];
  benefits?: string[];
  schedule?: string;
  experience?: string;
  image?: string;
}

interface JobDetailProps {
  jobSlug: string;
  onBack: () => void;
  onApply: (job: Job) => void;
  onOpenForm?: (job: Job) => void;
}

/**
 * Fonction pour créer un slug à partir d'un titre
 */
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^a-z0-9\s-]/g, '') // Supprimer les caractères spéciaux
    .trim()
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/-+/g, '-'); // Remplacer les tirets multiples par un seul
};

export default function JobDetail({ jobSlug, onBack, onApply, onOpenForm }: JobDetailProps) {
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const loadedJobs = (jobsData as { jobs: Job[] }).jobs;
      // Trouver le job par son slug (généré à partir du titre)
      const foundJob = loadedJobs.find(j => createSlug(j.title) === jobSlug);
      setJob(foundJob || null);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement de l\'offre:', error);
      setIsLoading(false);
      setJob(null);
    }
  }, [jobSlug]);

  if (isLoading) {
    return (
      <section className="job-detail-page">
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Chargement des détails de l'offre...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!job) {
    return (
      <section className="job-detail-page">
        <div className="container">
          <div className="error-container">
            <Briefcase size={48} />
            <h2>Offre introuvable</h2>
            <p>L'offre d'emploi demandée n'existe pas ou a été supprimée.</p>
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={18} />
              Retour aux offres
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="job-detail-page">
      <div className="container">
        {/* Bouton retour */}
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          Retour aux offres
        </button>

        {/* En-tête de l'offre */}
        <div className="job-detail-header">
          <div className="section-badge">
            <Briefcase size={18} />
            <span>Détails de l'offre</span>
          </div>
          <h1 className="job-detail-title">{job.title}</h1>
          <div className="job-detail-meta">
            <div className="job-meta-item">
              <MapPin size={24} />
              <span>{job.location}</span>
            </div>
            <div className="job-meta-item">
              <Clock size={24} />
              <span>{job.type}</span>
            </div>
            {job.salary && (
              <div className="job-meta-item">
                <DollarSign size={24} />
                <span>{job.salary}</span>
              </div>
            )}
            <div className="job-meta-item">
              <Briefcase size={24} />
              <span>{job.department}</span>
            </div>
          </div>
        </div>

        {/* Contenu détaillé */}
        <div className="job-detail-content">
          {/* Description avec image */}
          <div className="job-detail-section description-section">
            <h2 className="section-title">
              <Briefcase size={24} />
              Description du poste
            </h2>
            <div className="description-wrapper">
              {job.image && (
                <div className="job-image-wrapper">
                  <img 
                    src={job.image} 
                    alt={`Illustration - ${job.title}`}
                    className="job-illustration-image"
                  />
                </div>
              )}
              <p className="job-description-full">{job.description}</p>
            </div>
          </div>

          {/* Missions et Profil recherché côte à côte */}
          <div className="job-detail-row">
            {/* Missions */}
            {job.missions && job.missions.length > 0 && (
              <div className="job-detail-section half-section">
                <h2 className="section-title">
                  <Target size={24} />
                  Missions principales
                </h2>
                <ul className="missions-list">
                  {job.missions.map((mission, idx) => (
                    <li key={idx}>
                      <span className="mission-icon">
                        <CheckCircle2 size={20} />
                      </span>
                      <span className="mission-text">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Profil recherché */}
            <div className="job-detail-section half-section">
              <h2 className="section-title">
                <Users size={24} />
                Profil recherché
              </h2>
              <ul className="requirements-list">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>
                    <span className="requirement-icon">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compétences et Avantages côte à côte */}
          <div className="job-detail-row">
            {/* Compétences */}
            {job.skills && job.skills.length > 0 && (
              <div className="job-detail-section half-section">
                <h2 className="section-title">
                  <Award size={24} />
                  Compétences requises
                </h2>
                <div className="skills-grid">
                  {job.skills.map((skill, idx) => (
                    <div key={idx} className="skill-badge">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Avantages */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="job-detail-section half-section benefits-section">
                <h2 className="section-title">
                  <Award size={24} />
                  Avantages et bénéfices
                </h2>
                <ul className="benefits-list">
                  {job.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <span className="benefit-icon">★</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Informations complémentaires */}
          <div className="job-detail-section">
            <h2 className="section-title">
              <FileText size={24} />
              Informations complémentaires
            </h2>
            <div className="info-grid">
              <div className="info-item">
                <strong>Localisation :</strong>
                <span>{job.location}</span>
              </div>
              <div className="info-item">
                <strong>Type de contrat :</strong>
                <span>{job.type}</span>
              </div>
              <div className="info-item">
                <strong>Département :</strong>
                <span>{job.department}</span>
              </div>
              {job.salary && (
                <div className="info-item">
                  <strong>Salaire :</strong>
                  <span>{job.salary}</span>
                </div>
              )}
              {job.experience && (
                <div className="info-item">
                  <strong>Expérience requise :</strong>
                  <span>{job.experience}</span>
                </div>
              )}
              {job.schedule && (
                <div className="info-item">
                  <strong>Horaires :</strong>
                  <span>{job.schedule}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bouton de candidature */}
        <div className="job-detail-actions">
          <button className="apply-btn-large" onClick={() => {
            if (onOpenForm) {
              onOpenForm(job);
            } else {
              onApply(job);
            }
          }}>
            <Send size={24} />
            Postuler maintenant
          </button>
        </div>
      </div>
    </section>
  );
}

