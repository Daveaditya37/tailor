/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**', // Allows all domains
            },
          ],
       // Add allowed domains here
    },
};

export default nextConfig;
