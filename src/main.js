import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
export const bus = mitt();

createApp(App).mount('#app')
