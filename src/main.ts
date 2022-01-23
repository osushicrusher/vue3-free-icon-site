import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from "pinia"
import router from './router/index'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPlay, faSearch, faTimesCircle, faMusic, faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faPlay, faSearch, faTimesCircle, faMusic, faChevronDown)
// component('fa', FontAwesomeIcon )

createApp(App).use(router).use(createPinia()).mount("#app")