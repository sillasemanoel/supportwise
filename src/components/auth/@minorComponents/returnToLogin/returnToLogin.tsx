// Dependencies
import { Link } from "react-router-dom";
// Styles
import { ReturnToLoginStyle } from "./style";

export default function ReturnToLogin() {
  return (
    <ReturnToLoginStyle>
      <p>Deseja voltar a tela de login?</p>
      <Link to={"/login"}>
        <h4>Logar</h4>
      </Link>
    </ReturnToLoginStyle>
  );
}

