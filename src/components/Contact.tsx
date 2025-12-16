import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Phone size={18} />
            <span>Contactez-Nous</span>
          </div>
          <h2 className="section-title">Restons en Contact</h2>
          <p className="section-description">
            N'hésitez pas à nous contacter pour toute question ou demande de renseignements
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Adresse</h3>
                <p className="info-text">Marché B, Yaoundé<br />Cameroun</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Téléphone</h3>
                <p className="info-text">+237 6 XX XX XX XX<br />+237 6 YY YY YY YY</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Email</h3>
                <p className="info-text">contact@stationmarcheb.cm<br />info@stationmarcheb.cm</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Horaires d'Ouverture</h3>
                <p className="info-text">
                  Ouvert 24h/24 - 7j/7<br />
                  Service continu
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nom Complet</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Entrez votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="+237 6 XX XX XX XX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Votre message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              Envoyer le Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
