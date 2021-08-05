// use ES6 import , exports

import "./style/base.scss";
import {scrolling} from "./js/scrollToTop";
import { handleAPI } from "./js/api";
handleAPI();
import {info} from "./js/infoEvent"
scrolling();
// registring SW
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
export {scrolling, handleAPI, info}