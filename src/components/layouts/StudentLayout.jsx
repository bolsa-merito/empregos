import NavBar from "@/components/navBar/NavBar"
import { Outlet } from "react-router" // tem comportamento semelhante ao children

export default function StudentLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="w-full shadow-sm z-10">
        <NavBar>
          <NavBar.LinkHome>Home</NavBar.LinkHome>
          <NavBar.LinkPerfil>Perfil</NavBar.LinkPerfil>
          <NavBar.LinkMessages>Mensagens</NavBar.LinkMessages>
        </NavBar>
      </header>

      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="h-full w-full p-4 lg:p-6">
          <div className="mx-auto h-full max-w-7xl">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
