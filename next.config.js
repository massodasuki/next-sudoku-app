/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   env: {
    MONGODB_URI: "mongodb://localhost:27017/",
    DB_NAME: "sudoku",
  },
}

module.exports = nextConfig
