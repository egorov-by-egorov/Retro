import Glide from '@glidejs/glide';
import './index.scss';
import './assets/js/form';
import './assets/js/portfolio';
import { getSkills } from './assets/js/about';
import { getBlogPosts } from './assets/js/blog';

// Slider
new Glide('.slider', {
  type: 'slider',
  startAt: 1,
  perview: 1,
  autoplay: 3000,
  hoverpause: true,
  keyboard: true,
  swipeThreshold: 80,
  dragThreshold: 120,
  animationDuration: 1000,
  rewind: true,
  rewindDuration: 3000
}).mount();

// For All SVG
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/images/svg/', true, /\.svg$/));

window.addEventListener('load', () => {
  getSkills();
  getBlogPosts();
});
