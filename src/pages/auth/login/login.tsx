// Dependencies
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import bcrypt from "bcryptjs";
// Components
import PresentationComponent from "../../../components/auth/presentation/presentation";
import DescriptionComponent from "../../../components/auth/@minorComponents/description/description";
import FormComponent from "../../../components/auth/@minorComponents/form/form";
import ColoredButtonComponent from "../../../components/auth/@minorComponents/buttons/coloredButton";
import SeparationOrComponent from "../../../components/auth/@minorComponents/separationOr/separationOr";
import SimpleButtonComponent from "../../../components/auth/@minorComponents/buttons/simpleButton";
// Styles
import { LoginStyle } from "./style";
// Images
import IconFiles from "../../../../public/images/system/icon.png";

const schema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Formato de email inválido")
    .toLowerCase()
    .refine((value) => {
      const userList = JSON.parse(localStorage.getItem("userList") || "[]") as {
        id: number;
        email: string;
        password: string;
      }[];
      const user = userList.find((u) => u.email === value);
      return !!user;
    }, "Usuário não cadastrado"),
  password: z.string().nonempty("Campo obrigatório"),
});

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const handleLogin = async (data: LoginFormInputs) => {
    const userList = JSON.parse(localStorage.getItem("userList") || "[]") as {
      id: number;
      email: string;
      password: string;
    }[];

    if (userList.length === 0) {
      setLoginError("Nenhum usuário cadastrado");
      return;
    }

    const user = userList.find((u) => u.email === data.email);

    if (user) {
      try {
        const isPasswordCorrect = await bcrypt.compare(
          data.password,
          user.password
        );

        if (isPasswordCorrect) {
          if (keepLoggedIn) {
            localStorage.setItem("isLoggedIn", "true");
            sessionStorage.removeItem("isLoggedIn");
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            sessionStorage.setItem("isLoggedIn", "true");
            localStorage.removeItem("isLoggedIn");
            sessionStorage.setItem("user", JSON.stringify(user));
          }

          window.location.href = "/";
        } else {
          setLoginError("Senha incorreta");
        }
      } catch (error) {
        console.error(error);
        setLoginError(
          "Ocorreu um erro ao fazer o login. Por favor, tente novamente."
        );
      }
    }
  };

  const handlePasswordInput = () => {
    setLoginError(null);
  };

  const handleKeepLoggedInChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setKeepLoggedIn(event.target.checked);
  };

  return (
    <LoginStyle>
      <div className="miniature">
        <PresentationComponent />
        <div className="treatment">
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(handleLogin)}>
            <img src={IconFiles} alt="Icon" />
            <DescriptionComponent
              h1="Ola, sou a Supportwise!"
              p="Insira as informações abaixo."
            />
            <FormComponent
              title="Email"
              error={errors.email && <span>{errors.email.message}</span>}
            >
              <input
                type="text"
                placeholder="E-mail"
                {...register("email")}
                onInput={handlePasswordInput}
              />
            </FormComponent>
            <FormComponent
              title="Senha"
              error={
                <>
                  {errors.password && <span>{errors.password.message}</span>}
                  {loginError && <span>{loginError}</span>}
                </>
              }
            >
              <input
                type="password"
                placeholder="Senha"
                {...register("password")}
                onInput={handlePasswordInput}
              />
            </FormComponent>
            <div className="options">
              <label>
                Mantenha-me logado
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={handleKeepLoggedInChange}
                />
                <span></span>
              </label>
              <Link to="/forgotThePassword">
                <p>Esqueceu da senha?</p>
              </Link>
            </div>
            <ColoredButtonComponent>
              <button type="submit">Entrar</button>
            </ColoredButtonComponent>
            <SeparationOrComponent />
            <Link to="/register">
              <SimpleButtonComponent>
                <button type="button">Cadastre-se</button>
              </SimpleButtonComponent>
            </Link>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
}
