import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
  // Selling related state
  isSelling: false,
  currentPrice: 0,
  currentDescription: '',
  showSellingPage: false,
});

export default state;