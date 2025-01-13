// /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', 'cdn.example.com', 'bf.kendal.org', 'images.unsplash.com'],
    },
    basePath: "",
    output: "export",  
    reactStrictMode: true,
};

export default nextConfig;

