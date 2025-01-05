<script setup>
import { useProduct } from '@/composables/useProducts.js'
import defaultImage from '@/assets/default.svg'

const { produtos } = useProduct()
</script>

<template>
  <div class="vitrine-novidades">
    <h1>{{ produtos.titulo }}</h1>
    <div class="container-cards">
      <div class="cards" v-for="(produto, index) in produtos.dados" :key="produto.id || index">
        <div class="badge" v-if="produto.selos != ''">
          {{ produto.selos[0] }}
        </div>
        <div class="badge secondary" v-if="produto.selos != ''">
          {{ produto.selos[1] }}
        </div>
        <img
          class="imagem"
          :src="produto.image == '' ? defaultImage : produto.image"
          :alt="produto.nome"
        />
        <p>{{ produto.nome }}</p>
        <span>R$: {{ produto.precoDe }}</span>
        <span>R$: {{ produto.precoPor }}</span>
        <span>ou 12x de 707,57 sem juros</span>
        <button v-if="produto.estoque != 0">Comprar Agora</button>
        <button v-else>Indisponível</button>
        <span>{{ produto.estoque }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vitrine-novidades {
  width: 100%;
  max-width: 1264px;
  height: 438px;
  padding: 0 24px 0 24px;
  background-color: red;
  margin: 0 auto;
}
.container-cards {
  width: 1216px;
  height: 382px;
  gap: 32px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
}
.cards {
  max-width: 280px;
  height: 382px;
  background-color: #fff;
  border-radius: 12px;
  position: relative;
}
.cards img {
  width: 190px;
  height: 190px;
}
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #00c853;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}
.badge.secondary {
  top: 40px;
  background-color: #00b0ff;
}
</style>
