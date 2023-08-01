// Dependencies
import { Link } from 'react-router-dom'
// Components
import PresentationComponent from '../../../components/auth/presentation/presentation'
import DescriptionComponent from '../../../components/auth/@minorComponents/description/description'
import FormComponent from '../../../components/auth/@minorComponents/form/form'
import ColoredButtonComponent from '../../../components/auth/@minorComponents/buttons/coloredButton'
import SeparationOrComponent from '../../../components/auth/@minorComponents/separationOr/separationOr'
import SimpleButtonComponent from '../../../components/auth/@minorComponents/buttons/simpleButton'
// Styles
import { ForgotThePasswordStyle } from './style'
// Images
import IconFiles from '../../../../public/images/system/icon.png'

export default function ForgotThePassword() {
  return (
    <ForgotThePasswordStyle>
      <div className='miniature'>
        <PresentationComponent />
        <div className='treatment'>
          <img src={IconFiles} />
          <DescriptionComponent
            h1='Esqueceu a senha?'
            p='Insira as informações abaixo' />
          <FormComponent
            title='Email'
            error=''>
            <input
              type='text'
              placeholder='Seu email' />
          </FormComponent>
          <ColoredButtonComponent>
            <button type='submit'>Enviar</button>
          </ColoredButtonComponent>
          <SeparationOrComponent />
          <Link to='/login'>
            <SimpleButtonComponent>
              <button type='button'>Fazer login</button>
            </SimpleButtonComponent>
          </Link>
        </div>
      </div>
    </ForgotThePasswordStyle >
  )
}
