import React from 'react';
import '../styles/Career.css';

interface Job {
  title: string;
  location: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: 'Technicien Carburant',
    location: 'Bafoussam',
    description: 'Assurer la qualité du carburant et le service client à la station.'
  },
  {
    title: 'Caissier / Caissière',
    location: 'Douala',
    description: 'Gestion des paiements et suivi des transactions à la station.'
  },
  {
    title: 'Agent de Maintenance',
    location: 'Yaoundé',
    description: 'Maintenance des installations et équipements de la station.'
  },
  {
    title: 'Responsable Marketing',
    location: 'Bafoussam',
    description: 'Développer la visibilité et les promotions de la société.'
  },
];

export default function Career() {
  return (
    <div className="career-page" id='career'>
      <h2>Nos offres d'emploi</h2>
      <p>Découvrez les postes disponibles au sein de notre compagnie.</p>

      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <span className="job-location">{job.location}</span>
            <p>{job.description}</p>
            <button className="apply-btn">Postuler</button>
          </div>
        ))}
      </div>
    </div>
  );
}
