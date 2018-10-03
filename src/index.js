import './index.scss';
import './assets/js/hero';
import './assets/js/about';
import './assets/js/portfolio';
import './assets/js/blog';
import './assets/js/form';

// For All SVG
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/images/svg/', true, /\.svg$/));
