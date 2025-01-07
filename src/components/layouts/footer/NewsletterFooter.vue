<script></script>

<template>
  <div class="newsletter-wrapper">
    <div class="newsletter">
      <div class="textos">
        <p>Acompanhe o Models</p>
        <p>Inscreva-se para receber novidades e ofertas</p>
      </div>
      <div class="forms">
        <div class="inputs">
          <input type="text" />
          <input type="text" />
          <button>Inscrever-se <img src="@/assets/message-icon.svg" alt="" /></button>
        </div>
        <div class="politicas">
          <label>
            <input type="checkbox" id="politica-privacidade" />
            Ao se cadastrar você concorda com a nossa <a href="#">Política de Privacidade</a>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsletter-wrapper {
  width: 100%;
  height: 170px;
  background-color: #f6f7f9;
  margin: 0 auto;
  padding: 48px;
  border-top: 1px solid #edeef1;
}
.newsletter {
  max-width: 1248px;
  height: 74px;
  background-color: pink;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
.textos {
  width: 345px;
  height: 60px;
  gap: 6px;
}
.forms {
  width: 754px;
  height: 74px;
  gap: 12px;
}
.politicas {
  font-size: 16px;
  color: #333;
}

.politicas label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.politicas input {
  margin-right: 8px;
}

.politicas a {
  color: #1570ef;
  text-decoration: none;
}

.politicas a:hover {
  text-decoration: underline;
}
</style>
