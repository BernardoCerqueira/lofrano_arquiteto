/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.lofranoarquitetura.com.br', // A URL do teu site
    generateRobotsTxt: true, // Gera automaticamente o robots.txt
    sitemapBaseFileName: 'sitemap', // Garante que o nome do sitemap seja sitemap.xml
    generateIndexSitemap: false, // Remove sitemap-0.xml e mantém apenas sitemap.xml
    changefreq: 'daily', // Indica que as páginas mudam diariamente
    priority: 0.7, // Define a prioridade das páginas no sitemap
  };
  