import { ref } from 'vue'

import vitrineData from '@/assets/data.json'

export function useVitrine() {
  const produtos = ref(vitrineData.produtos.dados) // Inicializa com a vitrine de produtos
  const vitrineSelecionada = ref('produtos') // Variável para controlar o tab selecionado

  function selecionarVitrine(vitrine) {
    vitrineSelecionada.value = vitrine
    if (vitrine === 'produtos') {
      produtos.value = vitrineData.produtos.dados
    } else if (vitrine === 'iphones') {
      // Alteração de 'promocoes' para 'iphones'
      produtos.value = vitrineData.vitrineIphones
    } else if (vitrine === 'promocoes') {
      produtos.value = vitrineData.vitrinePromocoes.tabs.flatMap((tab) => tab.produtos)
    }
  }

  return {
    produtos,
    selecionarVitrine,
    vitrineSelecionada,
  }
}
