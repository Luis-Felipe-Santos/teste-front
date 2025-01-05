<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>

<template>
  <div v-if="visible">
    <h1>{{ props.title }}</h1>
    <slot></slot>
  </div>
</template>

<style>
/* Header do popup */
.header-popup {
  width: 100%;
  max-width: 329px;
  height: 88px;
  padding: 0 16px 12px 16px;
  border-bottom: 1px solid #edeef1;
}

.text-popup {
  max-width: 258px;
  height: 64px;
  gap: 4px;
}

.text1 {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8a94a6;
}

.text2 {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #b3b9c6;
}

.span1 {
  color: #1570ef;
  font-weight: 600;
}

.span2 {
  text-decoration: underline solid;
  text-decoration-color: #b3b9c6;
  cursor: pointer;
}

/* Formulário */
.form-group {
  width: 100%;
  height: 196px;
  gap: 12px;
  display: grid;
  padding: 20px 0;
}

.input-email,
.input-senha {
  width: 297px;
  height: 44px;
  gap: 6px;
  border: 1px solid #d7dae0;
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 12px;
}

input::placeholder {
  font-size: 16px;
  color: #b3b9c6;
}
.submit-button {
  width: 150px;
  height: 44px;
  border-radius: 8px;
  background-color: #1570ef;
  border: 1px solid #1570ef;
  color: #ffffff;
  font-size: 14px; /* Ajustado para o tamanho do botão */
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.submit-button:hover {
  background-color: #125abc;
}
.submit-button:focus {
  outline: none;
}
</style>
