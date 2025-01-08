<script setup>
import { ref } from 'vue'
import { useLogin } from '@/composables/useLogin.js'
import { useProduct } from '@/composables/useProducts.js'
import { useCar } from '@/composables/useCar.js'

// Importando componentes
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
import NewsLetterFooter from '@/components/layouts/footer/NewsletterFooter.vue'
import MainFooter from '@/components/layouts/footer/MainFooter.vue'

const { usuarioLogado } = useLogin()
const { produtos } = useProduct()
const { carrinhoAberto } = useCar()

const produtosCarrinho = ref(
  produtos.value.dados.filter((produto) =>
    usuarioLogado.value.carrinhoCompras.includes(produto.id),
  ),
)

const carrinhoAbertoPai = ref(false)

function handleCarrinhoAberto(novoCarrinho) {
  carrinhoAbertoPai.value = novoCarrinho
}
</script>

<template>
  <PitchbarHeader />
  <MainHeader
    v-model:carrinhoAberto="carrinhoAbertoPai"
    @update:carrinhoAberto="handleCarrinhoAberto"
    :carrinhoAbertoProps="carrinhoAbertoPai"
  />
  <MenuHeader />
  <BannerCarousel />
  <ListProducts />
  <MainCar
    :produtosCarrinho="produtosCarrinho"
    :key="usuarioLogado"
    :carrinhoAberto="carrinhoAbertoPai"
    @update:carrinhoAberto="handleCarrinhoAberto"
  />
  <BannerSecundarios />
  <VitrineTabs />
  <VitrineMarcas />
  <ContainerInstagram />
  <NewsLetterFooter />
  <MainFooter />
</template>
