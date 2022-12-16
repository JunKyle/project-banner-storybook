import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import * as moment from 'moment';

Vue.prototype.moment = moment

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'
library.add(faLocationDot, faVideoCamera)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
