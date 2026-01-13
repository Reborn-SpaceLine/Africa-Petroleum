import { FileText, Shield, Scale, Info } from 'lucide-react';
import '../styles/Legal.css';

type LegalPage = 'mentions' | 'confidentialite' | 'cgu';

interface LegalProps {
  page?: LegalPage;
}

export default function Legal({ page = 'mentions' }: LegalProps) {
  const getPageContent = () => {
    switch (page) {
      case 'mentions':
        return {
          title: 'Mentions Légales',
          icon: Info,
          content: (
            <>
              <h2>1. Informations légales</h2>
              <p>
                <strong>Raison sociale :</strong> Africa Petroleum S.A.<br />
                <strong>Siège social :</strong> Cameroun<br />
                <strong>Téléphone :</strong> +237 6 96 44 99 08<br />
                <strong>Email :</strong> contact@africapetroleum.cm<br />
                <strong>Site web :</strong> www.africapetroleum.cm
              </p>

              <h2>2. Directeur de publication</h2>
              <p>
                Le directeur de la publication est le représentant légal d'Africa Petroleum S.A.
              </p>

              <h2>3. Hébergement</h2>
              <p>
                Ce site est hébergé par [Nom de l'hébergeur].<br />
                Adresse : [Adresse de l'hébergeur]
              </p>

              <h2>4. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation camerounaise et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>

              <h2>5. Protection des données</h2>
              <p>
                Conformément à la loi camerounaise sur la protection des données personnelles, vous disposez d'un 
                droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, 
                contactez-nous à l'adresse : contact@africapetroleum.cm
              </p>

              <h2>6. Limitation de responsabilité</h2>
              <p>
                Africa Petroleum S.A. ne pourra être tenue responsable des dommages directs ou indirects causés au 
                matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel 
                ne répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </>
          )
        };
      case 'confidentialite':
        return {
          title: 'Politique de Confidentialité',
          icon: Shield,
          content: (
            <>
              <h2>1. Collecte des données</h2>
              <p>
                Africa Petroleum collecte des informations personnelles lorsque vous utilisez notre site web, 
                notamment lorsque vous vous inscrivez à notre newsletter, remplissez un formulaire de contact, 
                ou utilisez nos services.
              </p>

              <h2>2. Utilisation des données</h2>
              <p>
                Les données collectées sont utilisées pour :
              </p>
              <ul>
                <li>Répondre à vos demandes et vous fournir nos services</li>
                <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>

              <h2>3. Protection des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.
              </p>

              <h2>4. Partage des données</h2>
              <p>
                Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers. Vos données 
                peuvent être partagées uniquement avec nos prestataires de services de confiance qui nous aident 
                à exploiter notre site web, sous réserve qu'ils acceptent de garder ces informations confidentielles.
              </p>

              <h2>5. Vos droits</h2>
              <p>
                Conformément à la législation en vigueur au Cameroun, vous disposez des droits suivants :
              </p>
              <ul>
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement de vos données</li>
              </ul>

              <h2>6. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez 
                configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines 
                fonctionnalités du site.
              </p>

              <h2>7. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, contactez-nous à : 
                contact@africapetroleum.cm
              </p>
            </>
          )
        };
      case 'cgu':
        return {
          title: 'Conditions Générales d\'Utilisation',
          icon: Scale,
          content: (
            <>
              <h2>1. Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web 
                d'Africa Petroleum. En accédant à ce site, vous acceptez sans réserve ces conditions.
              </p>

              <h2>2. Accès au site</h2>
              <p>
                L'accès au site est gratuit. Tous les frais supportés par l'utilisateur pour accéder au service 
                (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
              </p>

              <h2>3. Utilisation du site</h2>
              <p>
                L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et conformément 
                aux présentes CGU. Il est strictement interdit :
              </p>
              <ul>
                <li>D'utiliser le site à des fins illégales ou non autorisées</li>
                <li>De tenter d'accéder de manière non autorisée à tout système ou réseau</li>
                <li>De transmettre des virus, codes malveillants ou tout autre élément nuisible</li>
                <li>De collecter des informations sur d'autres utilisateurs</li>
              </ul>

              <h2>4. Propriété intellectuelle</h2>
              <p>
                Tous les éléments du site (textes, images, logos, etc.) sont la propriété exclusive d'Africa Petroleum 
                ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle. Toute reproduction 
                ou utilisation non autorisée est strictement interdite.
              </p>

              <h2>5. Limitation de responsabilité</h2>
              <p>
                Africa Petroleum s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. 
                Cependant, l'entreprise ne peut garantir l'exactitude, la complétude ou l'actualité des informations 
                mises à disposition. L'utilisateur reconnaît utiliser ces informations sous sa seule responsabilité.
              </p>

              <h2>6. Liens externes</h2>
              <p>
                Le site peut contenir des liens vers des sites externes. Africa Petroleum n'exerce aucun contrôle sur 
                ces sites et décline toute responsabilité quant à leur contenu.
              </p>

              <h2>7. Modification des CGU</h2>
              <p>
                Africa Petroleum se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont 
                invités à les consulter régulièrement.
              </p>

              <h2>8. Droit applicable</h2>
              <p>
                Les présentes CGU sont régies par le droit camerounais. Tout litige relatif à leur interprétation 
                et/ou à leur exécution relève des tribunaux compétents du Cameroun.
              </p>
            </>
          )
        };
      default:
        return null;
    }
  };

  const pageData = getPageContent();
  if (!pageData) return null;

  const IconComponent = pageData.icon;

  return (
    <section className="legal-page" id="legal">
      <div className="container">
        <div className="legal-header">
          <div className="legal-icon-wrapper">
            <IconComponent size={32} />
          </div>
          <h1 className="legal-title">{pageData.title}</h1>
          <p className="legal-subtitle">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="legal-content">
          {pageData.content}
        </div>

        <div className="legal-footer">
          <p>
            Pour toute question concernant ces informations, contactez-nous à{' '}
            <a href="mailto:contact@africapetroleum.cm">contact@africapetroleum.cm</a>
          </p>
        </div>
      </div>
    </section>
  );
}

