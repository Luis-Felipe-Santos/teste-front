import data from '@/assets/data.json'
import { ref } from 'vue'
const carrinho = ref([])

export function useProduct() {
  const produtos = ref(data.produtos)
  const iphones = ref(data.iphones)
  const promocoes = ref(data.promocoes)
  const showLogin = ref(false)

  const formatCurrency = (value) => {
    if (value || value === 0) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }
    return 'R$ 0,00'
  }

  function favoritarProduto(idProduto) {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

    if (usuarioLogado) {
      if (!usuarioLogado.produtosFavoritados.includes(idProduto)) {
        usuarioLogado.produtosFavoritados.push(idProduto)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
      } else {
        alert(`Produto ${idProduto} já está nos favoritos.`)
      }
    } else {
      alert('Nenhum usuário logado encontrado.')
    }
    window.location.reload()
  }
  function removerProdutoFavorito(produtoId) {
    // Recupera o usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

    if (usuarioLogado) {
      // Verifica se o produto está favoritado
      const index = usuarioLogado.produtosFavoritados.indexOf(produtoId)

      if (index !== -1) {
        // Remove o ID do produto do array de produtosFavoritados
        usuarioLogado.produtosFavoritados.splice(index, 1)

        // Atualiza o localStorage com os novos dados do usuário
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))

        console.log(`Produto ${produtoId} removido dos favoritos.`)
      } else {
        console.log(`Produto ${produtoId} não está nos favoritos.`)
      }
    } else {
      console.log('Nenhum usuário logado encontrado.')
    }
    window.location.reload()
  }
  function exibirLogin() {
    showLogin.value = !showLogin.value
  }

  function adicionarCarrinho(idProduto) {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

    if (usuarioLogado) {
      if (!usuarioLogado.carrinhoCompras.includes(idProduto)) {
        usuarioLogado.carrinhoCompras.push(idProduto)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
        carrinho.value = [...usuarioLogado.carrinhoCompras] // Atualiza o estado reativo
        alert(`Produto ${idProduto} adicionado ao carrinho.`)
      } else {
        alert(`Produto ${idProduto} já está no carrinho.`)
      }
    } else {
      alert('Nenhum usuário logado encontrado.')
    }
  }

  function removerCarrinho(idProduto) {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

    if (usuarioLogado) {
      // Verifica se o produto está no carrinho
      const index = usuarioLogado.carrinhoCompras.indexOf(idProduto)

      if (index !== -1) {
        // Remove o produto do carrinho
        usuarioLogado.carrinhoCompras.splice(index, 1)

        // Atualiza o localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))

        // Atualiza o estado reativo do carrinho
        carrinho.value = [...usuarioLogado.carrinhoCompras]

        alert(`Produto ${idProduto} removido do carrinho.`)
      } else {
        alert(`Produto ${idProduto} não encontrado no carrinho.`)
      }
    } else {
      alert('Nenhum usuário logado encontrado.')
    }
  }
  return {
    produtos,
    formatCurrency,
    favoritarProduto,
    removerProdutoFavorito,
    exibirLogin,
    showLogin,
    adicionarCarrinho,
    carrinho,
    removerCarrinho,
    iphones,
    promocoes,
  }
}
