<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
    required: false,
  }
});
</script>

<template>
  <div v-if="visible">
    <h1>{{ props.title }}</h1>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
