/** @type {import('next').NextConfig} */
const nextConfig = {
    devServer: {
        host: '0.0.0.0',
        port: '3000',
    },
    images:{
      domains:[
        'image.tmdb.org'
      ]
    }
}

module.exports = nextConfig
