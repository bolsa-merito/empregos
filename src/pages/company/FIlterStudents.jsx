import AreaList from "@/features/company/components/studentFilter/AreaList"
import CourseFilter from "@/features/company/components/studentFilter/CourseFilter"
import { Link } from "react-router"
import { StudentFilterProvider, useStudentFilter } from "@/features/company/hooks/StudentFilter"
import { ChevronLeft } from "lucide-react"
import StudentCatalog from "@/features/company/components/studentCatalog/StudentCatalog"

function FilterStudents() {
    return (
        <div className="flex flex-col gap-5">
            <Link to={"/empresa/home"}><ChevronLeft /></Link>
            <StudentFilterProvider>
                <AreaList/>
                <CourseFilter/>
                <StudentCatalog/>
            </StudentFilterProvider>
        </div>
    )
}

export default FilterStudents