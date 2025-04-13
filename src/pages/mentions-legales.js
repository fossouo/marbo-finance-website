import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function LegalNotice() {
  return (
    <Layout
      title="Mentions Légales"
      description="Mentions légales du site Marbo Finance">
      <main className="container margin-vert--xl">
        <Heading as="h1">Mentions Légales</Heading>
        
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2">Éditeur du site</Heading>
            <p>
              <strong>Marbo Finance</strong><br />
              11 B Avenue Emile Baudot<br />
              91300 Massy, France<br />
              <br />
              SASU au capital de 10 000 €<br />
              RCS Évry : XXX XXX XXX<br />
              N° TVA intracommunautaire : FR XX XXX XXX XXX<br />
              <br />
              Téléphone : +33 (0)1 XX XX XX XX<br />
              Email : contact@marbo-finance.fr
            </p>
            
            <Heading as="h2">Directeur de la publication</Heading>
            <p>
              M. David Pachong, Président de Marbo Finance
            </p>
            
            <Heading as="h2">Hébergement</Heading>
            <p>
              Ce site est hébergé par Amazon Web Services (AWS)<br />
              Amazon Web Services, Inc.<br />
              P.O. Box 81226<br />
              Seattle, WA 98108-1226, USA
            </p>
            
            <Heading as="h2">Activité réglementée</Heading>
            <p>
              Marbo Finance est un cabinet de gestion de patrimoine indépendant exerçant sous les statuts suivants :
            </p>
            <ul>
              <li>Conseiller en Investissements Financiers (CIF) enregistré auprès de l'ANACOFI-CIF sous le numéro XXXXXX, association agréée par l'Autorité des Marchés Financiers (AMF)</li>
              <li>Courtier en Assurance (COA), enregistré à l'ORIAS sous le numéro XXXXXX (www.orias.fr)</li>
              <li>Courtier en Opérations de Banque et Services de Paiement (COBSP), enregistré à l'ORIAS sous le numéro XXXXXX (www.orias.fr)</li>
            </ul>
            <p>
              Marbo Finance dispose d'une Garantie Financière et Responsabilité Civile Professionnelle conformes aux articles L530-1 et L530-2 du Code des Assurances, souscrite auprès de XXXXXX sous le n° XXXXXX.
            </p>
            <p>
              Les activités de CIF, COA et COBSP sont placées sous le contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR), 4 Place de Budapest, 75436 Paris.
            </p>
            
            <Heading as="h2">Propriété intellectuelle</Heading>
            <p>
              L'ensemble du contenu du site Marbo Finance (textes, graphismes, logos, images, vidéos, etc.) est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction ou représentation, intégrale ou partielle, du site ou de l'un quelconque des éléments qui le composent, par quelque procédé que ce soit, sans l'autorisation expresse de Marbo Finance, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            
            <Heading as="h2">Protection des données personnelles</Heading>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition aux données personnelles vous concernant.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter Marbo Finance à l'adresse suivante : dpo@marbo-finance.fr.
            </p>
            <p>
              Pour plus d'informations sur la manière dont nous traitons vos données, consultez notre Politique de Confidentialité.
            </p>
            
            <Heading as="h2">Cookies</Heading>
            <p>
              Ce site utilise des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. Vous pouvez à tout moment désactiver les cookies en paramétrant votre navigateur.
            </p>
            
            <Heading as="h2">Limitation de responsabilité</Heading>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et mises à jour régulièrement, mais peuvent toutefois contenir des inexactitudes ou des omissions.
            </p>
            <p>
              Marbo Finance ne saurait garantir l'exactitude, la complétude et l'actualité des informations diffusées sur son site. Les informations présentes sur ce site ne sont données qu'à titre indicatif et ne sauraient constituer des conseils juridiques, fiscaux ou d'investissement.
            </p>
            <p>
              En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>
            
            <Heading as="h2">Loi applicable et juridiction</Heading>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            
            <p className="text--right">
              Dernière mise à jour : Avril 2025
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
