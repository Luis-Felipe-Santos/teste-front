<template>
  <div class="banners-secundarios">
    <div class="banner-playstation">
      <img src="@/assets/banner-playstation.svg" alt="banner-playstation" />
    </div>
    <div class="banner-xbox">
      <img src="@/assets/banner-xbox.svg" alt="banner-xbox" />
    </div>
  </div>
</template>

<style>
.banners-secundarios {
  width: 100%;
  max-width: 1216px;
  height: 180px;
  gap: 32px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 48px;
  justify-content: space-between;
}

.banner-playstation,
.banner-xbox {
  flex: 1;
}

.banner-playstation img,
.banner-xbox img {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .banners-secundarios {
    flex-direction: column;
    align-items: center;
  }

  .banner-playstation,
  .banner-xbox {
    width: 100%;
    margin-bottom: 16px;
  }

  .banner-playstation img,
  .banner-xbox img {
    max-height: 120px;
    object-fit: contain;
  }
}
</style>
