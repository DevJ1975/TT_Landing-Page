/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // To host under a subdirectory on Bluehost (e.g. /soteria/), uncomment and
  // set the matching basePath + assetPrefix below. Leave blank for root-domain hosting.
  // basePath: '/soteria',
  // assetPrefix: '/soteria',
};

module.exports = nextConfig;
