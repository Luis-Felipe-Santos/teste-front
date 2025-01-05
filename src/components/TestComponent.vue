<script setup>
  import { ref } from 'vue';
  import MainHeader from '@/components/layouts/header/MainHeader.vue';

  const user = 'Usuário logado';
  const logado = ref(false);
</script>

<template>
  <MainHeader
    :title="user"
    :logado="logado"
  />
</template>

<style scoped>

</style>
