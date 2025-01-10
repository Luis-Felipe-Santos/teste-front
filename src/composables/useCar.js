import { ref } from 'vue'

export function useCar() {
  const carrinhoAberto = ref(false)

  function estadoCarrinho() {
    carrinhoAberto.value = !carrinhoAberto.value
  }

  return {
    carrinhoAberto,
    estadoCarrinho,
  }
}
