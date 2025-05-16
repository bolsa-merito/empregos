import NavBar from "@/components/navBar/NavBar"
import { Outlet } from "react-router"

function StudentLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="w-full shadow-sm z-10">
        <div className="w-full max-w-xs mx-auto">
          <NavBar>
            <NavBar.LinkHome redirectTo="/estudante/home">Home</NavBar.LinkHome>
            <NavBar.LinkPerfil redirectTo="/estudante/perfil">Perfil</NavBar.LinkPerfil>
            <NavBar.LinkMessages redirectTo="/estudante/mensagens">Mensagens</NavBar.LinkMessages>
          </NavBar>
        </div>
      </header>

      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="h-full w-full p-4 lg:p-6">
          <div className="mx-auto h-full max-w-7xl">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default StudentLayout