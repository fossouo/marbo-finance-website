import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact() {
  return (
    <Layout title="Contact" description="Contactez Marbo Finance pour toute question sur la gestion de patrimoine">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1" className="text--center">Contactez-nous</Heading>
            <p className="text--center margin-bottom--lg">
              Pour toute question sur la gestion de votre patrimoine, n'hésitez pas à nous contacter.
              Notre équipe d'experts vous répondra dans les plus brefs délais.
            </p>

            <form className="form-contact" id="contactForm">
              <div className="row">
                <div className="col col--6">
                  <label htmlFor="firstName">Prénom *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="col col--6">
                  <label htmlFor="lastName">Nom *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>

              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" name="phone" />

              <label htmlFor="subject">Sujet *</label>
              <select id="subject" name="subject" required>
                <option value="">-- Choisissez un sujet --</option>
                <option value="rdv">Demande de rendez-vous</option>
                <option value="info">Demande d'information</option>
                <option value="collab">Collaboration professionnelle</option>
                <option value="autre">Autre</option>
              </select>

              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <div className="checkbox-container margin-vert--md">
                <input type="checkbox" id="consent" name="consent" required />
                <label htmlFor="consent">
                  J'accepte que Marbo Finance traite mes données personnelles conformément à sa politique de confidentialité.
                </label>
              </div>

              <div className="text--center margin-top--lg">
                <button type="submit" className="button button--primary button--lg">
                  Envoyer
                </button>
              </div>
            </form>

            <div className="margin-top--xl">
              <Heading as="h2">Informations de contact</Heading>
              <div className="row">
                <div className="col col--6">
                  <div className="card margin-vert--md">
                    <div className="card__header">
                      <Heading as="h3">Adresse</Heading>
                    </div>
                    <div className="card__body">
                      <p>
                        Marbo Finance<br />
                        11 B Avenue Emile Baudot<br />
                        91300 Massy<br />
                        France
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col--6">
                  <div className="card margin-vert--md">
                    <div className="card__header">
                      <Heading as="h3">Contact</Heading>
                    </div>
                    <div className="card__body">
                      <p>
                        <strong>Téléphone :</strong> +33 1 XX XX XX XX<br />
                        <strong>Email :</strong> contact@marbo-finance.fr<br />
                        <strong>LinkedIn :</strong> <a href="https://www.linkedin.com/company/marbo-finance/" target="_blank" rel="noopener noreferrer">Marbo Finance</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
