/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
                protocol: "https",
                pathname: "/dmqwx60mi/image/upload/**"
            }
        ]
    }
};

export default nextConfig;
