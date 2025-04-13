import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function About() {
  return (
    <Layout
      title="À propos"
      description="Découvrez Marbo Finance, cabinet de gestion de patrimoine indépendant">
      <main className="container margin-vert--xl">
        <Heading as="h1">Notre Cabinet</Heading>
        
        <div className="row margin-bottom--lg">
          <div className="col col--8 col--offset-2">
            <p className="lead">
              Marbo Finance est un cabinet de gestion de patrimoine indépendant nouvelle génération, alliant expertise juridique et financière avec une approche digitale moderne.
            </p>
          </div>
        </div>
        
        <div className="row margin-bottom--xl">
          <div className="col col--6">
            <Heading as="h2">Notre Vision</Heading>
            <p>
              Démocratiser l'accès à une gestion de patrimoine indépendante et transparente, traditionnellement réservée à une clientèle fortunée, en offrant un service d'excellence accessible aux cadres et entrepreneurs.
            </p>
            
            <Heading as="h2">Notre Mission</Heading>
            <p>
              Accompagner nos clients dans la constitution, le développement, la protection et la transmission de leur patrimoine, en leur proposant des stratégies sur-mesure et des solutions adaptées à leurs objectifs.
            </p>
            
            <Heading as="h2">Nos Valeurs</Heading>
            <ul>
              <li><strong>Indépendance</strong> : Nous ne sommes liés à aucun établissement financier et sélectionnons les solutions les plus adaptées à vos besoins.</li>
              <li><strong>Transparence</strong> : Notre modèle de rémunération est basé sur des honoraires clairement définis, sans commissions cachées.</li>
              <li><strong>Excellence</strong> : Nous nous engageons à fournir un service de haute qualité, avec une expertise technique pointue et un suivi personnalisé.</li>
              <li><strong>Innovation</strong> : Nous intégrons les outils digitaux pour améliorer l'expérience client et optimiser notre accompagnement.</li>
            </ul>
          </div>
          
          <div className="col col--6">
            <Heading as="h2">Notre Équipe</Heading>
            
            <div className="card margin-bottom--md">
              <div className="card__header">
                <h3>David Pachong</h3>
                <p>Fondateur & Conseiller en Gestion de Patrimoine</p>
              </div>
              <div className="card__body">
                <p>
                  Ancien banquier privé avec plus de 15 ans d'expérience, David a créé Marbo Finance pour offrir un conseil patrimonial indépendant et sur-mesure. Il est titulaire d'un Master en Gestion de Patrimoine et des certifications CIF, IOBSP et IAS.
                </p>
              </div>
            </div>
            
            <Heading as="h2">Nos Partenaires</Heading>
            <p>
              Nous travaillons en étroite collaboration avec un réseau de partenaires sélectionnés pour la qualité de leurs services et produits :
            </p>
            <ul>
              <li>Sociétés de gestion indépendantes</li>
              <li>Compagnies d'assurance</li>
              <li>Banques privées</li>
              <li>Experts immobiliers</li>
              <li>Notaires</li>
              <li>Avocats fiscalistes</li>
              <li>Experts-comptables</li>
            </ul>
          </div>
        </div>
        
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2">Découvrez Nos Services</Heading>
            <p>
              Nous vous proposons un accompagnement global pour tous vos projets patrimoniaux.
            </p>
            <div className="margin-top--lg">
              <Link to="/expertise" className="button button--primary margin-right--md">
                Nos expertises
              </Link>
              <Link to="/contact" className="button button--outline button--primary">
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
