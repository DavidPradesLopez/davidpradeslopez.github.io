import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NODE_ENV === 'production' ? '/Data-Insights-Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Data-Insights-Portfolio/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
