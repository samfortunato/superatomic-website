module.exports = {
  siteMetadata: {
    siteUrl: "https://superatomic.net",
    title: "superatomic",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'superatomic.net',
        protocol: 'https',
      },
    },
  ],
};
