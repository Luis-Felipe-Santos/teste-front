import data from '@/assets/data.json'
import { ref, watch } from 'vue'

export function useProduct() {
  const produtos = ref(data.produtos)
  const iphones = ref(data.iphones)
  const promocoes = ref(data.promocoes)
  const showLogin = ref(false)
  const carrinho = ref([])
  const usuarioLogado = ref(
    JSON.parse(localStorage.getItem('usuarioLogado')) || {
      carrinhoCompras: [],
      produtosFavoritados: [],
    },
  )

  const formatCurrency = (value) => {
    if (value || value === 0) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }
    return 'R$ 0,00'
  }

  // Watcher para sincronizar com localStorage sempre que usuarioLogado for alterado
  watch(
    usuarioLogado,
    (newValue) => {
      localStorage.setItem('usuarioLogado', JSON.stringify(newValue))
    },
    { deep: true },
  )

  function favoritarProduto(idProduto) {
    if (!usuarioLogado.value.produtosFavoritados.includes(idProduto)) {
      usuarioLogado.value.produtosFavoritados.push(idProduto)
    }
    window.location.reload()
  }

  function removerProdutoFavorito(produtoId) {
    const index = usuarioLogado.value.produtosFavoritados.indexOf(produtoId)
    if (index !== -1) {
      usuarioLogado.value.produtosFavoritados.splice(index, 1)
    }
    window.location.reload()
  }

  function exibirLogin() {
    showLogin.value = !showLogin.value
  }

  function adicionarCarrinho(idProduto) {
    if (!usuarioLogado.value.carrinhoCompras.includes(idProduto)) {
      usuarioLogado.value.carrinhoCompras.push(idProduto)
    }
    window.location.reload()
  }

  function removerCarrinho(idProduto) {
    const index = usuarioLogado.value.carrinhoCompras.indexOf(idProduto)
    if (index !== -1) {
      usuarioLogado.value.carrinhoCompras.splice(index, 1)
    }
    window.location.reload()
  }

  function alterarEstoque(produtoId, quantidade = 1) {
    const produto = produtos.value.dados.find((p) => p.id === produtoId)

    if (produto) {
      let novaQuantidade = produto.quantidade || 1

      if (quantidade > 0 && produto.estoque === 0) {
        alert('Não há estoque suficiente para adicionar mais unidades.')
        return
      }

      novaQuantidade += quantidade

      if (novaQuantidade < 1) {
        alert('A quantidade não pode ser menor que 1.')
        return
      }
      produto.quantidade = novaQuantidade

      if (quantidade > 0) {
        produto.estoque -= quantidade
        if (produto.estoque <= 1) {
          produto.estoque = 0
        }
      } else if (quantidade < 0) {
        produto.estoque += Math.abs(quantidade)
      }
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
