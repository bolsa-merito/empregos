import { Link, useLocation } from "react-router"
import homeIcon from "@/assets/headerIcons/home-icon.svg"
import messageIcon from "@/assets/headerIcons/message-icon.svg"
import perfilIcon from "@/assets/headerIcons/perfil-icon.svg"

// TODO Implementar a lógica de navegação, criar as páginas e adicionar os links

function NavBar({children}) {
    return (
        <div className="flex justify-around w-full py-5">
            {children}
        </div>
    )
}

function NavBarLink({isActive, url, children}) {
    return (
        <Link to={{pathname:url}} className={`p-2 border-b-2 ${isActive ? "border-black" : "border-transparent"} cursor-pointer`}>
            {children}
        </Link>
    )
}

function MenuIcon({image, alt}) {
    return (
        <img src={image} alt={alt} />
    )
}

NavBar.LinkHome = function NavBarLinkHome() {
    const location = useLocation();

    return (
        <NavBarLink url="/estudante/home" isActive={location.pathname === "/estudante/home"}>
            <MenuIcon image={homeIcon} alt="Home" />
        </NavBarLink>
    )
}

NavBar.LinkPerfil = function NavBarLinkPerfil() {
    const location = useLocation();

    return (
        <NavBarLink url="/estudante/perfil" isActive={location.pathname === "/estudante/perfil"}>
            <MenuIcon image={perfilIcon} alt="Perfil" />
        </NavBarLink>
    )
}

NavBar.LinkMessages = function NavBarLinkMessages() {
    const location = useLocation();

    return (
        <NavBarLink url={"/estudante/mensagens"} isActive={location.pathname === "/estudante/mensagens"}>
            <MenuIcon image={messageIcon} alt="Mensagens" />
        </NavBarLink>
    )
}

export default NavBar