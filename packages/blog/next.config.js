/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    localeDetection: false,
  },
};

module.exports = nextConfig;
