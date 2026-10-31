/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  trailingSlash: true,
  images: {
    qualities: [100, 75],
  },
  allowedDevOrigins: ["192.168.1.48"],
  async redirects() {
    return [
      {
        source: "/sweet-display-counter-manufacturer-in-delhi",
        destination: "/sweet-display-counter-manufacturer/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
