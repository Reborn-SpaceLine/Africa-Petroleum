/**
 * Composant Career - Page des offres d'emploi
 * Affiche les postes disponibles avec possibilité de postuler
 * Les offres sont chargées depuis src/data/jobs.json
 */
import { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Send, X, FileText, Upload, XCircle } from 'lucide-react';
import jobsData from '../data/jobs.json';
import '../styles/Career.css';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string; // 'Temps plein', 'Temps partiel', 'CDI', 'CDD'
  salary?: string;
  description: string;
  requirements: string[];
  department: string;
}

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });

  const [files, setFiles] = useState<{
    locationPlan: File | null;
    cni: File | null;
    cv: File | null;
    other: File | null;
  }>({
    locationPlan: null,
    cni: null,
    cv: null,
    other: null
  });

  // Charger les offres d'emploi depuis le fichier JSON
  useEffect(() => {
    try {
      // Les données sont importées directement depuis le fichier JSON
      const loadedJobs = (jobsData as { jobs: Job[] }).jobs;
      setJobs(loadedJobs);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des offres d\'emploi:', error);
      setIsLoading(false);
      // En cas d'erreur, on peut définir une liste vide ou des données par défaut
      setJobs([]);
    }
  }, []);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      coverLetter: ''
    });
    setFiles({
      locationPlan: null,
      cni: null,
      cv: null,
      other: null
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedJob) {
      // Vérifier que les fichiers requis sont présents
      if (!files.cv || !files.cni || !files.locationPlan) {
        alert('Veuillez joindre tous les documents requis (CV, CNI, Plan de localisation)');
        return;
      }

      // Afficher un résumé des fichiers
      const filesList = [
        files.cv && `CV: ${files.cv.name}`,
        files.cni && `CNI: ${files.cni.name}`,
        files.locationPlan && `Plan de localisation: ${files.locationPlan.name}`,
        files.other && `Autres: ${files.other.name}`
      ].filter(Boolean).join('\n');

      alert(`Merci pour votre candidature au poste de ${selectedJob.title} !\n\nDocuments joints:\n${filesList}\n\nNous vous contacterons bientôt.`);
      
      // Réinitialiser le formulaire
      setSelectedJob(null);
      setApplicationForm({
        name: '',
        email: '',
        phone: '',
        coverLetter: ''
      });
      setFiles({
        locationPlan: null,
        cni: null,
        cv: null,
        other: null
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Gérer le téléchargement de fichiers
   */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: keyof typeof files) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // Vérifier la taille du fichier (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert(`Le fichier ${file.name} est trop volumineux. Taille maximale : 10MB`);
        return;
      }
      setFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  /**
   * Supprimer un fichier
   */
  const removeFile = (fileType: keyof typeof files) => {
    setFiles(prev => ({
      ...prev,
      [fileType]: null
    }));
  };

  /**
   * Formater la taille du fichier
   */
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <section className="career-page" id="career">
      <div className="container">
        {/* En-tête de la page */}
        <div className="career-header">
          <div className="section-badge">
            <Briefcase size={18} />
            <span>Carrières</span>
          </div>
          <h1 className="section-title">Rejoignez Notre Équipe</h1>
          <p className="section-description">
            Découvrez les opportunités de carrière chez Africa Petroleum et faites partie d'une équipe dynamique et passionnée
          </p>
        </div>

        {/* État de chargement */}
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Chargement des offres d'emploi...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="no-jobs-container">
            <Briefcase size={48} />
            <h2>Aucune offre disponible</h2>
            <p>Il n'y a actuellement aucune offre d'emploi disponible. Revenez bientôt pour découvrir de nouvelles opportunités.</p>
          </div>
        ) : (
          /* Liste des offres d'emploi */
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="job-title-section">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-department">{job.department}</span>
                  </div>
                </div>

                <div className="job-info">
                  <div className="job-info-item">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="job-info-item">
                    <Clock size={16} />
                    <span>{job.type}</span>
                  </div>
                  {job.salary && (
                    <div className="job-info-item">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                  )}
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  <strong>Profil recherché :</strong>
                  <ul>
                    {job.requirements.slice(0, 2).map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="apply-btn"
                  onClick={() => handleApply(job)}
                >
                  <Send size={16} />
                  Postuler maintenant
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de candidature */}
      {selectedJob && (
        <div className="application-modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="application-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedJob(null)}
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            <div className="modal-header">
              <h2>Candidature - {selectedJob.title}</h2>
              <p className="modal-subtitle">{selectedJob.location} • {selectedJob.type}</p>
            </div>

            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={applicationForm.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={applicationForm.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={applicationForm.phone}
                  onChange={handleChange}
                  required
                  placeholder="+237 6 XX XX XX XX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">Lettre de motivation *</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={applicationForm.coverLetter}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Présentez-vous et expliquez pourquoi vous êtes intéressé(e) par ce poste..."
                />
              </div>

              {/* Section des documents à télécharger */}
              <div className="form-section-divider">
                <h3>Documents à joindre</h3>
                <p className="form-section-note">Veuillez joindre les documents suivants (PDF, JPG, PNG - Max 10MB chacun)</p>
              </div>

              {/* CV */}
              <div className="form-group file-group">
                <label htmlFor="cv">
                  <FileText size={18} />
                  Curriculum Vitae (CV) *
                </label>
                {!files.cv ? (
                  <div className="file-upload-area">
                    <input
                      type="file"
                      id="cv"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, 'cv')}
                      required
                      className="file-input"
                    />
                    <label htmlFor="cv" className="file-upload-label">
                      <Upload size={24} />
                      <span>Cliquez pour télécharger ou glissez-déposez</span>
                      <small>PDF, DOC, DOCX, JPG, PNG (Max 10MB)</small>
                    </label>
                  </div>
                ) : (
                  <div className="file-preview">
                    <div className="file-info">
                      <FileText size={20} />
                      <div className="file-details">
                        <span className="file-name">{files.cv.name}</span>
                        <span className="file-size">{formatFileSize(files.cv.size)}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="file-remove-btn"
                      onClick={() => removeFile('cv')}
                      aria-label="Supprimer le fichier"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                )}
              </div>

              {/* CNI */}
              <div className="form-group file-group">
                <label htmlFor="cni">
                  <FileText size={18} />
                  Carte Nationale d'Identité (CNI) *
                </label>
                {!files.cni ? (
                  <div className="file-upload-area">
                    <input
                      type="file"
                      id="cni"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, 'cni')}
                      required
                      className="file-input"
                    />
                    <label htmlFor="cni" className="file-upload-label">
                      <Upload size={24} />
                      <span>Cliquez pour télécharger ou glissez-déposez</span>
                      <small>PDF, JPG, PNG (Max 10MB)</small>
                    </label>
                  </div>
                ) : (
                  <div className="file-preview">
                    <div className="file-info">
                      <FileText size={20} />
                      <div className="file-details">
                        <span className="file-name">{files.cni.name}</span>
                        <span className="file-size">{formatFileSize(files.cni.size)}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="file-remove-btn"
                      onClick={() => removeFile('cni')}
                      aria-label="Supprimer le fichier"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                )}
              </div>

              {/* Plan de localisation */}
              <div className="form-group file-group">
                <label htmlFor="locationPlan">
                  <FileText size={18} />
                  Plan de localisation *
                </label>
                {!files.locationPlan ? (
                  <div className="file-upload-area">
                    <input
                      type="file"
                      id="locationPlan"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, 'locationPlan')}
                      required
                      className="file-input"
                    />
                    <label htmlFor="locationPlan" className="file-upload-label">
                      <Upload size={24} />
                      <span>Cliquez pour télécharger ou glissez-déposez</span>
                      <small>PDF, JPG, PNG (Max 10MB)</small>
                    </label>
                  </div>
                ) : (
                  <div className="file-preview">
                    <div className="file-info">
                      <FileText size={20} />
                      <div className="file-details">
                        <span className="file-name">{files.locationPlan.name}</span>
                        <span className="file-size">{formatFileSize(files.locationPlan.size)}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="file-remove-btn"
                      onClick={() => removeFile('locationPlan')}
                      aria-label="Supprimer le fichier"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                )}
              </div>

              {/* Autres documents */}
              <div className="form-group file-group">
                <label htmlFor="other">
                  <FileText size={18} />
                  Autres documents (optionnel)
                </label>
                {!files.other ? (
                  <div className="file-upload-area">
                    <input
                      type="file"
                      id="other"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, 'other')}
                      className="file-input"
                    />
                    <label htmlFor="other" className="file-upload-label">
                      <Upload size={24} />
                      <span>Cliquez pour télécharger ou glissez-déposez</span>
                      <small>PDF, DOC, DOCX, JPG, PNG (Max 10MB)</small>
                    </label>
                  </div>
                ) : (
                  <div className="file-preview">
                    <div className="file-info">
                      <FileText size={20} />
                      <div className="file-details">
                        <span className="file-name">{files.other.name}</span>
                        <span className="file-size">{formatFileSize(files.other.size)}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="file-remove-btn"
                      onClick={() => removeFile('other')}
                      aria-label="Supprimer le fichier"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={() => setSelectedJob(null)}>
                  Annuler
                </button>
                <button type="submit" className="btn-submit">
                  <Send size={18} />
                  Envoyer ma candidature
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
