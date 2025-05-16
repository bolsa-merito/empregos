// ProfileSection - A reusable section component (used for "Quem eu sou", "Projetos ou experiências", etc.)

// SectionHeader - The section title with edit icon
// SectionContent - The content container for each section
import ProfileContainer from "./ProfileContainer";
import TimeLine from "@/components/other/TimeLine";

const fakeData = {
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    email: "email@email",
    phone: "(99) 99999-9999",
    projects: [
        {
            title: "Projeto 1",
            description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
            title: "Projeto 2",
            description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
    ],
    education: [
        {
            title: "Ensino Médio",
            dataInicio: "",
            dataFim: "",
            instituicao: ""
        }
    ]
}

function ProfileAbout({ title, children }) {

    return (
        <ProfileContainer title={"Quem eu sou"}>
            <p>
                {fakeData.description}
            </p>
            <div className="flex flex-col gap-2">
                <h3>
                    Contato
                </h3>
                <p>{fakeData.email}</p>
                <p>{fakeData.phone}</p>
            </div>
        </ProfileContainer>
    )
}

function ProfileProjects() {
    return (
        <ProfileContainer title={"Projetos ou experiências"}>
            <div>
                {fakeData.projects.map((item, index) => (
                    <TimeLine key={index}>
                        <div className="flex flex-col gap-1 px-4 ">
                            <div>
                                <h3 className="py-1">{item.title}</h3>
                            </div>
                            <p className="pb-4">{item.description}</p>
                        </div>
                    </TimeLine>
                ))}
            </div>
        </ProfileContainer>
    )
}

function ProfileEducation() {
    return (
        <ProfileContainer title={"Formação ou cursos"}>
            <div>
                {fakeData.projects.map((item, index) => (
                    <TimeLine key={index}>
                        <div className="flex flex-col gap-1 px-4 ">
                            <div>
                                <h3 className="py-1">{item.title}</h3>
                            </div>
                            <p className="pb-4">{item.description}</p>
                        </div>
                    </TimeLine>
                ))}
            </div>
        </ProfileContainer>
    )
}

export {ProfileAbout, ProfileProjects, ProfileEducation};