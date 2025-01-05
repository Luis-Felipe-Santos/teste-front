import './assets/main.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('SwiperComponent', Swiper)
app.component('SwiperSlide', SwiperSlide)
app.use(createPinia())
app.use(router)

app.mount('#app')
