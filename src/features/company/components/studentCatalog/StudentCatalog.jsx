import { useSearchParams } from "react-router"
import StudentCard from "@/features/student/components/studentCard/StudentCard"

function StudentCatalog() {
    const [searchParams] = useSearchParams()

    const course = searchParams.get('curso')

    if (course) {
        return (
            <div>
                <h1>StudentCatalog</h1>
                <p>Curso: {course}</p>
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
}

export default StudentCatalog