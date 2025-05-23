import { Link, useLocation } from "react-router"
import { BriefcaseBusiness, House, User, Send } from "lucide-react"

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

NavBar.LinkHome = function NavBarLinkHome({redirectTo}) {
    const location = useLocation();

    return (
        <NavBarLink url={redirectTo} isActive={location.pathname === redirectTo}>
            <House size={32} strokeWidth={1.3}/>
        </NavBarLink>
    )
}

NavBar.LinkPerfil = function NavBarLinkPerfil({redirectTo}) {
    const location = useLocation();

    return (
        <NavBarLink url={redirectTo} isActive={location.pathname === redirectTo}>
            <User size={32} strokeWidth={1.3}/>
        </NavBarLink>
    )
}

NavBar.LinkMessages = function NavBarLinkMessages({redirectTo}) {
    const location = useLocation();

    return (
        <NavBarLink url={redirectTo} isActive={location.pathname === redirectTo}>
            <Send size={32} strokeWidth={1.3}/>
        </NavBarLink>
    )
}

NavBar.LinkHiring = function NavBarLinkHiring({redirectTo}) {
    const location = useLocation();

    return (
        <NavBarLink url={redirectTo} isActive={location.pathname === redirectTo}>
            <BriefcaseBusiness size={32} strokeWidth={1.3}/>
        </NavBarLink>
    )
}

export default NavBar