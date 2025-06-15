import { useSearchParams } from "react-router"
import StudentCard from "@/features/student/components/studentCard/StudentCard"
import { useState } from "react"
import { createPortal } from "react-dom"
import StudentProfile from "@/pages/student/StudentProfile"
import SideBar from "@/components/side-bar/SideBar"

function StudentCatalog() {
    const [searchParams] = useSearchParams()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [selectedStudentId, setSelectedStudentId] = useState(0)

    const course = searchParams.get('curso')

    const handleOpenSidebar = (studentId = 0) => {
        setSelectedStudentId(studentId)
        setIsSidebarOpen(true)
    }

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false)
        setSelectedStudentId(null)
    }

    const mockStudents = [0, 1, 2] // Substituir depois pela lista real

    const sidebarContainer  = document.getElementById('sideBar');

    if (course && sidebarContainer ) {
        return (
            <div>
                <h1>StudentCatalog</h1>
                <p>Curso: {course}</p>
                <div className="flex flex-wrap gap-4">
                    {mockStudents.map(studentId => {
                        return (
                            <StudentCard>
                                <StudentCard.Banner />
                                <div className="p-4">
                                    <StudentCard.Name />
                                    <StudentCard.CompactDescription />
                                    <div className="flex justify-end">
                                        <StudentCard.ShowMoreButton handleClick={() => handleOpenSidebar(studentId)} />
                                    </div>
                                </div>
                            </StudentCard>
                        )
                    })}
                </div>
                {createPortal(
                    <SideBar isOpen={isSidebarOpen} onCLose={handleCloseSidebar}>
                        <div className="p-4">
                            <StudentProfile />
                        </div>
                    </SideBar>,
                    sidebarContainer 
                )}
            </div>
        )
    }
}

export default StudentCatalog