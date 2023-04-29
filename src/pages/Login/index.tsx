import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import mulherPagePrincipal from "../../assets/mulher-page-principal2.svg";
import { Header } from "../../components/Header";
import { AuthContext } from "../../context/auth";
import { loginUser } from "../../services/api";
interface FormValues {
  email: string;
  password: string;
}

const schema = yup
  .object()
  .shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  })
  .required();

export function Login() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }, // Adicione essa propriedade na desestruturação
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });

  const onSubmit = async (data: any) => {
    if (data != null) {
      let result = await loginUser(data.email, data.password);
      if (result?.status === 200) {
        login(result);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
    setIsSuccess(true);
  };

  return (
    <div className="w-max-[144rem] flex h-[100%] flex-col bg-blue-dark">
      <Header showJustify={true} />

      <div className="my-auto  flex w-[55%] items-center justify-end  xl:w-[100%] xl:justify-center md:px-[2rem] mbl:w-[100%] ">
        <img
          src={mulherPagePrincipal}
          alt="mulher"
          className="absolute right-[0]  top-[0] h-[100%] w-[54.6rem] object-cover xl:hidden "
        />

        <div className="flex w-[100%]  max-w-[63.5rem] flex-col items-center rounded-[2.6rem] bg-[#FFFFFF] pb-[4rem]  ">
          <h2 className="mb-[6.4rem] mt-[6.4rem] text-[4.8rem] font-[700] md:text-[4rem]  mbl:mb-[2.8rem] mbl:mt-[4.1rem] mbl:text-[2.5rem]">
            Acesse a sua Conta
          </h2>

          <div className="w-[70%] sm:justify-center mbl:flex mbl:w-[85%]">
            <input
              type="email"
              placeholder="Insira seu email"
              {...register("email")}
              className={
                errors.email
                  ? "h-[6rem] w-[100%] rounded-[0.8rem] border border-red pl-[1rem] text-[2.4rem] placeholder-red mbl:h-[4.5rem] mbl:w-[90%] mbl:text-[1.3rem] "
                  : "mb-[2.4rem] h-[6rem] w-[100%] rounded-[0.8rem] border border-black pl-[1rem] text-[2.4rem] mbl:mb-[1.5rem]  mbl:h-[4.5rem] mbl:w-[90%] mbl:text-[1.3rem] "
              }
            />
            <span className=" mb-[1rem] mt-[0.8rem] block  pl-[1rem] text-[1.8rem] text-red">
              {
                errors.email
                  ? errors.email.message
                  : "" /* (result?.message === "" ? "" : result.message) */
              }
            </span>
          </div>

          <div className="w-[70%]  mbl:flex  mbl:w-[85%] mbl:justify-center">
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("password")}
              className={
                errors.password
                  ? "h-[6rem] w-[100%] rounded-[0.8rem] border border-red pl-[1rem] text-[2.4rem] placeholder-red mbl:h-[4.5rem] mbl:w-[90%] mbl:text-[1.3rem] "
                  : "mb-[2.4rem] h-[6rem] w-[100%] rounded-[0.8rem] border border-black pl-[1rem] text-[2.4rem] mbl:h-[4.5rem] mbl:w-[90%] mbl:text-[1.3rem] "
              }
            />
            <span className=" mb-[1rem] mt-[0.8rem] block  pl-[1rem] text-[1.8rem] text-red">
              {errors.password ? errors.password?.message : ""}{" "}
            </span>
          </div>

          <div className="mt-[2rem] flex w-[70%] justify-between mbl:mt-[0] mbl:w-[80%]">
            <div className="flex">
              <input
                className="mr-[1.2rem] h-[2.5rem] w-[2.8rem] border-green-medium mbl:mr-[0.5rem] mbl:h-[2.2rem] "
                type="checkbox"
              />
              <p className="text-[1.6rem]  mbl:text-[1.3rem] mbl:text-[1rem]">
                Matenha-me logado
              </p>
            </div>
            <Link
              to="#"
              className="text-[1.6rem] text-green-medium  mbl:text-[1.3rem] mbl:text-[1rem] "
            >
              Esqueceu a senha?
            </Link>
          </div>
          <button
            className="mt-[6.6rem] h-[6rem] w-[70%] rounded-[3.2rem] bg-[#01A195] mbl:mt-[4.5rem]  mbl:h-[4rem] mbl:max-w-[100%]"
            onClick={handleSubmit(onSubmit)}
          >
            <p className="text-[2.4rem] text-[#FFFFFF] mbl:text-[2.2rem] ">
              Logar
            </p>
          </button>
          <p className="mt-[6.4rem] text-[2.4rem]  mbl:mt-[4.4rem] mbl:text-[1.4rem]">
            Você é novo na Findy?{" "}
            <Link to="/cadastro" className="text-[#01A195]">
              {" "}
              Crie sua conta aqui
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
