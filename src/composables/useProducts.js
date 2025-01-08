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
      }
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
    window.location.reload()
  }

  function removerCarrinho(idProduto) {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    if (usuarioLogado) {
      const index = usuarioLogado.carrinhoCompras.indexOf(idProduto)
      if (index !== -1) {
        usuarioLogado.carrinhoCompras.splice(index, 1)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
        carrinho.value = [...usuarioLogado.carrinhoCompras]
      }
    }
    window.location.reload()
  }

  function alterarEstoque(produtoId, quantidade = 1) {
    const produto = produtos.value.dados.find((p) => p.id === produtoId)

    if (produto) {
      // Quantidade inicial começa com 1, se ainda não estiver definida.
      let novaQuantidade = produto.quantidade || 1

      // Se a quantidade for maior que 0 (incremento), verifica se há estoque suficiente.
      if (quantidade > 0 && produto.estoque === 0) {
        alert('Não há estoque suficiente para adicionar mais unidades.')
        return
      }

      // Atualiza a quantidade do carrinho.
      novaQuantidade += quantidade

      // Verifica se a quantidade no carrinho é menor que 1
      if (novaQuantidade < 1) {
        alert('A quantidade não pode ser menor que 1.')
        return
      }

      // Atualiza a quantidade no carrinho
      produto.quantidade = novaQuantidade

      // Se estiver incrementando, diminui o estoque
      if (quantidade > 0) {
        produto.estoque -= quantidade
        // Não permite que o estoque se torne negativo
        if (produto.estoque <= 1) {
          produto.estoque = 0
        }
      }
      // Se estiver decrementando, retorna a quantidade ao estoque
      else if (quantidade < 0) {
        // Aumenta o estoque pela quantidade removida
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
