import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import Particles from '@tsparticles/vue3';
import { loadSlim } from '@tsparticles/slim';
import i18n from './i18n';
// import AOS from 'aos';

createApp(App)
.use(router)
.use(Particles, {
    init: async (engine) => {
        await loadSlim(engine);
    }
})
.use(i18n)
.mount('#app')

// AOS.init({
//     duration: 800,
//     once: false,
// });
