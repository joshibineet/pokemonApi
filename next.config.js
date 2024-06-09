/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add Babel loader rule for specific files (e.g., files with .jsx extension)
      config.module.rules.push({
        test: /\.jsx$/, // Apply this rule to .jsx files
        exclude: /node_modules/, // Don't apply to files in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for .jsx files
          options: {
            presets: ['next/babel'], // Use Next.js default Babel preset
          },
        },
      });
  
      // Return the modified webpack config
      return config;
    },
    images: {
      domains: ['127.0.0.1', 'source.unsplash.com'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1', //local
          port: '8000',
          pathname: '/',
        },
        {
          protocol: 'http',
          hostname: 'localhost', //local
          port: '3000',
          pathname: '/',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;