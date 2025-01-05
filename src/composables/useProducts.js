import data from '@/assets/data.json'
import { ref } from 'vue'

export function useProduct() {
  const produtos = ref(data.produtos)

  return {
    produtos,
  }
}
