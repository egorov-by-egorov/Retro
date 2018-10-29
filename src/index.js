import './assets/js/modules/slider';
import './index.scss';
import './assets/js/form';
import { getSkills } from './assets/js/about';
import './assets/js/portfolio';
import { getBlogPosts } from './assets/js/blog';

// For All SVG
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/images/svg/', true, /\.svg$/));

window.addEventListener('load', () => {
  getSkills();
  // getFilter();
  getBlogPosts();
});
