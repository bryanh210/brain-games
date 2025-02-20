// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   transpilePackages: [
//     'packages/games/*'
//   ],
// }

// export default nextConfig;


import path from 'path';

const nextConfig = {
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@packages': path.join(__dirname, 'packages')
    };
    return config;
  }
};

export default nextConfig;

