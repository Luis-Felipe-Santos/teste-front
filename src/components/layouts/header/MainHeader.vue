<script setup>
import MainModal from '@/components/common/modals/MainModal.vue'
import { useLogin } from '@/composables/useLogin'

/*
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  logado: {
    type: Boolean,
    default: false,
    required: false,
  },
})
  */
const { email, senha, visibleModal, estadoModal, validarLogin, usuarioLogado, deslogar } =
  useLogin()
</script>

<template>
  <div class="header">
    <div class="navegacao">
      <div class="logo-icon">
        <router-link to="/" class="logo">
          <img src="@/assets/logo-icon.svg" alt="Models" />
        </router-link>
      </div>
      <div class="busca">
        <img src="@/assets/busca.svg" alt="buscar" />
        <input type="text" id="txtPesquisar" placeholder="Pesquisar por..." />
      </div>
      <div class="acoes">
        <div class="icone-carrinho">
          <img src="@/assets/carrinho.svg" alt="" />
        </div>
        <div class="usuario">
          <div class="icone-usuario">
            <img src="@/assets/user.svg" alt="" />
          </div>
          <div class="login-usuario">
            <div class="texto">
              <p class="bem-vindo">
                <span v-if="usuarioLogado != ''">Olá, {{ usuarioLogado.nome }}</span>
                <span v-else>Seja bem vindo(a)!</span>
              </p>
              <p class="btn-entre">
                <span v-if="usuarioLogado != ''" @click="deslogar()">Sair</span>
                <span v-else @click="estadoModal()">Entre</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainModal :visible="visibleModal">
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
.header {
  width: 100%;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navegacao {
  width: 100%;
  max-width: 1248px;
  height: 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;
}

.busca {
  display: flex;
  max-width: 500px;
  width: 100%;
  padding: 10px 14px;
  gap: 8px;
  border: 1px solid #d7dae0;
  border-radius: 8px;
}

.busca input {
  width: 100%;
  max-width: 444px;
  border: none;
  color: #667085;
  font-size: 16px;
  line-height: 24px;
}

.acoes {
  display: flex;
  max-width: 281px;
  width: 100%;
  gap: 12px;
}

.icone-carrinho {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
}

.usuario {
  width: 190px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.icone-carrinho,
.icone-usuario {
  flex-shrink: 0;
}

.icone-usuario {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
}

.login-usuario {
  width: 130px;
  height: 40px;
}

.texto {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.bem-vindo {
  font-weight: 600;
  color: #1861dd;
  font-size: 14px;
  line-height: 20px;
}

.btn-entre {
  color: #b3b9c6;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline solid;
  cursor: pointer;
}
/* Seu estilo permanece o mesmo */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Garantir que o popup fique no topo */
}

/* Container do popup */
.popup-content {
  background-color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #edeef1;
  width: 329px;
  max-width: 100%;
  height: 286px;
  box-shadow: 0px 12px 16px -4px #10182814;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
