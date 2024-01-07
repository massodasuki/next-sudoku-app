/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  MONGODB_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME,
  
}

module.exports = nextConfig
