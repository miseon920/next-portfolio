/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
        appDir: true
    },
    images: {
        formats: ['image/avif', 'image/webp']
    }
}

module.exports = nextConfig
