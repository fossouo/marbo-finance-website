/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  expertiseSidebar: [
    {
      type: 'category',
      label: 'Protection & Transmission',
      items: [
        'protection/introduction',
        'protection/restructuration-patrimoniale',
        'protection/protection-conjoint',
        'protection/transmission-entreprise',
      ],
    },
    {
      type: 'category',
      label: 'Fiscalité & Optimisation',
      items: [
        'fiscalite/introduction',
        'fiscalite/declaration-ifi',
        'fiscalite/holdings-patrimoniales',
        'fiscalite/optimisation-ir-is',
      ],
    },
    {
      type: 'category',
      label: 'Investissement & Diversification',
      items: [
        'investissement/introduction',
        'investissement/immobilier-professionnel',
        'investissement/private-equity',
        'investissement/strategies-multi-supports',
      ],
    },
    {
      type: 'category',
      label: 'Préparation & Anticipation',
      items: [
        'preparation/introduction',
        'preparation/preparation-retraite',
        'preparation/defiscalisation',
        'preparation/bilan-patrimonial',
      ],
    },
    {
      type: 'category',
      label: 'Ressources',
      items: [
        'ressources/glossaire',
        'ressources/faq',
        'ressources/guides',
      ],
    },
  ],
};

module.exports = sidebars;
