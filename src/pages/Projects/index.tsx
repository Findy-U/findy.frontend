import { Heading } from "../../components/Heading";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/menu";


export function Projects(){
  return(
    <>
    <header className="bg-blue-dark pt-8 pb-32">
      <div className="flex items-center justify-between mx-auto max-w-[980px] mt-8">
        <Logo />
        <div className="text-green-medium flex items-center gap-16 font-bold text-[18px]">
          <a href="/home" target="_blank">A Findy</a>
          <button className="border-solid border-green-medium border-[1px] rounded-full px-8 py-3">Logout</button>
        </div>
      </div>
      <div className="mx-auto max-w-[980px] mt-[68px] text-white">
        <h1 className="text-[40px] font-bold">Projetos disponíveis</h1>
        <h2 className="text-[24px] font-[300] text-grey-#2 mt-[-3px]">visualize os projetos disponíveis na Findy</h2>
      </div>
    </header>    
    </>
  )
}