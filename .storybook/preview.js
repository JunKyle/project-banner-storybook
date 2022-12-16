import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'
library.add(faLocationDot, faVideoCamera)
Vue.component('font-awesome-icon', FontAwesomeIcon);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}