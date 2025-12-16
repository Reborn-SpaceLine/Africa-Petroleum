import React, { useState } from 'react';
import '../styles/ExchangeRates.css';

interface Rate {
  currency: string;
  code: string;
  flag: string;
  buy: number;
  sell: number;
}

export default function ExchangeRates() {
  const rates: Rate[] = [
    { currency: 'Euro', code: 'EUR', flag: '🇪🇺', buy: 655, sell: 665 },
    { currency: 'Dollar US', code: 'USD', flag: '🇺🇸', buy: 610, sell: 620 },
    { currency: 'Livre Sterling', code: 'GBP', flag: '🇬🇧', buy: 775, sell: 790 },
    { currency: 'Dollar Canadien', code: 'CAD', flag: '🇨🇦', buy: 450, sell: 465 },
    { currency: 'Franc Suisse', code: 'CHF', flag: '🇨🇭', buy: 690, sell: 705 },
    { currency: 'Yuan Chinois', code: 'CNY', flag: '🇨🇳', buy: 85, sell: 92 },
    { currency: 'Naira Nigérian', code: 'NGN', flag: '🇳🇬', buy: 0.75, sell: 0.85 },
    { currency: 'Cedi Ghanéen', code: 'GHS', flag: '🇬🇭', buy: 48, sell: 53 },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  return (
    <section className="exchange-rates" id="taux">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">💱</span>
            <span>Taux du Jour</span>
          </div>
          <h2 className="section-title">Nos Taux de Change</h2>
          <p className="section-description">
            Taux compétitifs et transparents, mis à jour régulièrement pour vous garantir le meilleur service
          </p>
        </div>

        <div className="rates-grid">
          {rates.map((rate) => (
            <div
              key={rate.code}
              className={`rate-card ${selectedCurrency === rate.code ? 'rate-card-selected' : ''}`}
              onClick={() => setSelectedCurrency(rate.code)}
            >
              <div className="rate-header">
                <div className="rate-flag">{rate.flag}</div>
                <div className="rate-info">
                  <div className="rate-currency">{rate.currency}</div>
                  <div className="rate-code">{rate.code}</div>
                </div>
              </div>
              
              <div className="rate-values">
                <div className="rate-value">
                  <div className="rate-label">Achat</div>
                  <div className="rate-amount">{rate.buy} FCFA</div>
                </div>
                <div className="rate-divider"></div>
                <div className="rate-value">
                  <div className="rate-label">Vente</div>
                  <div className="rate-amount">{rate.sell} FCFA</div>
                </div>
              </div>

              <div className="rate-indicator">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4L10 16M10 16L6 12M10 16L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Cliquez pour plus d'infos</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rates-notice">
          <div className="notice-icon">ℹ️</div>
          <div className="notice-text">
            <strong>Note importante :</strong> Les taux affichés sont donnés à titre indicatif et peuvent varier selon le montant de la transaction. 
            Pour les montants importants, contactez-nous pour obtenir un taux personnalisé.
          </div>
        </div>
      </div>
    </section>
  );
}
