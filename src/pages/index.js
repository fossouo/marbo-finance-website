import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import BlogPostCard from '@site/src/components/BlogPostCard';
import { usePluginData } from '@docusaurus/useGlobalData';

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

function Feature({title, description, link, icon}) {
  return (
    <div className="col col--4 feature">
      <div className="text--center padding-horiz--md">
        {icon && <div className="feature__icon">{icon}</div>}
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

function ServiceFeature({title, description, link, imageUrl, alt}) {
  return (
    <div className="service-feature">
      <div className="service-feature__content">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && (
          <Link to={link} className="button button--outline button--secondary">
            Découvrir
          </Link>
        )}
      </div>
      {imageUrl && (
        <div className="service-feature__image">
          <img src={imageUrl} alt={alt || title} />
        </div>
      )}
    </div>
  );
}

function Testimonial({quote, author, position, company}) {
  return (
    <div className="testimonial">
      <div className="testimonial__content">
        <blockquote>"{quote}"</blockquote>
        <div className="testimonial__author">
          <p><strong>{author}</strong></p>
          {position && company && (
            <p>{position}, {company}</p>
          )}
          {position && !company && (
            <p>{position}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function LatestArticles() {
  // Cette fonction simule la récupération des derniers articles du blog
  // Dans une implémentation réelle, vous utiliseriez usePluginData pour récupérer les données
  const latestPosts = [
    {
      id: 1,
      title: "Guide complet des stratégies de défiscalisation immobilière en 2025",
      description: "Découvrez les stratégies d'optimisation fiscale immobilière les plus efficaces en 2025.",
      permalink: "/actualites/guide-optimisation-fiscale-immobilier-2025",
      date: "10 Avril 2025"
    },
    {
      id: 2,
      title: "Déclaration IFI 2024 - Les points d'attention à ne pas négliger",
      description: "La période de déclaration de l'Impôt sur la Fortune Immobilière approche, voici les points clés à surveiller.",
      permalink: "/actualites/ifi-2024-declaration",
      date: "15 Mars 2024"
    },
    {
      id: 3,
      title: "Anticiper sa retraite quand on est dirigeant d'entreprise",
      description: "Comment préparer efficacement sa retraite lorsqu'on est dirigeant d'entreprise ? Nos conseils d'experts.",
      permalink: "/actualites/retraite-dirigeant",
      date: "20 Février 2024"
    }
  ];

  return (
    <section className="latest-articles">
      <div className="container">
        <Heading as="h2" className="section__title text--center">
          Nos derniers articles
        </Heading>
        <div className="row">
          {latestPosts.map((post) => (
            <div key={post.id} className="col col--4">
              <div className="card blog-post-card">
                <div className="card__header">
                  <div className="blog-post-date">{post.date}</div>
                  <Heading as="h3" className="blog-post-title">
                    <Link to={post.permalink}>{post.title}</Link>
                  </Heading>
                </div>
                <div className="card__body">
                  <p>{post.description}</p>
                </div>
                <div className="card__footer">
                  <Link to={post.permalink} className="button button--link">
                    Lire l'article
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text--center margin-top--lg">
          <Link to="/actualites" className="button button--secondary">
            Voir tous nos articles
          </Link>
        </div>
      </div>
    </section>
  );
}

function SimulatorCallout() {
  return (
    <section className="simulator-callout">
      <div className="container">
        <div className="simulator-card">
          <div className="simulator-card__content">
            <Heading as="h2">Simulateur patrimonial</Heading>
            <p>
              Évaluez rapidement votre situation patrimoniale et identifiez les optimisations possibles grâce à notre simulateur en ligne.
            </p>
          </div>
          <div className="simulator-card__cta">
            <Link to="/simulation" className="button button--primary button--lg">
              Accéder au simulateur
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "L'accompagnement de Marbo Finance a été décisif dans l'optimisation de ma transmission d'entreprise. Leur expertise et leur pédagogie m'ont permis de comprendre les enjeux et de prendre les bonnes décisions.",
      author: "Jean D.",
      position: "Chef d'entreprise",
      company: ""
    },
    {
      quote: "Grâce à Marbo Finance, j'ai pu mettre en place une stratégie d'investissement cohérente avec mes objectifs de préparation à la retraite. Leur approche sur-mesure et leur suivi régulier sont très appréciables.",
      author: "Marie L.",
      position: "Cadre dirigeante",
      company: ""
    },
    {
      quote: "La réactivité et le professionnalisme de l'équipe de Marbo Finance m'ont permis de réduire significativement ma pression fiscale tout en diversifiant mon patrimoine. Je recommande vivement leurs services.",
      author: "Thomas B.",
      position: "Médecin libéral",
      company: ""
    }
  ];

  return (
    <section className="testimonials-section section section--alt">
      <div className="container">
        <Heading as="h2" className="section__title text--center">
          Ils nous font confiance
        </Heading>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Cabinet de gestion de patrimoine indépendant | ${siteConfig.title}`}
      description="Marbo Finance, cabinet de gestion de patrimoine indépendant en Île-de-France. Expertise en optimisation fiscale, préparation retraite et transmission de patrimoine.">
      <HomepageHeader />
      <main>
        <section className="section">
          <div className="container">
            <Heading as="h2" className="section__title text--center">
              Nos expertises patrimoniales
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
            <Heading as="h2" className="section__title text--center">
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
            <div className="text--center margin-top--lg">
              <Link to="/notre-cabinet" className="button button--secondary">
                Découvrir notre cabinet
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Heading as="h2" className="section__title text--center">
              Solutions adaptées à votre profil
            </Heading>
            <div className="solution-cards">
              <div className="solution-card">
                <Heading as="h3">Entrepreneurs</Heading>
                <p>Solutions dédiées à la structuration juridique et fiscale de votre patrimoine d'entrepreneur.</p>
                <Link to="/solutions/entrepreneurs" className="button button--outline">Découvrir</Link>
              </div>
              <div className="solution-card">
                <Heading as="h3">Cadres Dirigeants</Heading>
                <p>Optimisation de vos revenus, préparation à la retraite et stratégies de défiscalisation.</p>
                <Link to="/solutions/cadres-dirigeants" className="button button--outline">Découvrir</Link>
              </div>
              <div className="solution-card">
                <Heading as="h3">Professions Libérales</Heading>
                <p>Accompagnement spécifique pour les professionnels libéraux et les médecins.</p>
                <Link to="/solutions/professions-liberales" className="button button--outline">Découvrir</Link>
              </div>
              <div className="solution-card">
                <Heading as="h3">Investisseurs</Heading>
                <p>Diversification patrimoniale et optimisation de vos investissements.</p>
                <Link to="/solutions/investisseurs" className="button button--outline">Découvrir</Link>
              </div>
            </div>
          </div>
        </section>

        <SimulatorCallout />
        
        <LatestArticles />
        
        <TestimonialsSection />

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content text--center">
              <Heading as="h2">Prêt à optimiser votre patrimoine ?</Heading>
              <p>Prenez rendez-vous avec l'un de nos experts pour un premier entretien découverte gratuit et sans engagement.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="button button--primary button--lg">
                  Prendre rendez-vous
                </Link>
                <Link to="/simulation" className="button button--secondary button--lg">
                  Faire une simulation
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
