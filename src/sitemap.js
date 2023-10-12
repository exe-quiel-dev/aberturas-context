
const sitemap = require('sitemap');
const fs = require('fs');
const hostname = 'https://www.example.com';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/nosotrost', changefreq: 'monthly', priority: 0.8 },
  { url: '/puertas', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());