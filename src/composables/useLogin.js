import { ref, computed } from 'vue'
import data from '@/assets/data.json'

export function useLogin() {
  const email = ref('')
  const senha = ref('')
  const visibleModal = ref(false)
  const errorMessage = ref('')
  const usuarioLogado = ref(
    JSON.parse(localStorage.getItem('usuarioLogado')) || {
      carrinhoCompras: [],
      produtosFavoritados: [],
    },
  )

  function estadoModal() {
    visibleModal.value = !visibleModal.value
  }

  function validarLogin() {
    console.log('Email:', email.value)
    console.log('Senha:', senha.value)
    console.log('Formulário de login submetido')

    // Verifica se o email e a senha correspondem a um usuário no JSON
    const usuario = data.usuarios.dados.find(
      (user) => user.email === email.value && user.password === senha.value,
    )
    console.log('Usuário encontrado:', usuario)
    if (usuario) {
      // Se o login for bem-sucedido, armazena as informações no Local Storage
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
      usuarioLogado.value = usuario
      alert('Login bem-sucedido!')
      estadoModal()
      window.location.reload()
    } else {
      errorMessage.value = 'Email ou senha incorretos.'
      alert(errorMessage.value)
    }
  }

  function deslogar() {
    localStorage.removeItem('usuarioLogado')
    usuarioLogado.value = {} // Atualiza a variável reativa
    window.location.reload()
  }

  // Computed para verificar se o usuário está logado
  const isLoggedIn = computed(() => {
    return Object.keys(usuarioLogado.value).length > 0 // Retorna true se o usuário estiver logado
  })

  return {
    email,
    senha,
    visibleModal,
    estadoModal,
    validarLogin,
    deslogar,
    errorMessage,
    usuarioLogado,
    isLoggedIn, // Retorna a propriedade computada
  }
}
