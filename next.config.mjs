/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        const BASE_API_URL = process.env.BASE_API_URL || 'http://localhost:3000';
        return [
            {
                source: '/api/:path*',
                destination: `${BASE_API_URL}/api/:path*`,
            },
        ];
    },
};

export default nextConfig;
