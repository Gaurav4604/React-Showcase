/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: "/", destination: "/signup", permanent: true },
  ],
};

module.exports = nextConfig;
