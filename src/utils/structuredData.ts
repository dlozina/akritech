import content from '../data/content.json';
import { AppConfig } from './AppConfig';

const organizationId = `${AppConfig.url}#organization`;
const personId = `${AppConfig.url}#dino-lozina`;
const websiteId = `${AppConfig.url}#website`;

// Only describe facts also presented in the public page content.
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: AppConfig.site_name,
      url: AppConfig.url,
      description: AppConfig.description,
      email: content.contact.email,
      logo: {
        '@type': 'ImageObject',
        url: `${AppConfig.url}assets/images/logo.png`,
        width: 416,
        height: 412,
      },
      foundingDate: '2022',
      founder: { '@id': personId },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Split',
        addressCountry: 'HR',
      },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Dino Lozina',
      url: `${AppConfig.url}#about`,
      jobTitle: 'Software engineer and founder',
      worksFor: { '@id': organizationId },
      sameAs: [
        'https://github.com/dlozina',
        'https://www.linkedin.com/in/dino-lozina-6a049779/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: AppConfig.site_name,
      url: AppConfig.url,
      inLanguage: AppConfig.locale,
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'WebPage',
      '@id': `${AppConfig.url}#webpage`,
      name: AppConfig.title,
      description: AppConfig.description,
      url: AppConfig.url,
      inLanguage: AppConfig.locale,
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: AppConfig.socialImage,
      },
    },
  ],
};
