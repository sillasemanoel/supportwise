// Dependencies
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
// Components
import StandardComponent from '../../../components/auth/presentation/presentation'
import DescriptionComponent from '../../../components/auth/@minorComponents/description/description'
import FormComponent from '../../../components/auth/@minorComponents/form/form'
import ColoredButtonComponent from '../../../components/auth/@minorComponents/buttons/coloredButton'
import SeparationOrComponent from '../../../components/auth/@minorComponents/separationOr/separationOr'
import SimpleButtonComponent from '../../../components/auth/@minorComponents/buttons/simpleButton'
// Styles
import { RegisterStyle } from './style'
// Images
import IconFiles from '../../../../public/images/system/icon.png'
import userOne from '../../../../public/images/system/user/userOne.png'
import userTwo from '../../../../public/images/system/user/userTwo.png'
import userThree from '../../../../public/images/system/user/userThree.png'
import userFour from '../../../../public/images/system/user/userFour.png'

// Definição do esquema de validação usando a biblioteca Zod
const schema = z.object({
  personType: z.string().nonempty('Selecione uma opção'),
  email: z
    .string()
    .nonempty('Campo obrigatório')
    .email({ message: 'Email inválido' })
    .toLowerCase()
    .refine((value) => {
      // Verifica se o email já existe na lista de usuários armazenada em localStorage
      const userList = JSON.parse(localStorage.getItem('userList') || '[]') as {
        id: number
        email: string
        password: string
        imagem: string
      }[]
      const emailExists = userList.some((user) => user.email === value)
      return !emailExists
    }, { message: 'Email já cadastrado' }),
  password: z
    .string()
    .nonempty('Campo obrigatório')
    .min(6, 'A senha deve ter de 6 a 18 caracteres ')
    .max(18, 'Só é permitido até 18 caracteres'),
})

// Definição do tipo para os campos do formulário de registro
interface RegisterFormInputs {
  personType: string
  email: string
  password: string
  completedRegistration: boolean
}

export default function Register() {
  // Estado para acompanhar se o usuário foi registrado com sucesso
  const [registered, setRegistered] = useState<boolean>(false)

  // Hook useForm para validação e tratamento do formulário
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(schema), // Usa o resolvedor Zod para validação
  })

  // Função para lidar com o envio do formulário e o registro do usuário
  const handleRegister = async (data: RegisterFormInputs) => {
    // Obtém a lista atual de usuários do localStorage
    const userList: {
      id: number
      email: string
      password: string
      imagem: string
      personType: string
    }[] = JSON.parse(localStorage.getItem('userList') || '[]') as {
      id: number
      email: string
      password: string
      imagem: string
      personType: string
    }[]

    // Calcula a próxima posição para o novo usuário
    const position = userList.length + 1

    // Array de imagens de usuário para seleção aleatória
    const imageList = [userOne, userTwo, userThree, userFour]
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    try {
      // Criptografa a senha do usuário usando o bcrypt
      const hashedPassword = await bcrypt.hash(data.password, 10)

      // Cria um novo objeto de usuário
      const newUser = {
        id: position,
        email: data.email,
        password: hashedPassword,
        imagem: `${randomImage}`,
        personType: data.personType,
        completedRegistration: false,
      }

      // Adiciona o novo usuário à lista de usuários
      userList.push(newUser)

      // Atualiza a lista de usuários no localStorage
      localStorage.setItem('userList', JSON.stringify(userList))

      // Define o estado 'registered' como true se o usuário for registrado com sucesso
      setRegistered(true)
    } catch (error) {
      // Define o estado 'registered' como false se o registro falhar
      setRegistered(false)
    }
  }

  // Opções para o campo de seleção de tipo de pessoa
  const personTypeOptions = [
    { value: '', label: 'Selecione uma opção' },
    { value: 'physicalPerson', label: 'Física' },
    { value: 'legalPerson', label: 'Jurídica' },
  ]

  return (
    <RegisterStyle>
      <div className='miniature'>
        <StandardComponent />
        <div className='treatment'>
          <img src={IconFiles} />
          <DescriptionComponent
            h1='Cadastro'
            p='Preencha os dados corretamente' />
          {registered ? (
            <>
              <div className='main'>
                <span className='successfulRegistration'>Parabéns! A primeira parte do seu cadastro foi concluida. Efetue o login com os dados cadastrados.</span>
                <Link to='/login'>
                  <ColoredButtonComponent>
                    <button type='button'>Fazer login</button>
                  </ColoredButtonComponent>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className='main'>
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <form onSubmit={handleSubmit(handleRegister)}>
                  <div>
                    <div className='line'>
                      <label>Pessoa</label>
                      {errors.personType && <span role='alert'>{errors.personType.message}</span>}
                    </div>
                    <select {...register('personType')}>
                      {personTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <FormComponent
                    title='Email'
                    error={errors.email && <span role='alert'>{errors.email.message}</span>}>
                    <input
                      type='text'
                      placeholder='Seu email'
                      {...register('email')} />
                  </FormComponent>
                  <FormComponent
                    title='Password'
                    error={errors.password && <span role='alert'>{errors.password.message}</span>}>
                    <input
                      type='password'
                      placeholder='Seu email'
                      {...register('password')} />
                  </FormComponent>
                  <ColoredButtonComponent>
                    <button type='submit'>Cadastrar</button>
                  </ColoredButtonComponent>
                  <SeparationOrComponent />
                  <Link to='/login'>
                    <SimpleButtonComponent>
                      <button type='button'>Fazer login</button>
                    </SimpleButtonComponent>
                  </Link>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </RegisterStyle>
  )
}
