/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 't.me',
            },
            {
                protocol: 'https',
                hostname: 'vk.com',
            },
        ],
    },
};

export default nextConfig;
