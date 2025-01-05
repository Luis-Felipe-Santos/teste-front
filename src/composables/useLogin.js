import { ref } from 'vue'
import data from '@/assets/data.json'

export function useLogin() {
  const email = ref('')
  const senha = ref('')
  const visibleModal = ref(false)
  const errorMessage = ref('')
  const usuarioLogado = ref(JSON.parse(localStorage.getItem('usuarioLogado')) ?? '')

  function estadoModal() {
    visibleModal.value = !visibleModal.value
  }

  function validarLogin() {
    // Verifica se o email e a senha correspondem a um usuário no JSON
    const usuario = data.usuarios.dados.find(
      (user) => user.email === email.value && user.password === senha.value,
    )

    if (usuario) {
      // Se o login for bem-sucedido, armazena as informações no Local Storage
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
      alert('Login bem-sucedido!') // Mensagem de sucesso
      estadoModal() // Fecha o modal
      window.location.reload()
    } else {
      errorMessage.value = 'Email ou senha incorretos.' // Mensagem de erro
      alert(errorMessage.value)
    }
  }

  function deslogar() {
    localStorage.removeItem('usuarioLogado')
    window.location.reload()
  }

  return {
    email,
    senha,
    visibleModal,
    estadoModal,
    validarLogin,
    deslogar,
    errorMessage,
    usuarioLogado,
  }
}
