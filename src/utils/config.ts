// src/config.js
export const siteConfig = {
  canonicalUrl: import.meta.env.PROD
    ? import.meta.env.PUBLIC_CANONICAL_URL // URL real en producción
    : 'http://localhost:4321', // URL local durante el desarrollo
  siteName: 'ProTrack Solutions',
  description:
    'Sistema de gestión de producción y seguimiento de pedidos en tiempo real.',
  social: {
    linkedin: 'https://linkedin.com/company/protrack',
    twitter: 'https://twitter.com/protrack_team',
  },
};
