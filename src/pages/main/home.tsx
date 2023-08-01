// Dependencies
import { useEffect, useState } from 'react'

// Definir uma interface para o objeto de usuário
interface User {
  id: number
  name: string
  email: string
  imagem: string
}

export default function Home() {
  // Definir um estado para armazenar o objeto de usuário
  const [user, setUser] = useState<User | null>(null)

  // Função para lidar com o evento de logout
  const handleLogout = () => {
    // Remover informações do usuário do armazenamento local (localStorage) e de sessão (sessionStorage)
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')
    sessionStorage.removeItem('isLoggedIn')
    sessionStorage.removeItem('user')
    // Redirecionar para a página de login usando a propriedade window.location.href
    window.location.href = '/'
  }

  // useEffect utilizado para executar tarefas ao montar o componente Home
  useEffect(() => {
    // Obter informações do usuário do armazenamento local (localStorage) ou de sessão (sessionStorage)
    const userLocalStorage: User = JSON.parse(localStorage.getItem('user') || 'null') as User
    const userSessionStorage: User = JSON.parse(sessionStorage.getItem('user') || 'null') as User

    // Verificar se há um usuário autenticado
    const user = userLocalStorage || userSessionStorage

    if (user) {
      // Definir o estado do usuário se houver um usuário autenticado
      setUser(user)
    } else {
      // Redirecionar para a página de login caso não haja um usuário autenticado
      window.location.href = '/login'
    }
  }, []) // O array de dependências vazio indica que o useEffect será executado apenas uma vez, ao montar o componente

  // Se não houver um usuário autenticado (aguardando a verificação no useEffect)
  if (!user) {
    // Retornar nulo se não houver um usuário autenticado (aguardando a verificação no useEffect)
    return null
  }

  return (
    <div>
      <h1>Bem-vindo, {user.name}!</h1>
      <img src={user.imagem} alt='Imagem do usuário' />
      <p>ID: {user.id}</p>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}
