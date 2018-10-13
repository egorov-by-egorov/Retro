import './index.scss';
import './server.php';
import './assets/js/hero';
import './assets/js/about';
import './assets/js/portfolio';
import './assets/js/form';
import { getBlogPosts } from './assets/js/blog';

// For All SVG
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/images/svg/', true, /\.svg$/));
window.addEventListener('load', () => {
  getBlogPosts();
});
