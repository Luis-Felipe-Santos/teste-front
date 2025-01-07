import { ref } from 'vue'

export function useCar() {
  // Estado reativo para o carrinho
  const carrinhoAberto = ref(true)

  // Função para o estado do carrinho
  function estadoCarrinho() {
    carrinhoAberto.value = !carrinhoAberto.value
  }

  return {
    carrinhoAberto,
    estadoCarrinho,
  }
}
