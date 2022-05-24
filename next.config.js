/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images:{
    cityView:['https://source.unsplash.com/random/?city,night'],
    randompic:['source.unsplash.com/random'],
    domains:[`source.unsplash.com`]
  }
}

module.exports = nextConfig
