/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
      
          {
            protocol: 'https',
            hostname: 'adomex.pockethost.io',
            port: '',
            pathname: '/api/files/**',
          },
        ],
      },
};

export default nextConfig;
