/** @type {import('next').NextConfig} */        
const nextConfig = {
    images: {
        domains: ['github.com', 'cdn.example.com', 'bf.kendal.org', 'images.unsplash.com'],
        unoptimized: false,
    },
    basePath: "",
    output: "export",  
    trailingSlash: true,
    reactStrictMode: true,
};

export default nextConfig;

