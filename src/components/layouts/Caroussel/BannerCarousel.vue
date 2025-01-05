<script setup>
import { useBanner } from '@/composables/useBanner.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const { banners } = useBanner()
</script>

<template>
  <div class="conteiner-banner">
    <div class="banner">
      <swiper
        :slides-per-view="1"
        :space-between="10"
        loop
        autoplay
        :pagination="{ clickable: true }"
        :navigation="true"
        class="slide"
      >
        <swiper-slide v-for="(banner, index) in banners.dados" :key="banner.id || index">
          <img :src="banner.image" :alt="banner.nome" class="slide-image" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="pitchbar-banner">
      <div class="pitchbar-banner-items">
        <img src="@/assets/Ícone-frete.svg" alt="" />
        <div class="txt-span">
          <span>Frete Grátis</span>
          <p>Frete grátis em todos os pedidos</p>
        </div>
      </div>
      <div class="pitchbar-banner-items">
        <img src="@/assets/icone-cartao.svg" alt="" />
        <div class="txt-span">
          <span>Parcele em até 10x</span>
          <p>Sem juros no cartão de crédito</p>
        </div>
      </div>
      <div class="pitchbar-banner-items">
        <img src="@/assets/icone-dinheiro.svg" alt="" />
        <div class="txt-span">
          <span>Devolução de Dinheiro</span>
          <p>Garantia de devolução de 7 dias</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.conteiner-banner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 48px;
}

.banner {
  width: 100%;
  max-width: 1216px;
  height: 350px;
  margin-top: 24px;
}

.slide {
  width: 100%;
  max-width: 1216px;
  height: 350px;
  overflow: hidden;
  border-radius: 32px;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
}

.pitchbar-banner {
  width: 100vw;
  height: 56px;
  display: flex;
  max-width: 1216px;
  gap: 12px;
}
.pitchbar-banner-items {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 397.33px;
  height: 56px;
  padding: 8px 16px;
  gap: 8px;
}
.txt-span span {
  color: #1570ef;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}
.txt-span p {
  color: #b3b9c6;
  font-size: 12px;
  line-height: 14.52px;
  font-weight: 400;
}
</style>
