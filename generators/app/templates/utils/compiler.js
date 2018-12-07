const fs = require('fs');
const configFile = '../configs/frontend.config.js';
const { resolve, relative } = require('path');
const checkDirectorySync = require('./check-directory');
const watch = process.argv.find(item => item === '--watch');
const src = resolve(__dirname, '../src');
const target = resolve(__dirname, '../src/utils');
const dest = resolve(__dirname, '../public');

const fragmentBuild = () => {
  console.log('building fragments');
  const { fragments, routes } = require(configFile);
  const lazyLoad = [];
  routes.forEach(route => {
    lazyLoad.push(`'${route.route}': () => import('${relative(target, resolve(__dirname, fragments[route.page]))}')`);
  });
  const string = `const fragments = {\n  ${lazyLoad.join(',\n  ')}\n};\nexport { fragments };`;
  checkDirectorySync(src);
  checkDirectorySync(target);
  fs.writeFileSync(resolve(target, 'fragments.js'), string.trim() + '\n', 'utf-8');
};

const manifestBuild = () => {
  console.log('building manifest.json');
  const { app, theme } = require(configFile);
  const { title: name, shortName, startUrl, display, orientation, scope } = app;
  const { icons, themeColor, backgroundColor } = theme;
  const manifest = {
    name,
    short_name: shortName,
    icons,
    start_url: startUrl,
    background_color: backgroundColor,
    display,
    orientation,
    scope,
    theme_color: themeColor
  };
  checkDirectorySync(dest);
  fs.writeFileSync(resolve(dest, 'manifest.json'), JSON.stringify(manifest), 'utf8');
};

const build = () => {
  fragmentBuild();
  manifestBuild();
};

build();
if (watch) fs.watch(resolve(__dirname, configFile), {}, build);
