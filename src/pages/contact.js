import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Contactez notre cabinet de gestion de patrimoine indépendant">
      <main className="container margin-vert--xl">
        <Heading as="h1">Contactez-nous</Heading>
        
        <div className="row">
          <div className="col col--6">
            <p>
              Nous sommes disponibles pour répondre à vos questions et vous accompagner dans vos projets patrimoniaux. N'hésitez pas à nous contacter pour prendre rendez-vous.
            </p>
            
            <h3>Nos coordonnées</h3>
            <p>
              <strong>Adresse :</strong><br />
              Marbo Finance<br />
              11 B Avenue Emile Baudot<br />
              91300 Massy, France
            </p>
            
            <p>
              <strong>Téléphone :</strong><br />
              +33 (0)1 XX XX XX XX
            </p>
            
            <p>
              <strong>Email :</strong><br />
              contact@marbo-finance.fr
            </p>
            
            <h3>Horaires d'ouverture</h3>
            <p>
              Du lundi au vendredi : 9h00 - 18h00<br />
              Samedi : Sur rendez-vous
            </p>
          </div>
          
          <div className="col col--6">
            <div className="form-contact">
              <h3>Formulaire de contact</h3>
              <p>Complétez le formulaire ci-dessous pour nous faire part de votre demande.</p>
              
              <form id="contact-form" method="POST" action="#">
                <div>
                  <label htmlFor="name">Nom *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div>
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                
                <div>
                  <label htmlFor="subject">Sujet *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Choisissez un sujet</option>
                    <option value="bilan-patrimonial">Demande de bilan patrimonial</option>
                    <option value="optimisation-fiscale">Optimisation fiscale</option>
                    <option value="preparation-retraite">Préparation retraite</option>
                    <option value="investissement">Stratégie d'investissement</option>
                    <option value="transmission">Transmission patrimoniale</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <div>
                  <p className="small">
                    * Champs obligatoires
                  </p>
                </div>
                
                <div>
                  <button type="submit" className="button button--primary">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
