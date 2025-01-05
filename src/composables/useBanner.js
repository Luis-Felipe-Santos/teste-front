import { ref } from 'vue'
import Banner from '@/assets/Banner.svg'
import Banner2 from '@/assets/Banner2.svg'
import Banner3 from '@/assets/Banner3.svg'

export function useBanner() {
  const banners = ref({
    dados: [
      { id: 1, image: Banner, nome: 'Banner 1' },
      { id: 2, image: Banner2, nome: 'Banner 2' },
      { id: 3, image: Banner3, nome: 'Banner 3' },
    ],
  })
  return { banners }
}
