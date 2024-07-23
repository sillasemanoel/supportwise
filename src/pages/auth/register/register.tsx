// Dependencies
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import bcrypt from "bcryptjs";
// Components
import StandardComponent from "../../../components/auth/presentation/presentation";
import DescriptionComponent from "../../../components/auth/@minorComponents/description/description";
import FormComponent from "../../../components/auth/@minorComponents/form/form";
import ColoredButtonComponent from "../../../components/auth/@minorComponents/buttons/coloredButton";
import SeparationOrComponent from "../../../components/auth/@minorComponents/separationOr/separationOr";
import SimpleButtonComponent from "../../../components/auth/@minorComponents/buttons/simpleButton";
// Styles
import { RegisterStyle } from "./style";
// Images
import IconFiles from "../../../../public/images/system/icon.png";
import userOne from "../../../../public/images/system/user/userOne.png";
import userTwo from "../../../../public/images/system/user/userTwo.png";
import userThree from "../../../../public/images/system/user/userThree.png";
import userFour from "../../../../public/images/system/user/userFour.png";
import userFive from "../../../../public/images/system/user/userFive.png";
import userSix from "../../../../public/images/system/user/userSix.png";
import userSeven from "../../../../public/images/system/user/userSeven.png";
import userEight from "../../../../public/images/system/user/userEight.png";

const schema = z.object({
  name: z
    .string()
    .nonempty("Campo obrigatório")
    .regex(/^[A-Za-z\s]+$/, "Apenas letras e espaços")
    .transform((value) => {
      const formattedValue = value
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
      return formattedValue.replace(/\s+/g, " ");
    }),
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email({ message: "Email inválido" })
    .toLowerCase()
    .refine(
      (value) => {
        const userList = JSON.parse(
          localStorage.getItem("userList") || "[]"
        ) as {
          id: number;
          email: string;
          password: string;
          imagem: string;
        }[];
        const emailExists = userList.some((user) => user.email === value);
        return !emailExists;
      },
      { message: "Email já cadastrado" }
    ),
  password: z
    .string()
    .nonempty("Campo obrigatório")
    .min(6, "A senha deve ter de 6 a 18 caracteres ")
    .max(18, "Só é permitido até 18 caracteres"),
});

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [registered, setRegistered] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(schema),
  });

  const handleRegister = async (data: RegisterFormInputs) => {
    const userList = JSON.parse(localStorage.getItem("userList") || "[]") as {
      id: number;
      email: string;
      password: string;
      imagem: string;
    }[];

    const position = userList.length + 1;

    const imageList = [
      userOne,
      userTwo,
      userThree,
      userFour,
      userFive,
      userSix,
      userSeven,
      userEight,
    ];
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)];

    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);

      const newUser = {
        id: position,
        name: data.name,
        email: data.email,
        password: hashedPassword,
        imagem: `${randomImage}`,
      };

      userList.push(newUser);

      localStorage.setItem("userList", JSON.stringify(userList));

      setRegistered(true);
    } catch (error) {
      setRegistered(false);
    }
  };

  return (
    <RegisterStyle>
      <div className="miniature">
        <StandardComponent />
        <div className="treatment">
          {registered ? (
            <>
              <div className="main">
                <span className="successfulRegistration">
                  Parabéns! 🎉🌟 Seja bem-vindo(a) à nossa comunidade! :) 🚀
                </span>
                <Link to="/login">
                  <ColoredButtonComponent>
                    <button type="button">Fazer login</button>
                  </ColoredButtonComponent>
                </Link>
              </div>
            </>
          ) : (
            <>
              <img src={IconFiles} alt="Icon" />
              <DescriptionComponent
                h1="Cadastre-se"
                p="Preencha os dados corretamente."
              />
              <div className="main">
                <form onSubmit={handleSubmit(handleRegister)}>
                  <FormComponent
                    title="Nome"
                    error={
                      errors.name && (
                        <span role="alert">{errors.name.message}</span>
                      )
                    }
                  >
                    <input
                      type="text"
                      placeholder="Nome"
                      {...register("name")}
                    />
                  </FormComponent>
                  <FormComponent
                    title="Email"
                    error={
                      errors.email && (
                        <span role="alert">{errors.email.message}</span>
                      )
                    }
                  >
                    <input
                      type="text"
                      placeholder="E-mail"
                      {...register("email")}
                    />
                  </FormComponent>
                  <FormComponent
                    title="Password"
                    error={
                      errors.password && (
                        <span role="alert">{errors.password.message}</span>
                      )
                    }
                  >
                    <input
                      type="password"
                      placeholder="Senha"
                      {...register("password")}
                    />
                  </FormComponent>
                  <ColoredButtonComponent>
                    <button type="submit">Cadastrar</button>
                  </ColoredButtonComponent>
                  <SeparationOrComponent />
                  <Link to="/login">
                    <SimpleButtonComponent>
                      <button type="button">Fazer login</button>
                    </SimpleButtonComponent>
                  </Link>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </RegisterStyle>
  );
}
