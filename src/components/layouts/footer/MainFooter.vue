<script></script>
<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="infos-footer">
        <img src="@/assets/logo.svg" alt="" />
        <p class="endereco">
          Models Frontend LTDA, CNPJ: 01.234.567/0008-09. Rua Lorem Ipsum dolor sit, 1234 - Brasil -
          BR CEP: 00000 - 000
        </p>
        <div class="contato">
          <p class="duvida">Alguma dúvida?</p>
          <p class="telefone">+55 11 4589 2015</p>
        </div>
        <div class="pagamentos-selos">
          <div class="formas-pagamento">
            <p class="txt-formas">Formas de pagamento</p>
            <div class="bandeiras">
              <div class="cards-bandeiras">
                <img src="@/assets/visa.svg" alt="visa" />
              </div>
              <div class="cards-bandeiras">
                <img src="@/assets/paypal.svg" alt="paypal" />
              </div>
              <div class="cards-bandeiras">
                <img src="@/assets/mastercard.svg" alt="mastercard" />
              </div>
            </div>
          </div>
          <div class="seguranca">
            <p class="txt-seguranca">Segurança</p>
            <div class="bandeiras">
              <div class="cards-bandeiras">
                <img src="@/assets/google.svg" alt="google" />
              </div>
              <div class="cards-bandeiras">
                <img src="@/assets/ssl.svg" alt="ssl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-footer">
        <div class="coluna-links">
          <h1>Categorias</h1>
          <ul>
            <li>Câmeras</li>
            <li>Smartphones</li>
            <li>Notebooks</li>
            <li>Consoles</li>
            <li>Headphones</li>
            <li>TV & Video</li>
          </ul>
        </div>
        <div class="coluna-links">
          <h1>Institucional</h1>
          <ul>
            <li>Sobre nós</li>
            <li>Perguntas frequentes</li>
            <li>Fale conosco</li>
            <li>Nossas lojas</li>
            <li>Formas de pagamento</li>
            <li>Blog</li>
          </ul>
        </div>
        <div class="coluna-links">
          <h1>Politicas</h1>
          <ul>
            <li>Politica de privacidade</li>
            <li>Politica de troca e devolução</li>
            <li>Politica de entrega</li>
            <li>Termos e condições</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="redes-wap">
      <img src="@/assets/wap.svg" alt="wapstore" />
      <div class="redes-sociais">
        <img src="@/assets/facebook.svg" alt="facebook" />
        <img src="@/assets/instagram.svg" alt="instagram" />
        <img src="@/assets/x.svg" alt="x" />
        <img src="@/assets/pinterest.svg" alt="pinterest" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-wrapper {
  width: 100%;
  height: 448px;
  border: 1px 0 1px 0 solid #edeef1;
  padding: 64px 0 32px 0;
  overflow-x: hidden;
}
.footer {
  width: 100%;
  max-width: 1248px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border-bottom: 1px solid #edeef1;
  padding: 32px 16px 32px 16px;
}
.infos-footer {
  width: 372px;
  height: 100%;
  gap: 24px;
}
.endereco {
  width: 372px;
  height: 36px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: #d7dae0;
}
.contato {
  width: 121px;
  height: 46px;
  gap: 8px;
}
.duvida {
  width: 92px;
  height: 18px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #d7dae0;
}
.telefone {
  width: 121px;
  height: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #8a94a6;
}
.pagamentos-selos {
  width: 362px;
  height: 66px;
  display: flex;
  gap: 48px;
}
.formas-pagamento {
  width: 190px;
  height: 66px;
  gap: 8px;
}
.txt-formas {
  width: 129px;
  height: 18px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #d7dae0;
}
.bandeiras {
  width: 190px;
  height: 40px;
  gap: 8px;
  display: flex;
}
.cards-bandeiras {
  display: flex;
  width: 58px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #edeef1;
  color: #ffffff;
  justify-content: center;
  align-items: center;
}
.seguranca {
  width: 124px;
  height: 66px;
  gap: 8px;
}
.txt-seguranca {
  width: 62px;
  height: 18px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #d7dae0;
}
.menu-footer {
  width: 100%;
  max-width: 640px;
  height: 184px;
  display: flex;
  gap: 32px;
}
.coluna-links {
  width: 192px;
  height: 184px;
  max-width: 192px;
  gap: 16px;
}

.coluna-links h1 {
  width: 192px;
  height: 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #565e73;
}

.coluna-links ul {
  list-style: none;
}
.coluna-links li {
  width: 192px;
  height: 18px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #b3b9c6;
}
.redes-wap {
  width: 100%;
  max-width: 1248px;
  height: 52px;
  margin: 0 auto;
  border-bottom: 1px;
  display: flex;
  justify-content: space-between;
  padding: 32px 16px 0 16px;
}
.redes-sociais {
  width: 152px;
  height: 20px;
  display: flex;
  gap: 24px;
}
</style>
