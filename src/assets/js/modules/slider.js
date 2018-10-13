import Glide from '@glidejs/glide';

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
