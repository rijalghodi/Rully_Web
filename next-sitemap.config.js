module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEPLOY_LINK,
  generateRobotsTxt: true, // (optional)
  // If there is google analytics id, then prevent robot for crawling
  robotsTxtOptions: process.env.GOOGLE_ANALYTICS_ID
    ? {
        policies: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      }
    : {
        policies: [
          {
            userAgent: '*',
            disallow: '/',
          },
        ],
      },
  // ...other options
};
