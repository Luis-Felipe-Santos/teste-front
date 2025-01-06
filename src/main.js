import './assets/main.css'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('SwiperComponent', SwiperComponent)
app.component('SwiperSlide', SwiperSlide)
app.use(createPinia())
app.use(router)

app.mount('#app')
