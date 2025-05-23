import { Link } from "react-router"
import { ChevronLeft } from "lucide-react"

function StudentHome() {
    return (
        <Link to={'/'}><ChevronLeft /></Link>
    )
}

export default StudentHome