// Dependencies
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Components
import PresentationComponent from "../../../components/auth/presentation/presentation";
import DescriptionComponent from "../../../components/auth/@minorComponents/description/description";
import FormComponent from "../../../components/auth/@minorComponents/form/form";
import ColoredButtonComponent from "../../../components/auth/@minorComponents/buttons/coloredButton";
import SeparationOrComponent from "../../../components/auth/@minorComponents/separationOr/separationOr";
import SimpleButtonComponent from "../../../components/auth/@minorComponents/buttons/simpleButton";
// Styles
import { ForgotThePasswordStyle } from "./style";
// Images
import IconFiles from "../../../../public/images/system/icon.png";

type FormValues = {
  email: string;
};

const schema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Formato de email inválido.")
    .toLowerCase(),
});

export default function ForgotThePassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <ForgotThePasswordStyle>
      <div className="miniature">
        <PresentationComponent />
        <div className="treatment">
          <form onSubmit={handleSubmit(onSubmit)}>
            <img src={IconFiles} alt="Icon" />
            <DescriptionComponent
              h1="Esqueceu a senha?"
              p="Insira as informações abaixo"
            />
            <FormComponent
              title="Email"
              error={errors.email && <span>{errors.email.message}</span>}
            >
              <input
                type="text"
                placeholder="Seu email"
                {...register("email")}
              />
            </FormComponent>
            <ColoredButtonComponent>
              <button type="submit">Enviar</button>
            </ColoredButtonComponent>
            <SeparationOrComponent />
            <Link to="/login">
              <SimpleButtonComponent>
                <button type="button">Fazer login</button>
              </SimpleButtonComponent>
            </Link>
          </form>
        </div>
      </div>
    </ForgotThePasswordStyle>
  );
}
