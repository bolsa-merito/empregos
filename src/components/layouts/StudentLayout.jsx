import NavBar from "@/components/navBar/NavBar"
import { Outlet } from "react-router" // tem comportamento semelhante ao children

function StudentLayout() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-xs">
                <NavBar>
                    <NavBar.LinkHome>Home</NavBar.LinkHome>
                    <NavBar.LinkPerfil>Perfil</NavBar.LinkPerfil>
                    <NavBar.LinkMessages>Mensagens</NavBar.LinkMessages>
                </NavBar>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default StudentLayout