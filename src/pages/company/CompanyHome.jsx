import StudentCard from "@/features/student/components/studentCard/StudentCard"

function CompanyHome() {
    return (
        <div>
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