// Dependencies
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
// Components
import PresentationComponent from '../../../components/auth/presentation/presentation'
import DescriptionComponent from '../../../components/auth/@minorComponents/description/description'
import FormComponent from '../../../components/auth/@minorComponents/form/form'
import ColoredButtonComponent from '../../../components/auth/@minorComponents/buttons/coloredButton'
import SeparationOrComponent from '../../../components/auth/@minorComponents/separationOr/separationOr'
import SimpleButtonComponent from '../../../components/auth/@minorComponents/buttons/simpleButton'
// Styles
import { LoginStyle } from './style'
// Images
import IconFiles from '../../../../public/images/system/icon.png'

// Definição do esquema de validação usando a biblioteca Zod
const schema = z.object({
  email: z
    .string()
    .nonempty('Campo obrigatório')
    .email('Formato de email inválido')
    .toLowerCase()
    .refine((value) => {
      // Verifica se o email existe na lista de usuários do localStorage
      const userList = JSON.parse(localStorage.getItem('userList') || '[]') as {
        id: number
        email: string
        password: string
      }[]
      // Verificar se o email não está em uso
      const user = userList.find((u) => u.email === value)
      // Retornar true se o email estiver em uso
      return !!user
    }, 'Usuário não cadastrado'),
  password: z
    .string()
    .nonempty('Campo obrigatório'),
})

// Tipo para os campos do formulário de login
interface LoginFormInputs {
  email: string
  password: string
}

export default function Login() {
  // Estado para gerenciar a mensagem de erro de login
  const [loginError, setLoginError] = useState<string | null>(null)
  // Estado para gerenciar a opção 'Mantenha-me logado'
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)

  // Configuração do useForm para gerenciar o estado e a validação do formulário
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  })

  // Função para lidar com o evento de login
  const handleLogin = async (data: LoginFormInputs) => {
    // Obter a lista de usuários do localStorage
    const userList = JSON.parse(localStorage.getItem('userList') || '[]') as {
      id: number
      email: string
      password: string
    }[]

    // Verificar se a lista de usuários está vazia
    if (userList.length === 0) {
      // Se estiver vazia, exibir mensagem de erro
      setLoginError('Nenhum usuário cadastrado')
      return
    }

    // Encontrar o usuário com o email fornecido
    const user = userList.find((u) => u.email === data.email)

    if (user) {
      try {
        // Verificar se a senha está correta usando bcrypt.compare
        const isPasswordCorrect = await bcrypt.compare(data.password, user.password)

        if (isPasswordCorrect) {
          if (keepLoggedIn) {
            // Se a opção 'Mantenha-me logado' estiver marcada, armazenar no localStorage
            localStorage.setItem('isLoggedIn', 'true')
            sessionStorage.removeItem('isLoggedIn')
            localStorage.setItem('user', JSON.stringify(user))
          } else {
            // Caso contrário, armazenar na sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true')
            localStorage.removeItem('isLoggedIn')
            sessionStorage.setItem('user', JSON.stringify(user))
          }

          // Redirecionar para a página home após o login bem-sucedido
          window.location.href = '/'
        } else {
          // Exibir mensagem de erro de senha incorreta
          setLoginError('Senha incorreta')
        }
      } catch (error) {
        // Lidar com quaisquer erros que possam ocorrer durante a comparação da senha
        console.error(error)
        setLoginError('Ocorreu um erro ao fazer o login. Por favor, tente novamente.')
      }
    }
  }

  // Função para lidar com o evento de digitação no campo de senha
  const handlePasswordInput = () => {
    // Limpar a mensagem de erro de login
    setLoginError(null)
  }

  // Função para lidar com a alteração da opção 'Mantenha-me logado'
  const handleKeepLoggedInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeepLoggedIn(event.target.checked)
  }

  return (
    <LoginStyle>
      <div className='miniature'>
        <PresentationComponent />
        <div className='treatment'>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(handleLogin)}>
            <img src={IconFiles} />
            <DescriptionComponent
              h1='Ola, sou a Supportwise'
              p='Insira as informações abaixo ' />
            <FormComponent
              title='Email'
              error={errors.email && <span>{errors.email.message}</span>}>
              <input
                type='text'
                placeholder='Seu email'
                {...register('email')}
                onInput={handlePasswordInput} />
            </FormComponent>
            <FormComponent
              title='Senha'
              error={
                <>
                  {errors.password && <span>{errors.password.message}</span>}
                  {loginError && <span>{loginError}</span>}
                </>
              }>
              <input
                type='password'
                placeholder='Sua senha'
                {...register('password')}
                onInput={handlePasswordInput} />
            </FormComponent>
            <div className='options'>
              <label>
                Mantenha-me logado
                <input
                  type='checkbox'
                  checked={keepLoggedIn}
                  onChange={handleKeepLoggedInChange} />
                <span></span>
              </label>
              <Link to='/forgotThePassword'>
                <p>Esqueceu da senha?</p>
              </Link>
            </div>
            <ColoredButtonComponent>
              <button type='submit'>Entrar</button>
            </ColoredButtonComponent>
            <SeparationOrComponent />
            <Link to='/register'>
              <SimpleButtonComponent>
                <button type='button'>Cadastre-se</button>
              </SimpleButtonComponent>
            </Link>
          </form>
        </div>
      </div>
    </LoginStyle>
  )
}
