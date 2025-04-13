import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link className="hero__button" to="/contact">
            Prendre rendez-vous
          </Link>
          <Link className="hero__button--outline" to="/expertise">
            Découvrir notre expertise
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}) {
  return (
    <div className="col col--4 feature">
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className="feature__title">{title}</Heading>
        <p>{description}</p>
        {link && (
          <Link to={link} className="button button--outline button--primary">
            En savoir plus
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Cabinet de gestion de patrimoine indépendant en Île-de-France">
      <HomepageHeader />
      <main>
        <section className="section">
          <div className="container">
            <Heading as="h2" className="section__title">
              Nos services
            </Heading>
            <div className="row">
              <Feature
                title="Protection & Transmission"
                description="Protégez votre patrimoine et vos proches grâce à des stratégies adaptées à votre situation personnelle et professionnelle."
                link="/expertise/protection/introduction"
              />
              <Feature
                title="Optimisation Fiscale"
                description="Réduisez votre pression fiscale grâce à des solutions légales et adaptées à votre situation."
                link="/expertise/fiscalite/introduction"
              />
              <Feature
                title="Investissement & Diversification"
                description="Diversifiez et optimisez vos placements grâce à une allocation d'actifs personnalisée et indépendante."
                link="/expertise/investissement/introduction"
              />
            </div>
          </div>
        </section>
        
        <section className="section section--alt">
          <div className="container">
            <Heading as="h2" className="section__title">
              Notre approche
            </Heading>
            <div className="row">
              <div className="col col--6">
                <Heading as="h3">Cabinet indépendant nouvelle génération</Heading>
                <p>
                  Marbo Finance est un cabinet de gestion de patrimoine indépendant qui allie expertise juridique et financière avec une approche digitale moderne. Notre indépendance garantit des conseils objectifs, sans conflit d'intérêts.
                </p>
              </div>
              <div className="col col--6">
                <Heading as="h3">Une expertise globale</Heading>
                <p>
                  Notre équipe pluridisciplinaire vous accompagne dans tous les aspects de votre patrimoine : constitution, développement, protection et transmission. Nous élaborons des stratégies sur-mesure adaptées à votre situation et à vos objectifs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
