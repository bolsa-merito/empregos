import NavBar from "@/components/navBar/NavBar"
import { Outlet } from "react-router" // tem comportamento semelhante ao children

function StudentLayout() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full md:max-w-screen max-w-xs">
                <NavBar>
                    <NavBar.LinkHome redirectTo="/estudante/home">Home</NavBar.LinkHome>
                    <NavBar.LinkPerfil redirectTo="/estudante/perfil">Perfil</NavBar.LinkPerfil>
                    <NavBar.LinkMessages redirectTo="/estudante/mensagens">Mensagens</NavBar.LinkMessages>
                </NavBar>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default StudentLayout