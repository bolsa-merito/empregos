import StudentCard from "@/features/student/components/studentCard/StudentCard"
import { Link } from "react-router"

function CompanyHome() {
    return (
        <div>
            <div>
                <Link to={'/empresa/catalogo'} className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                    Buscar Estudante
                </Link>
            </div>
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