<template>
  <div class="pitchbar">
    <div class="pitchbar-items">
      <img src="@/assets/left-arrow.svg" alt="left-arrow" />
      <p><span>Frete grátis</span> a partir de <span>R$ 199,99</span> para todo o Brasil!</p>
      <img src="@/assets/right-arrow.svg" alt="right-arrow" />
    </div>
  </div>
</template>

<style>
.pitchbar {
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f9;
}
.pitchbar-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 76px;
  width: 100vw;
  max-width: 1248px;
  height: 24px;
  padding: 0px 16px 0px 16px;
  gap: 12px;
}
.pitchbar-items p {
  font-family: Inter;
  line-height: 20px;
  font-size: 14px;
  width: 347px;
  height: 20px;
  color: #24262d;
}

span {
  font-weight: bold;
}
</style>
