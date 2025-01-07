import data from '@/assets/data.json'
import { ref } from 'vue'

export function useProduct() {
  const produtos = ref(data.produtos)
  const iphones = ref(data.iphones)
  const promocoes = ref(data.promocoes)
  const showLogin = ref(false)
  const carrinho = ref([])

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
      }
    }
    window.location.reload()
  }

  function removerProdutoFavorito(produtoId) {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    if (usuarioLogado) {
      const index = usuarioLogado.produtosFavoritados.indexOf(produtoId)
      if (index !== -1) {
        usuarioLogado.produtosFavoritados.splice(index, 1)
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
      }
    }
  }

  function removerCarrinho(idProduto) {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    if (usuarioLogado) {
      const index = usuarioLogado.carrinhoCompras.indexOf(idProduto)
      if (index !== -1) {
        usuarioLogado.carrinhoCompras.splice(index, 1)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
        carrinho.value = [...usuarioLogado.carrinhoCompras]
        alert(`Produto ${idProduto} removido do carrinho.`)
      } else {
        alert(`Produto ${idProduto} não encontrado no carrinho.`)
      }
    } else {
      alert('Nenhum usuário logado encontrado.')
    }
  }

  function alterarEstoque(produtoId, quantidade = 1) {
    const produto = produtos.value.dados.find((p) => p.id === produtoId)

    if (produto) {
      const novoEstoque = produto.estoque + quantidade

      // Verifica se a quantidade está dentro do limite permitido
      if (novoEstoque < 0) {
        alert('A quantidade não pode ser menor que zero.')
        return
      }
      if (novoEstoque > produto.estoqueMaximo) {
        alert(
          `A quantidade não pode ser maior que o estoque disponível (${produto.estoqueMaximo}).`,
        )
        return
      }
      produto.estoque = novoEstoque
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
    alterarEstoque,
  }
}
