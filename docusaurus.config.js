// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Marbo Finance',
  tagline: 'Votre patrimoine mérite une expertise indépendante',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://marbo-finance.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config (not used for AWS S3)
  organizationName: 'fossouo',
  projectName: 'marbo-finance-website',

  // Modifié de "throw" à "warn" pour permettre la construction avec des liens brisés
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Only modify if internationalization is required
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  // Déplacer metadata vers customFields pour compatibilité
  customFields: {
    keywords: 'gestion de patrimoine, finance, indépendant, fiscalité, investissement, retraite, transmission, protection, Île-de-France, Massy',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    'revisit-after': '7 days',
    author: 'Marbo Finance',
    'og:type': 'website',
    'og:site_name': 'Marbo Finance',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'expertise', // Personnalisé pour la stratégie SEO
          // Supprimez ce commentaire pour permettre l'édition des pages de docs
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'actualites', // Personnalisé pour la stratégie SEO
          // Supprimez ce commentaire pour permettre l'édition des pages de blog
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarTitle: 'Articles récents',
          blogSidebarCount: 10,
          postsPerPage: 9,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          feedOptions: {
            type: 'all',
            title: 'Marbo Finance - Actualités Patrimoniales',
            description: 'Suivez les dernières actualités et conseils patrimoniaux de Marbo Finance',
            copyright: `© ${new Date().getFullYear()} Marbo Finance`,
            language: 'fr',
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // À remplacer par votre identifiant Google Analytics
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  // Suppression des plugins qui ne sont pas installés
  // Vous pourrez les ajouter plus tard si nécessaire après installation des packages

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/marbo-finance-social-card.jpg',
      metadata: [
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      navbar: {
        title: 'Marbo Finance',
        logo: {
          alt: 'Marbo Finance Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/notre-cabinet', 
            label: 'Notre Cabinet',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'expertiseSidebar',
            position: 'left',
            label: 'Expertise Patrimoniale',
          },
          {
            to: '/solutions', 
            label: 'Solutions',
            position: 'left',
          },
          {
            to: '/actualites', 
            label: 'Actualités',
            position: 'left',
          },
          {
            to: '/contact', 
            label: 'Contact',
            position: 'right',
            className: 'navbar-contact-link',
          },
          {
            to: '/simulation', 
            label: 'Simulation',
            position: 'right',
            className: 'navbar-simulator-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Notre Cabinet',
            items: [
              {
                label: 'Qui sommes-nous',
                to: '/notre-cabinet',
              },
              {
                label: 'Notre équipe',
                to: '/notre-cabinet/equipe',
              },
              {
                label: 'Notre méthode',
                to: '/notre-cabinet/methode',
              },
              {
                label: 'Témoignages',
                to: '/notre-cabinet/temoignages',
              },
            ],
          },
          {
            title: 'Expertise',
            items: [
              {
                label: 'Protection Patrimoniale',
                to: '/expertise/protection/introduction',
              },
              {
                label: 'Optimisation Fiscale',
                to: '/expertise/fiscalite/introduction',
              },
              {
                label: 'Transmission',
                to: '/expertise/protection/transmission-entreprise',
              },
              {
                label: 'Investissement',
                to: '/expertise/investissement/introduction',
              },
            ],
          },
          {
            title: 'Solutions',
            items: [
              {
                label: 'Pour Entrepreneurs',
                to: '/solutions/entrepreneurs',
              },
              {
                label: 'Pour Cadres Dirigeants',
                to: '/solutions/cadres-dirigeants',
              },
              {
                label: 'Préparation Retraite',
                to: '/solutions/retraite',
              },
              {
                label: 'Diversification Patrimoniale',
                to: '/solutions/diversification',
              },
            ],
          },
          {
            title: 'Ressources et Contact',
            items: [
              {
                label: 'Actualités',
                to: '/actualites',
              },
              {
                label: 'Guide & Fiches pratiques',
                to: '/ressources/guides',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
            ],
          },
          {
            title: 'Légal',
            items: [
              {
                label: 'Mentions Légales',
                to: '/mentions-legales',
              },
              {
                label: 'Politique de confidentialité',
                to: '/politique-confidentialite',
              },
              {
                label: 'Conditions d\'utilisation',
                to: '/conditions-utilisation',
              },
            ],
          },
          {
            title: 'Réseaux',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/marbo-finance/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Marbo Finance | Cabinet de gestion de patrimoine indépendant | 11 B Avenue Emile Baudot, 91300 Massy | SIREN: 877985275`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'support_us',
        content: 'Nouveau ! Découvrez notre simulateur d\'optimisation fiscale 2025 <a href="/simulation">ici</a>',
        backgroundColor: '#004d95',
        textColor: '#fff',
        isCloseable: true,
      },
      // Configuration schema.org
      headTags: [
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Marbo Finance',
            'url': 'https://marbo-finance.fr',
            'logo': 'https://marbo-finance.fr/img/logo.svg',
            'description': 'Cabinet de gestion de patrimoine indépendant en Île-de-France spécialisé dans l\'optimisation fiscale, la protection patrimoniale et la préparation retraite.',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '11 B Avenue Emile Baudot',
              'addressLocality': 'Massy',
              'postalCode': '91300',
              'addressCountry': 'FR'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+33-X-XX-XX-XX-XX',
              'contactType': 'customer service'
            },
            'sameAs': [
              'https://www.linkedin.com/company/marbo-finance/'
            ]
          }),
        },
      ],
    }),
};

module.exports = config;