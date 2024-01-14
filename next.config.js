/** @type {import('next').NextConfig} */
// var API_URL="https://www.privateadminapi.smartxblockchain.com/";
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api_url/login',
  //       destination: API_URL+'login',
  //     },
  //     {
  //       source: '/api_url/register',
  //       destination: API_URL+'register',
  //     },
  //     {
  //       source: '/api_url/timers',
  //       destination: API_URL+'timers',
  //     },
  //     {
  //       source: '/api_url/admin',
  //       destination: API_URL+'admin',
  //     },
  //     {
  //       source: '/api_url/finduserdetail',
  //       destination: API_URL+'finduserdetail',
  //     },
  //     {
  //       source: '/api_url/finduserpakage',
  //       destination: API_URL+'finduserpakage',
  //     },
  //     {
  //       source: '/api_url/findrefferal',
  //       destination: API_URL+'findrefferal',
  //     },
  //     {
  //       source: '/api_url/activate',
  //       destination: API_URL+'activate',
  //     },
  //     {
  //       source: '/api_url/myreff',
  //       destination: API_URL+'myreff',
  //     },
  //     {
  //       source: '/api_url/verify-email',
  //       destination: API_URL+'verify-email',
  //     },
  //     {
  //       source: '/api_url/verify-code',
  //       destination: API_URL+'verify-code',
  //     },
  //     {
  //       source: '/api_url/get_user_profile',
  //       destination: API_URL+'get_user_profile',
  //     },
  //     {
  //       source: '/api_url/trenduser',
  //       destination: API_URL+'trenduser',
  //     },
  //     {
  //       source: '/api_url/user_on_purchase',
  //       destination: API_URL+'user_on_purchase',
  //     },
  //     {
  //       source: '/api_url/purchase_package',
  //       destination: API_URL+'purchase_package',
  //     },
  //     {
  //       source: '/api_url/Pakage_info',
  //       destination: API_URL+'Pakage_info',
  //     },
  //     {
  //       source: '/api_url/wallet',
  //       destination: API_URL+'wallet',
  //     },
  //     {
  //       source: '/api_url/withdraw',
  //       destination: API_URL+'withdraw',
  //     },
  //     {
  //       source: '/api_url/findTransac',
  //       destination: API_URL+'findTransac',
  //     },
  //     {
  //       source: '/api_url/resetpassword',
  //       destination: API_URL+'resetpassword',
  //     },
  //     {
  //       source: '/api_url/profile_info',
  //       destination: API_URL+'profile_info',
  //     },
  //     {
  //       source: '/api_url/upgrade',
  //       destination: API_URL+'upgrade',
  //     },
  //     {
  //       source: '/api_url/update_profile',
  //       destination: API_URL+'update_profile',
  //     },
  //     {
  //       source: '/api_url/find_Direct_Reff_Transactions',
  //       destination: API_URL+'find_Direct_Reff_Transactions',
  //     },
  //     {
  //       source: '/api_url/ShowReffTrend',
  //       destination: API_URL+'ShowReffTrend',
  //     },
  //     {
  //       source: '/api_url/testTrend',
  //       destination: API_URL+'testTrend',
  //     },
  //     {
  //       source: '/api_url/user_on_upgrade',
  //       destination: API_URL+'user_on_upgrade',
  //     },
  //     {
  //       source: '/api_url/get_count',
  //       destination: API_URL+'get_count',
  //     },
  //     {
  //       source: '/api_url/counting',
  //       destination: API_URL+'counting',
  //     },
  //   ]
  // },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
