<script setup>
import { ref } from 'vue'

// componentes
import PitchbarHeader from '@/components/layouts/header/PitchbarHeader.vue'
import MainHeader from '@/components/layouts/header/MainHeader.vue'
import MenuHeader from '@/components/layouts/header/MenuHeader.vue'
import ListProducts from '@/components/layouts/list/ListProducts.vue'
import BannerCarousel from '@/components/layouts/Caroussel/BannerCarousel.vue'
import MainCar from '@/components/common/modals/MainCar.vue'
import BannerSecundarios from '@/components/layouts/banner/BannerSecundarios.vue'
import VitrineTabs from '@/components/layouts/list/VitrineTabs.vue'
import VitrineMarcas from '@/components/layouts/list/VitrineMarcas.vue'
import ContainerInstagram from '@/components/layouts/instagram/ContainerInstagram.vue'

// composable
import { useLogin } from '@/composables/useLogin.js'
import { useProduct } from '@/composables/useProducts.js'

const { usuarioLogado } = useLogin()
const { produtos } = useProduct()

// pega somente os produtos que estão no array de carrinhoCompras
const produtosCarrinho = ref(
  produtos.value.dados.filter((produto) =>
    usuarioLogado.value.carrinhoCompras.includes(produto.id),
  ),
)
</script>

<template>
  {{ usuarioLogado }}
  <PitchbarHeader />
  <MainHeader />
  <MenuHeader />
  <BannerCarousel />
  <ListProducts />
  <MainCar :produtosCarrinho="produtosCarrinho" :key="usuarioLogado" />
  <BannerSecundarios />
  <VitrineTabs />
  <VitrineMarcas />
  <ContainerInstagram />
</template>

<style scoped></style>
