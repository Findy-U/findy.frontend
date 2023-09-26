import { useContext } from "react";
import { LogoSmall } from "../../components/LogoSmall";
import { Landing } from "../../components/landing";
import { FooterLand } from "../../components/landing/Footer";
import { Menu } from "../../components/menu";
import { AuthContext } from "../../context/auth";

export function Profile() {
  const { signOut } = useContext(AuthContext);

  return (
    <main className="flex w-full flex-col bg-blue-dark ">
      <Menu.Root>
        <LogoSmall />
        <Menu.MenuItems className="justify-between">
          <Menu.Items
            title="A Findy"
            linkURL="/"
          />
          <Menu.Button
            title="Logout"
            action={signOut}
          />
        </Menu.MenuItems>
      </Menu.Root>


    </main>
  );
}