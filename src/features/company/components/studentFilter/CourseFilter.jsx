import { useEffect, useState } from "react";
import { useStudentFilter } from "@/features/company/hooks/StudentFilter";
import { getCourses } from "@/features/company/services/fetchCourses";
import FilterTag from "@/features/company/components/studentFilter/FilterTag";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";

function CourseFilter() {
    const { selectedArea } = useStudentFilter();
    const [ courses, setCourses]  = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate();

    useEffect(() => {
        getCourses(selectedArea.id)
            .then(courses => setCourses(courses))
            .catch(error => console.error('Error fetching courses:', error));
    }, [selectedArea]);

    // TODO criar a página que mostra os alunos filtrados
    const redirect = (courseId) => {
        setSearchParams({ curso: courseId });
    }

    return (
        <div>
            <h2 className="text-2xl font-bold">{selectedArea.name}</h2>
            <ul className="flex flex-wrap gap-3 py-5">
                {courses.map(course => (
                    <li key={course.id}>
                        <FilterTag text={course.name} onClick={() => redirect(course.id)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CourseFilter;