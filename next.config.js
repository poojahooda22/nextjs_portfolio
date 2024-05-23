// /** @type {import('next').NextConfig} */
// const nextConfig = { 
//     output: "export",
//     distDir: "build",
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "images.unsplash.com",
//             },
//         ],
//     },
//     experimental: {
//         serverActions: true,
//     }
// };

// module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    experimental: {
        serverActions: true,
    }
};
   
module.exports = nextConfig
