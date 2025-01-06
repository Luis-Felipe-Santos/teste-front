<script setup>
import PitchbarHeader from '@/components/layouts/header/PitchbarHeader.vue'
import MainHeader from '@/components/layouts/header/MainHeader.vue'
import MenuHeader from '@/components/layouts/header/MenuHeader.vue'
import ListProducts from '@/components/layouts/list/ListProducts.vue'
import BannerCarousel from '@/components/layouts/Caroussel/BannerCarousel.vue'
import MainCar from '@/components/common/modals/MainCar.vue'
import BannerSecundarios from '@/components/layouts/banner/BannerSecundarios.vue'
import VitrineTabs from '@/components/layouts/list/VitrineTabs.vue'
import VitrineMarcas from '@/components/layouts/list/VitrineMarcas.vue'
</script>

<template>
  <PitchbarHeader />
  <MainHeader />
  <MenuHeader />
  <BannerCarousel />
  <ListProducts />
  <MainCar />
  <BannerSecundarios />
  <VitrineTabs />
  <VitrineMarcas />
</template>

<style scoped></style>
