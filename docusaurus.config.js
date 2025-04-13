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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Only modify if internationalization is required
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // À remplacer par votre identifiant Google Analytics
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/marbo-finance-social-card.jpg',
      navbar: {
        title: 'Marbo Finance',
        logo: {
          alt: 'Marbo Finance Logo',
          src: 'img/logo.svg',
        },
        items: [
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
            title: 'Expertise',
            items: [
              {
                label: 'Protection Patrimoniale',
                to: '/expertise/protection',
              },
              {
                label: 'Optimisation Fiscale',
                to: '/expertise/fiscalite',
              },
              {
                label: 'Transmission',
                to: '/expertise/transmission',
              },
              {
                label: 'Investissement',
                to: '/expertise/investissement',
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
            title: 'À propos',
            items: [
              {
                label: 'Notre Cabinet',
                to: '/a-propos',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'Mentions Légales',
                to: '/mentions-legales',
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
        copyright: `© ${new Date().getFullYear()} Marbo Finance | Cabinet de gestion de patrimoine indépendant | 11 B Avenue Emile Baudot, 91300 Massy`,
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
    }),
};

module.exports = config;
