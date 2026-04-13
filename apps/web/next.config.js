/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
