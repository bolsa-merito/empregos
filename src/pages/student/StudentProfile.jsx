import ProfileInfoComponent from "@/features/student/components/profilePage/ProfileInfo"
import {ProfileAbout, ProfileProjects, ProfileEducation} from "@/features/student/components/profilePage/ProfileAbout"

function StudentProfile() {
    return (
        <div className="flex flex-col gap-6">
            <ProfileInfoComponent/>
            <ProfileAbout/>
            <ProfileProjects/>
            <ProfileEducation/>
        </div>
    )
}

export default StudentProfile