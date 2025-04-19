import ExpandableImage from "@/components/expandableImage/ExpandableImage";
import Toggle from "@/components/buttons/Toggle";

// TODO - Precisa refatorar e aplicar o compound design pattern

const fakeData = {
    imgExemplo: "https://s4.static.brasilescola.uol.com.br/be/2023/08/dia-do-estudante.jpg",
    name: "Carlos Teste",
    age: 22,
    course: "Eng. de Software",
    semester: "5",
    shift: "Noturno",
    university: "UnC",
    isLookingForInternship: true,
    attributes: ['Comunicativo', 'Criativo'],
}

function StudentInfo({studentName, studentAge}) {
    return (
        <div>
            <h2>{studentName}</h2>
            <p>{studentAge} anos</p>
        </div>
    )
}

function CursoInfo({course, semester, shift, university}) {
    return (
        <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold">{course}</h3>
            <p>{semester}° Semestre</p>
            <p>{shift}</p>
            <h3 className="font-semibold">{university}</h3>
        </div>
    )
}

function InternshipStatus({isLookingForInternship}) {
    return (
        <div>
            <Toggle isEnabled={isLookingForInternship} label="Buscando estágio" labelPosition="left" onToggle={() => {console.log("toggle");
            }}/>
        </div>
    )
}

function ProfileAttributtes({profileAtributtes}) {
    return (
        <div className="flex gap-1">
            {profileAtributtes.map((attribute, index) => (
                <p key={index} className="text-sm rounded-sm bg-gray-200 px-2 py-1 w-fit">{attribute}</p>
            ))}
        </div>
    )
}

function ProfileInfo() {
    return (
        <div className="flex h-fit gap-4 justify-center">
            <ExpandableImage imgUrl={fakeData.imgExemplo}>
                <div className="h-52 w-28">
                    <img src={fakeData.imgExemplo} alt="" className="w-full h-full object-cover rounded-full" />
                </div>
            </ExpandableImage>
            <div className="flex flex-col justify-between py-3">
                <StudentInfo studentName={fakeData.name} studentAge={fakeData.age}/>
                <CursoInfo course={fakeData.course} semester={fakeData.semester} shift={fakeData.shift} university={fakeData.university}/>
                <div className="flex flex-col gap-1">
                    <ProfileAttributtes profileAtributtes={fakeData.attributes}/>
                    <InternshipStatus/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo