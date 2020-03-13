/* eslint-disable */

// Fix viewport units for height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

import '../blocks/modules/common/header/header';
import '../blocks/modules/common/menu/menu';
import '../blocks/modules/common/form/form';
import '../blocks/modules/common/alert/alert';
import '../blocks/modules/common/rating/rating';

// Pages
// import '../blocks/modules/pages/index/index';