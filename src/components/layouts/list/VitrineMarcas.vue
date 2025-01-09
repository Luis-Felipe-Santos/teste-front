<script setup>
import appleLogo from '@/assets/icon-apple.svg'
import samsungLogo from '@/assets/icon-samsung.svg'
import xboxLogo from '@/assets/icon-xbox.svg'
import asusLogo from '@/assets/icon-asus.svg'
import playstationLogo from '@/assets/icon-playstation.svg'
import nintendoLogo from '@/assets/icon-nintendo.svg'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
const brands = [
  {
    name: 'Apple',
    image: appleLogo,
  },
  {
    name: 'Samsung',
    image: samsungLogo,
  },
  {
    name: 'Xbox',
    image: xboxLogo,
  },
  {
    name: 'Asus',
    image: asusLogo,
  },
  {
    name: 'PlayStation',
    image: playstationLogo,
  },
  {
    name: 'Nintendo',
    image: nintendoLogo,
  },
]
</script>
<template>
  <div class="vitrine-marcas">
    <h1>Marcas vendidas no site</h1>
    <Splide
      :options="{
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        arrows: true,
        breakpoints: {
          1024: { perPage: 3 },
          768: { perPage: 2 },
          480: { perPage: 1 },
        },
      }"
    >
      <SplideSlide class="cards-splide" v-for="(brand, index) in brands" :key="index">
        <div class="card">
          <img :src="brand.image" :alt="brand.name" class="brand-logo" />
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
.vitrine-marcas {
  max-width: 1264px;
  margin: 48px auto;
  padding: 0 24px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: #24262d;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
}

.card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 176px;
  max-width: 176px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #d7dae0;
}

.card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media (max-width: 480px) {
  .cards-splide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }
}
</style>
