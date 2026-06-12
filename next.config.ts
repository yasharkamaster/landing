import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/Clinic/clinic_landing.html',
        destination: '/clinic',
        permanent: true,
      },
      {
        source: '/Food_Francises/food_landing.html',
        destination: '/food',
        permanent: true,
      },
      {
        source: '/food_landing.html',
        destination: '/food',
        permanent: true,
      },
      {
        source: '/Luxury_Fashion_Boutiques/luxury_boutique_landing_v2%20(1).html',
        destination: '/luxury',
        permanent: true,
      },
      {
        source: '/Luxury_Fashion_Boutiques/luxury_boutique_landing_v2 (1).html',
        destination: '/luxury',
        permanent: true,
      },
      {
        source: '/Professional_Services/Professional_Real.html',
        destination: '/professional',
        permanent: true,
      },
      {
        source: '/Tours_&_Travels/tours_v3.html',
        destination: '/tours',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
