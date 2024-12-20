import { createApp } from 'vue'

// ROUTER
import router from './router/routes';

import App from './App.vue'

createApp(App).use(router).mount('#app')
