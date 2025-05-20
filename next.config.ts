import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// {
//   hostname: "screen-recording-application.b-cdn.net",
//   protocol: "https",
//   port: "",
//   pathname: "/**",
// },
// {
//   hostname: "lh3.googleusercontent.com",
//   protocol: "https",
//   port: "",
//   pathname: "/**",
// },
