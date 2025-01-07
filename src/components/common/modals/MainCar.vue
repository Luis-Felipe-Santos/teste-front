<script setup>
import { useCar } from '@/composables/useCar'
import { useProduct } from '@/composables/useProducts.js'
import defaultImage from '@/assets/default.svg'

const { carrinhoAberto, estadoCarrinho } = useCar()
const { removerCarrinho, alterarEstoque, formatCurrency } = useProduct()

defineProps({
  produtosCarrinho: Array,
})
</script>

<template>
  <div v-if="carrinhoAberto" class="carrinho">
    <div class="header-carrinho">
      <div class="header-content">
        <img class="icone-carrinho" src="@/assets/carrinho.svg" alt="carrinho" />
        <div class="titulo">
          <p>Carrinho de Compras</p>
        </div>
      </div>
      <img @click="estadoCarrinho" src="@/assets/icone-fechar.svg" alt="Fechar carrinho" />
    </div>

    <div v-if="produtosCarrinho.length === 0" class="produtos">
      <p>Carrinho vazio</p>
    </div>

    <div v-else>
      <div v-for="produto in produtosCarrinho" :key="produto.id" class="produtos">
        <div class="imagem-produto">
          <img
            :src="produto.image == '' ? defaultImage : produto.image"
            :alt="produto.nome"
            class="imagem-produto"
          />
        </div>
        <div class="infos">
          <div class="name-lixeira">
            <p>{{ produto.nome }}</p>
            <img @click="removerCarrinho(produto.id)" src="@/assets/lixeira.svg" alt="" />
          </div>
          <div class="acoes">
            <div class="precos">
              <p class="preco-de">{{ formatCurrency(produto.precoDe) }}</p>
              <p class="preco-por">{{ formatCurrency(produto.precoPor) }}</p>
            </div>
            <div class="buttons-acao">
              <p>Quantidade:</p>
              <div class="qtd-acoes">
                <button class="remove" @click="alterarEstoque(produto.id, -1)">-</button>
                {{ produto.estoque }}
                <button class="add" @click="alterarEstoque(produto.id)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="conteudo-principal"></div>
    <div class="footer-carrinho">
      <div class="total">
        <p>Total:</p>
        <p>Valor</p>
      </div>
      <div class="btn">
        <button class="finalizar">Finalizar compra</button>
        <button class="continuar">Continuar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carrinho {
  width: 442px;
  height: 768px;
}
.header-carrinho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #d7dae0;
}
.header-content {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 195px;
  gap: 10px;
  margin: 16px;
  height: 24px;
}
.titulo {
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  overflow: hidden;
  white-space: nowrap;
  color: #3d424f;
  font-size: 16px;
  line-height: 24px;
}
.icone-carrinho {
  width: 24px;
  height: 24px;
}
.conteudo-principal {
  width: 439px;
  height: 546px;
  padding: 20px;
  gap: 12px;
  box-sizing: border-box;
}
.footer-carrinho {
  width: 439px;
  height: 158px;
  border-top: 1px solid #d7dae0;
  padding: 20px;
  gap: 12px;
}
.total {
  width: 399px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}
.btn {
  width: 399px;
  height: 86px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
}
.finalizar {
  width: 399px;
  height: 44px;
  padding: 10px 18px 10px 18px;
  gap: 8px;
  border-radius: 8px;
  background-color: #1570ef;
  border: 1px solid #1570ef;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
}
.continuar {
  width: 399px;
  height: 32px;
  padding: 4px 18px 4px 18px;
  gap: 8px;
  color: #1570ef;
  border: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
}
.produtos {
  display: flex;
  width: 399px;
  height: 116px;
  border-radius: 18px;
  border: 1px solid #edeef1;
  padding: 14px;
  gap: 10px;
  margin: 20px;
}
.imagem-produto {
  width: 88px;
  height: 88px;
}
.infos {
  width: 273px;
  height: 88px;
  gap: 14px;
}
.name-lixeira {
  width: 273px;
  height: 36px;
  gap: 16px;
  display: flex;
}
.name-lixeira p {
  width: 239px;
  height: 36px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #24262d;
}
.name-lixeira img {
  width: 18px;
  height: 18px;
}
.acoes {
  width: 273px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.precos {
  width: 86px;
  height: 38px;
}
.preco-de {
  width: 76px;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #b3b9c6;
  text-decoration: line-through;
}
.preco-por {
  width: 86px;
  height: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #1861dd;
}
.buttons-acao {
  width: 168px;
  height: 28px;
  gap: 10px;
  display: flex;
  align-items: center;
}
.buttons-acao p {
  width: 66px;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  color: #464c5e;
}
.qtd-acoes {
  width: 92px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remove {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #b3b9c6;
  color: #fff;
  font-size: 20px;
  border: none;
}
.add {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #1570ef;
  color: #fff;
  font-size: 20px;
  border: none;
}
</style>
