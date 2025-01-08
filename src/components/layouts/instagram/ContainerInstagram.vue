<template>
  <div class="instagram-shop">
    <div class="titulos">
      <h1>Nosso Instagram</h1>
      <a href="#">@models</a>
    </div>
    <div class="container-imagens">
      <img src="@/assets/image1.svg" alt="" />
      <img src="@/assets/image2.svg" alt="" />
      <img src="@/assets/image3.svg" alt="" />
      <img src="@/assets/image4.svg" alt="" />
      <img src="@/assets/image5.svg" alt="" />
      <img src="@/assets/image6.svg" alt="" />
    </div>
  </div>
</template>

<style>
.instagram-shop {
  width: 100%;
  max-width: 1216px;
  height: 468px;
  background-color: aqua;
  margin: 0 auto;
  overflow: hidden; 
}
.titulos {
  width: 100%;
  max-width: 1216px;
  height: 60px;
  background-color: pink;
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
  width: 100%;
  max-width: 1216px;
  height: 384px;
  background-color: aquamarine;
}
</style>
