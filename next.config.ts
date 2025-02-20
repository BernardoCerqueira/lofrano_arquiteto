import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "gqopcittpbraiiqkufww.supabase.co"
    }]
  }
};

export default nextConfig;
