// Dependencies
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// Components
import LoginPage from '../pages/auth/login/login'
import RegisterPage from '../pages/auth/register/register'
import ForgotThePasswordPage from '../pages/auth/forgotThePassword/forgotThePassword'
import HomePage from '../pages/main/home'

export default function AppRouter() {
  // Verificar se o usuário está logado
  const isLoggedInLocalStorage = !!localStorage.getItem('isLoggedIn')
  const isLoggedInSessionStorage = !!sessionStorage.getItem('isLoggedIn')

  // Informando que meu isLoggedIn pode estar guardado tanto no local como no session
  const isLoggedIn = isLoggedInLocalStorage || isLoggedInSessionStorage

  return (
    <Router>
      <Routes>
        {/* Rota curinga para redirecionar o usuário para a página correta com base no estado de login */}
        <Route
          path='*'
          element={
            isLoggedIn ? <Navigate to='/home' replace /> : <Navigate to='/login' replace />
          }
        />
        {/* Rota para a página Home */}
        <Route
          path='/home'
          element={
            isLoggedIn ? <HomePage /> : <Navigate to='/login' replace />
          }
        />
        {/* Rota para a página de login */}
        <Route
          path='/login'
          element={
            isLoggedIn ? <Navigate to='/home' replace /> : <LoginPage />
          }
        />
        {/* Rota para a página de registro */}
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        {/* Rota para a página de esqueci a senha */}
        <Route
          path='/forgotThePassword'
          element={<ForgotThePasswordPage />}
        />
      </Routes>
    </Router>
  )
}
