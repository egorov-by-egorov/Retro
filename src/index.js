import './index.scss';
import './assets/js/modules/slider';
import './assets/js/blog';
import './assets/js/portfolio';
import './assets/js/form';
import { getSkills } from './assets/js/about';

// For All SVG
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/images/svg/', true, /\.svg$/));

window.addEventListener('load', () => {
  getSkills();
});
