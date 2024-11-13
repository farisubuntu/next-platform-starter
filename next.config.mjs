/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "znifcleovphhlszqmosc.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    // https://nextjs.org/docs/app/building-your-application/configuring/typescript --1
    typedRoutes: true,
  },
};

export default nextConfig;
