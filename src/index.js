import './index.scss';
import './assets/js/common';

console.log('index.js is work');

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./assets/images/svg/', true, /\.svg$/));
