import { Link } from "react-router"
import StudentLayout from "@/components/layouts/StudentLayout"

function StudentHome() {
    return (
        <StudentLayout>
            <Link to={'/'}>&lt;</Link>
        </StudentLayout>
    )
}

export default StudentHome