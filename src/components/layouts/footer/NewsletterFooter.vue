<script></script>

<template>
  <div class="newsletter-wrapper">
    <div class="newsletter">
      <div class="textos">
        <h1>Acompanhe o Models</h1>
        <p>Inscreva-se para receber novidades e ofertas</p>
      </div>
      <div class="forms">
        <div class="inputs">
          <input type="text" placeholder="Digite seu nome..." />
          <input type="email" placeholder="Digite seu email..." />
          <button>
            <p>Inscrever-se</p>
            <img src="@/assets/message-icon.svg" alt="" />
          </button>
        </div>
        <div class="politicas">
          <label>
            <input class="estados" type="checkbox" id="politica-privacidade" />
            <p>Ao se cadastrar você concorda com a nossa</p>
            <a href="#">Política de Privacidade</a>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsletter-wrapper {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 48px 16px;
  border-top: 1px solid #edeef1;
}

.newsletter {
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.textos {
  width: 100%;
  max-width: 345px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.textos h1 {
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #24262d;
}

.textos p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
}

.forms {
  width: 100%;
  max-width: 754px;
  display: flex;
  flex-wrap: wrap; /* Permite que os itens fiquem em linhas no mobile */
  gap: 12px;
  justify-content: center; /* Centraliza no mobile */
}

.inputs {
  width: 100%;
  max-width: 754px;
  display: flex;
  flex-wrap: wrap; /* Adiciona quebra de linha no mobile */
  gap: 12px;
}

.inputs input {
  flex: 1;
  min-width: 200px;
  height: 44px;
  border-radius: 8px;
  border: none;
  padding: 8px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 162px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid #1570ef;
  padding: 10px 18px;
  gap: 8px;
  background-color: #1570ef;
}

button p {
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  color: #fff;
  white-space: nowrap;
}

.politicas {
  font-size: 16px;
  padding: 8px;
}
.politicas p {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #b3b9c6;
}

.politicas label {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.politicas a {
  color: #1570ef;
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .newsletter {
    flex-direction: column; /* Muda para coluna no mobile */
    align-items: center;
  }

  .forms {
    gap: 16px;
  }

  .inputs {
    flex-direction: column; /* Inputs em linha vertical */
    gap: 8px;
  }

  button {
    width: 100%; /* Botão ocupa largura total */
  }
}
</style>
