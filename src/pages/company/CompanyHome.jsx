import StudentCard from "@/features/student/components/studentCard/StudentCard"
import { Link } from "react-router"

function CompanyHome() {
    return (
        <div>
            <Link to={'/empresa/filtro-estudantes'}>Buscar Estudante</Link>
            {/* TODO remover depois, está aqui para testar o componente */}
            <StudentCard>
                <StudentCard.Banner/>
                <div className="p-4">
                    <StudentCard.Name/>
                    <StudentCard.CompactDescription/>
                </div>
            </StudentCard>
        </div>
    )
}

export default CompanyHome