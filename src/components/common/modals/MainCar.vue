<script setup>
import { useCar } from '@/composables/useCar'

const { carrinhoAberto, estadoCarrinho } = useCar()
</script>

<template>
  <!-- O carrinho só será exibido se carrinhoAberto for true -->
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
    <div class="conteudo-principal"></div>
    <div class="footer-carrinho">
      <div class="total">
        <p>Total:</p>
        <p>Valor</p>
      </div>
      <div class="btn">
        <button class="finalizar">Finalizar compra</button>
        <button class="continuar" @click="estadoCarrinho">Continuar comprando</button>
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
</style>
