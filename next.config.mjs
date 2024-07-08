/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
        swcPlugins: [
            ["next-superjson-plugin",{}]
        ]
    },
    images:{
        domains:[
            "res.cloudinary.com",
            "avatars.githubuercontent.com",
            "lh3.googleusercontent.com"
        ]
    }
}

export default nextConfig;
