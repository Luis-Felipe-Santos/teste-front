<template>
  <div class="instagram-shop">
    <div class="titulos">
      <h1>Nosso Instagram</h1>
      <a href="#">@models</a>
    </div>
    <div class="container-imagens">
      <img src="@/assets/image1.svg" alt="Imagem 1" />
      <img src="@/assets/image2.svg" alt="Imagem 2" />
      <img src="@/assets/image3.svg" alt="Imagem 3" />
      <img src="@/assets/image4.svg" alt="Imagem 4" />
      <img src="@/assets/image5.svg" alt="Imagem 5" />
      <img src="@/assets/image6.svg" alt="Imagem 6" />
    </div>
  </div>
</template>

<style>
.instagram-shop {
  width: 100%;
  max-width: 1216px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}

.titulos {
  width: 100%;
  max-width: 1216px;
  height: 60px;
}

.titulos h1 {
  width: 1180px;
  height: 28px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #24262d;
  font-family: Inter;
}

.titulos a {
  width: 1180px;
  height: 28px;
  text-decoration: none;
  color: #1570ef;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
}

.container-imagens {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: 1216px;
  height: auto;
}

.container-imagens img {
  width: calc(33.33% - 16px);
  height: auto;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .container-imagens img {
    width: calc(50% - 16px);
  }

  @media screen and (max-width: 380px) {
    .container-imagens img {
      width: calc(100% - 16px);
    }
  }
}
</style>
