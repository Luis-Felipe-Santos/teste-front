import data from '@/assets/data.json'
import { ref, watch } from 'vue'

export function useProduct() {
  const produtos = ref(data.produtos)
  const iphones = ref(data.iphones)
  const promocoes = ref(data.promocoes)
  const showLogin = ref(false)
  const carrinho = ref([])
  const usuarioLogado = ref(JSON.parse(localStorage.getItem('usuarioLogado')) ?? '')

  if (usuarioLogado.value) {
    carrinho.value = usuarioLogado.value.carrinhoCompras || []
  }

  const formatCurrency = (value) => {
    if (value || value === 0) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }
    return 'R$ 0,00'
  }
  // Quando o carrinho do usuário for alterado, atualize a referência local
  watch(
    () => usuarioLogado.value,
    (newValue) => {
      if (newValue) {
        carrinho.value = newValue.carrinhoCompras || []
      }
    },
    { deep: true },
  )

  // Sincronize com localStorage
  watch(
    carrinho,
    (newCarrinho) => {
      if (usuarioLogado.value) {
        usuarioLogado.value.carrinhoCompras = newCarrinho
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado.value))
      }
    },
    { deep: true },
  )
  function favoritarProduto(idProduto) {
    if (!usuarioLogado.value.produtosFavoritados.includes(idProduto)) {
      usuarioLogado.value.produtosFavoritados.push(idProduto)
    }
  }

  function removerProdutoFavorito(produtoId) {
    const index = usuarioLogado.value.produtosFavoritados.indexOf(produtoId)
    if (index !== -1) {
      usuarioLogado.value.produtosFavoritados.splice(index, 1)
    }
  }

  function exibirLogin() {
    showLogin.value = !showLogin.value
  }

  const adicionarCarrinho = (idProduto) => {
    const produto = produtos.value.dados.find((p) => p.id === idProduto)
    if (produto) {
      const produtoNoCarrinho = carrinho.value.find((p) => p.id === produto.id)
      if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade++
      } else {
        carrinho.value.push({ ...produto, quantidade: 1 })
      }
    }
  }

  const removerCarrinho = (idProduto) => {
    carrinho.value = carrinho.value.filter((produto) => produto.id !== idProduto)
  }

  function alterarEstoque(produtoId, quantidade = 1) {
    // Busca o produto no carrinho
    const produtoNoCarrinho = carrinho.value.find((p) => p.id === produtoId)

    if (produtoNoCarrinho) {
      // Se o produto estiver no carrinho, vamos atualizar a quantidade dele
      let novaQuantidade = produtoNoCarrinho.quantidade + quantidade

      // Valida se a quantidade no carrinho não vai para menos de 1
      if (novaQuantidade < 1) {
        alert('A quantidade não pode ser menor que 1.')
        return
      }

      // Verifica se o estoque tem unidades suficientes
      const produtoNoEstoque = produtos.value.dados.find((p) => p.id === produtoId)
      if (produtoNoEstoque.estoque < novaQuantidade) {
        alert('Não há estoque suficiente para adicionar mais unidades.')
        return
      }

      // Atualiza a quantidade no carrinho
      produtoNoCarrinho.quantidade = novaQuantidade

      // Atualiza o estoque
      if (quantidade > 0) {
        produtoNoEstoque.estoque -= quantidade
      } else if (quantidade < 0) {
        produtoNoEstoque.estoque += Math.abs(quantidade)
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
    usuarioLogado,
  }
}
