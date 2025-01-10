<script setup>
import { useProduct } from '@/composables/useProducts.js'
import defaultImage from '@/assets/default.svg'
import MainModal from '@/components/common/modals/MainModal.vue'
import { useLogin } from '@/composables/useLogin'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const {
  produtos,
  formatCurrency,
  favoritarProduto,
  removerProdutoFavorito,
  showLogin,
  exibirLogin,
  adicionarCarrinho,
  usuarioLogado,
} = useProduct()
const { email, senha, validarLogin } = useLogin()
</script>

<template>
  <div class="vitrine-novidades">
    <h1>{{ produtos.titulo }}</h1>
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
      <SplideSlide
        class="cards-splide"
        v-for="(produto, index) in produtos.dados"
        :key="produto.id || index"
      >
        <div class="cards">
          <div v-if="produto.selos.length > 0">
            <div
              v-for="(selo, seloIndex) in produto.selos"
              :key="seloIndex"
              :class="['badge', seloIndex > 0 ? 'secondary' : '']"
            >
              {{ selo }}
            </div>
          </div>
          <i
            v-if="usuarioLogado"
            :class="[
              'fa-heart',
              'icon-heart',
              usuarioLogado.produtosFavoritados.includes(produto.id)
                ? 'fa-regular favorito'
                : 'fa-regular',
            ]"
            @click="
              usuarioLogado.produtosFavoritados.includes(produto.id)
                ? removerProdutoFavorito(produto.id)
                : favoritarProduto(produto.id)
            "
          ></i>
          <i v-else class="fa-regular fa-heart icon-heart" @click="exibirLogin()"></i>

          <img
            class="imagem"
            :src="produto.image == '' ? defaultImage : produto.image"
            :alt="produto.nome"
          />
          <div class="card-infos">
            <div class="nome-produto">
              <p>{{ produto.nome }}</p>
            </div>
            <div class="avaliacoes">
              <img src="@/assets/estrelas.svg" alt="" />
              <span>({{ produto.avaliacoes }})</span>
            </div>
            <div class="precos">
              <div class="valores-promo">
                <span class="preco-de" v-if="produto.precoDe">{{
                  formatCurrency(produto.precoDe)
                }}</span>
                <span class="preco-por">{{ formatCurrency(produto.precoPor) }}</span>
              </div>
              <div class="parcelas">
                <p>
                  ou <span>12x</span> de <span>{{ formatCurrency(produto.valorParcela) }}</span> sem
                  juros
                </p>
              </div>
            </div>

            <div class="btn">
              <button
                @click="usuarioLogado ? adicionarCarrinho(produto.id) : exibirLogin()"
                :disabled="produto.estoque === 0"
                :class="{ 'btn-indisponivel': produto.estoque === 0 }"
              >
                {{ produto.estoque === 0 ? 'Indisponível' : 'Comprar Agora' }}
              </button>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
  <MainModal :visible="showLogin">
    <template v-slot:default>
      <div class="popup-overlay">
        <div class="popup-content">
          <div class="header-popup">
            <div class="text-popup">
              <p class="text1">Acesse sua <span class="span1">conta</span></p>
              <p class="text2">
                Entre com seu e-mail e senha para continuar ou
                <span class="span2">cadastre-se aqui</span>
              </p>
            </div>
          </div>
          <div class="form-group">
            <form @submit.prevent="validarLogin()">
              <input
                type="email"
                class="input-email"
                v-model="email"
                placeholder="Digite seu email..."
              />
              <input
                type="password"
                class="input-senha"
                v-model="senha"
                placeholder="Digite sua senha..."
              />
              <button type="submit" class="submit-button">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </template>
  </MainModal>
</template>

<style scoped>
.vitrine-novidades {
  width: 100%;
  max-width: 1264px;
  height: 438px;
  padding: 0 24px 0 24px;
  margin: 0 auto;
}
.cards {
  max-width: 280px;
  height: 382px;
  background-color: #fff;
  border-radius: 12px;
  position: relative;
}
.cards img {
  width: 280px;
  height: 190px;
}
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #90d1ff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}
.badge.secondary {
  top: 40px;
  background-color: #89ecba;
}
.icon-heart {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 15px;
  color: #e60000;
  cursor: pointer;
}
.card-infos {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 192px;
}
.nome-produto {
  width: 248px;
  display: flex;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #24262d;
  flex-wrap: wrap;
  padding: 14px 16px 10px 16px;
}
.avaliacoes {
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 248px;
  height: 10px;
  padding: 0 16px 10px 16px;
}
.avaliacoes img {
  width: 50px;
  height: 10px;
}
.avaliacoes span {
  font-size: 8px;
  line-height: 9.68px;
  color: #667085;
  padding: 2px;
}
.precos {
  width: 248px;
  height: 42px;
}
.valores-promo {
  display: flex;
  align-items: center;
  width: 248px;
  height: 30px;
  gap: 6px;
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
  width: 121px;
  font-weight: 600px;
  font-size: 20px;
  color: #1861dd;
}
.parcelas {
  width: 248px;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  color: #565e73;
}
.parcelas span {
  font-weight: bold 600;
  color: #565e73;
}
.btn {
  width: 100%;
  max-width: 248px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn button {
  width: 100%;
  max-width: 248px;
  height: 36px;
  border-radius: 72px;
  padding: 8px 16px;
  background-color: #1570ef;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;
  margin: 10px 16px 14px 16px;
  cursor: pointer;
}
.favorito {
  padding: 10px;
  color: #fff;
  background-color: #e60000;
  border-radius: 50%;
}
.btn button:disabled,
.btn-indisponivel {
  background-color: #b3b9c6;
  color: #a0a0a0;
  cursor: not-allowed;
  color: #f6f7f9;
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
