<template>
  <div class="pitchbar">
    <div class="pitchbar-items">
      <img src="@/assets/left-arrow.svg" alt="left-arrow" />
      <p><span>Frete grátis</span> a partir de <span>R$ 199,99</span> para todo o Brasil!</p>
      <img src="@/assets/right-arrow.svg" alt="right-arrow" />
    </div>
  </div>
</template>

<style scoped>
.pitchbar {
  width: 100%;
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
  margin: 8px 16px;
  width: 100%;
  max-width: 1248px;
  height: 24px;
  padding: 0 16px;
  gap: 12px;
}

.pitchbar-items p {
  font-family: Inter, sans-serif;
  line-height: 20px;
  font-size: 14px;
  color: #24262d;
  word-wrap: break-word; /* Permite quebra de palavras */
  overflow-wrap: break-word; /* Compatibilidade adicional */
}

span {
  font-weight: bold;
}

/* Media query para telas menores */
@media (max-width: 600px) {
  .pitchbar-items p {
    font-size: 12px; /* Ajusta o tamanho da fonte em telas pequenas */
    
  }
}
</style>
