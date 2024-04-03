/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Resolve the @ alias to the root directory
    config.resolve.alias['@'] = __dirname;

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
