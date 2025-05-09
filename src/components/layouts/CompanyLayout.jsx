import NavBar from "@/components/navBar/NavBar"
import { Outlet } from "react-router" // tem comportamento semelhante ao children

function CompanyLayout() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-xs">
                <NavBar>
                    <NavBar.LinkHome redirectTo="/empresa/home">Home</NavBar.LinkHome>
                    <NavBar.LinkPerfil redirectTo="/empresa/perfil">Perfil</NavBar.LinkPerfil>
                    <NavBar.LinkMessages redirectTo="/empresa/mensagens">Mensagens</NavBar.LinkMessages>
                </NavBar>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default CompanyLayout