import './index.scss';
import './assets/js/hero';
import './assets/js/about';

// For All SVG
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/images/svg/', true, /\.svg$/));
