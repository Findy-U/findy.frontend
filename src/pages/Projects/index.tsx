import { Calendar, ListNumbers } from "@phosphor-icons/react";
import { Heading } from "../../components/Heading";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/menu";


export function Projects(){
  return(
    <>
    <header className="bg-blue-dark pt-14 sm:pt-5 pb-32">
      <div className="flex items-center justify-between mx-auto px-4 sm:flex-col sm:gap-[2rem] max-w-[980px] ">
        <Logo />
        <div className="text-green-medium flex items-center gap-16 font-bold text-[18px]">
          <a href="/home" target="_blank">A Findy</a>
          <button className="border-solid border-green-medium border-[1px] rounded-full px-8 py-3">Logout</button>
        </div>
      </div>
      <div className="mx-auto max-w-[980px] mt-[68px] text-white px-2">
        <h1 className="text-[40px] font-bold md:text-center">Projetos disponíveis</h1>
        <h2 className="text-[18px] font-[300] md:text-center text-grey-#2 mt-[-3px]">visualize os projetos disponíveis na Findy</h2>
      </div>
    </header>    

    
    <main className="mx-auto max-w-[980px] mt-8 p-3">
      <button className="block font-bold text-green-medium text-[18px] rounded-full border-green-medium border-[2px] py-[7px] px-[40px] ml-auto tracking-[1.55px] mb-[27px]"><div className="flex items-center justify-center gap-[10px]"><ListNumbers size={22} />Filtrar e Ordenar</div></button>
      <ul className="grid grid-cols-2 sm:grid-cols-1 md:gap-[20px] gap-[40px] mb-[5rem]">
        <li className="rounded-lg p-8 shadow-[0px_5px_20px_5px_rgba(1,161,149,0.24)]">
          <h1 className="text-3xl font-bold mb-[10px]">Nome do projeto</h1>
          <p className="font-normal leading-8 text-[14px] mb-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

          <div>
            <p className="font-semibold text-[16px]">Data de inicio</p>
            <p className="flex items-end gap-[7px] font-normal leading-8 text-[14px] mb-[2rem]"><Calendar size={25} />18/05/2023</p>
          </div>

          <footer className="flex items-center md:flex-col md:gap-[10px] md:justify-center md:float-none gap-[38px] min-[715px]:flex-col ml-auto float-right">
            <div className="font-bold text-[16px] tracking-[0.91px] text-green-medium">Ver Mais</div>
            <button className="text-white text-[14px] tracking-[0.91px] font-bold w-[177px] py-[7px] flex align-center justify-center bg-green-medium rounded-full">Candidate-se</button>
          </footer>
        </li>

        <li className="rounded-lg p-8 shadow-[0px_5px_20px_5px_rgba(1,161,149,0.24)]">
          <h1 className="text-3xl font-bold mb-[10px]">Nome do projeto</h1>
          <p className="font-normal leading-8 text-[14px] mb-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

          <div>
            <p className="font-semibold text-[16px]">Data de inicio</p>
            <p className="flex items-end gap-[7px] font-normal leading-8 text-[14px] mb-[2rem]"><Calendar size={25} />18/05/2023</p>
          </div>

          <footer className="flex items-center md:flex-col md:gap-[10px] md:justify-center md:float-none gap-[38px] min-[715px]:flex-col ml-auto float-right">
            <div className="font-bold text-[16px] tracking-[0.91px] text-green-medium">Ver Mais</div>
            <button className="text-white text-[14px] tracking-[0.91px] font-bold w-[177px] py-[7px] flex align-center justify-center bg-green-medium rounded-full">Candidate-se</button>
          </footer>
        </li>

        <li className="rounded-lg p-8 shadow-[0px_5px_20px_5px_rgba(1,161,149,0.24)]">
          <h1 className="text-3xl font-bold mb-[10px]">Nome do projeto</h1>
          <p className="font-normal leading-8 text-[14px] mb-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

          <div>
            <p className="font-semibold text-[16px]">Data de inicio</p>
            <p className="flex items-end gap-[7px] font-normal leading-8 text-[14px] mb-[2rem]"><Calendar size={25} />18/05/2023</p>
          </div>

          <footer className="flex items-center md:flex-col md:gap-[10px] md:justify-center md:float-none gap-[38px] min-[715px]:flex-col ml-auto float-right">
            <div className="font-bold text-[16px] tracking-[0.91px] text-green-medium">Ver Mais</div>
            <button className="text-white text-[14px] tracking-[0.91px] font-bold w-[177px] py-[7px] flex align-center justify-center bg-green-medium rounded-full">Candidate-se</button>
          </footer>
        </li>

        <li className="rounded-lg p-8 shadow-[0px_5px_20px_5px_rgba(1,161,149,0.24)]">
          <h1 className="text-3xl font-bold mb-[10px]">Nome do projeto</h1>
          <p className="font-normal leading-8 text-[14px] mb-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

          <div>
            <p className="font-semibold text-[16px]">Data de inicio</p>
            <p className="flex items-end gap-[7px] font-normal leading-8 text-[14px] mb-[2rem]"><Calendar size={25} />18/05/2023</p>
          </div>

          <footer className="flex items-center md:flex-col md:gap-[10px] md:justify-center md:float-none gap-[38px] min-[715px]:flex-col ml-auto float-right">
            <div className="font-bold text-[16px] tracking-[0.91px] text-green-medium">Ver Mais</div>
            <button className="text-white text-[14px] tracking-[0.91px] font-bold w-[177px] py-[7px] flex align-center justify-center bg-green-medium rounded-full">Candidate-se</button>
          </footer>
        </li>

        <li className="rounded-lg p-8 shadow-[0px_5px_20px_5px_rgba(1,161,149,0.24)]">
          <h1 className="text-3xl font-bold mb-[10px]">Nome do projeto</h1>
          <p className="font-normal leading-8 text-[14px] mb-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

          <div>
            <p className="font-semibold text-[16px]">Data de inicio</p>
            <p className="flex items-end gap-[7px] font-normal leading-8 text-[14px] mb-[2rem]"><Calendar size={25} />18/05/2023</p>
          </div>

          <footer className="flex items-center md:flex-col md:gap-[10px] md:justify-center md:float-none gap-[38px] min-[715px]:flex-col ml-auto float-right">
            <div className="font-bold text-[16px] tracking-[0.91px] text-green-medium">Ver Mais</div>
            <button className="text-white text-[14px] tracking-[0.91px] font-bold w-[177px] py-[7px] flex align-center justify-center bg-green-medium rounded-full">Candidate-se</button>
          </footer>
        </li>
       
       
      </ul>
    </main>
    </>
  )
}