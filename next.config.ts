import type {NextConfig} from 'next';

const repo = 'Data-Insights-Portfolio';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? assetPrefix : '',
  basePath: process.env.NODE_ENV === 'production' ? basePath : '',
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

