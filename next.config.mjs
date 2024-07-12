/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', 'cdn.example.com'],
    },
    basePath: "/ayush-h-mishra",
    output: "export",  
    reactStrictMode: true,
};

export default nextConfig;

