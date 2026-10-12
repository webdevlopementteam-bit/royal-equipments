/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [100, 75],
  },
  allowedDevOrigins: ["192.168.1.48"],
};

export default nextConfig;
