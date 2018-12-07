const app = {
  title: 'Element-Lite Starter Kit',
  shortName: 'ELSK', // 12 characters max
  description: 'Element-Lite Starter Kit',
  sentry: '',
  baseHref: '/',
  startUrl: '/',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  twitter: '@tjmonsi',
  twitterCreator: '@tjmonsi',
  image: ''
};

const theme = {
  themeColor: '#000',
  backgroundColor: '#000',
  favicon: '',
  webApp: {
    capable: 'yes',
    statusBarStyle: 'black-translucent',
    tapHighlight: 'no'
  },
  icons: []
};

const fragments = {
  // 'page-home': 'src/pages/page-home/index.js',
  // 'page-not-found': 'src/pages/page-not-found/index.js'
};

const routes = [

];

const puppeteer = {
  launch: {
    headless: true,
    slowMo: 100
  }
};

module.exports = { app, theme, fragments, routes, puppeteer };
