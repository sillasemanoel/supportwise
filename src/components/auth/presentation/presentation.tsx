// Styles
import { PresentationStyle } from './style'

export default function PresentationComponent() {
  return (
    <PresentationStyle>
      <div className='ghostPresentation'>
        <ul>
          <li>
            <span className='arrowPresentation'>▶</span>
          </li>
          <li>
            <span>Plataforma</span>
          </li>
          <li>
            <span>digital para</span>
          </li>
          <li>
            <span>assistências</span>
          </li>
          <li>
            <span className='darkPresentation'>técnicas.</span>
          </li>
        </ul>
        <div>
          <span>Gere suas ordens de serviço.</span>
          <span>Eficiência para sua empresa e seus clientes.</span>
        </div>
      </div>
    </PresentationStyle>
  )
}
