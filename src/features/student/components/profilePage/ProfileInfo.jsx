import { createContext, useContext, useState } from "react";
import ExpandableImage from "@/components/expandableImage/ExpandableImage";
import Toggle from "@/components/buttons/Toggle";

// TODO adicionar a funcionalidade para ativar ou bloquear a ediçao do perfil

// Create context for sharing data between compound components
const ProfileInfoContext = createContext(null);

// Main component that provides context
function ProfileInfo({ data, children }) {
  return (
    <ProfileInfoContext.Provider value={data}>
      <div className="flex h-fit gap-4 justify-center">
        {children}
      </div>
    </ProfileInfoContext.Provider>
  );
}

// Hook to access the context
function useProfileInfo() {
  const context = useContext(ProfileInfoContext);
  if (!context) {
    throw new Error("Profile compound components must be used within ProfileInfo");
  }
  return context;
}

// Sub-components
ProfileInfo.Avatar = function ProfileAvatar() {
  const { imgExemplo } = useProfileInfo();
  
  return (
    <ExpandableImage imgUrl={imgExemplo}>
      <div className="h-52 w-28">
        <img 
          src={imgExemplo} 
          alt="Profile avatar" 
          className="w-full h-full object-cover rounded-full" 
        />
      </div>
    </ExpandableImage>
  );
};

ProfileInfo.Details = function ProfileDetails({ children }) {
  return (
    <div className="flex flex-col justify-between py-3">
      {children}
    </div>
  );
};

ProfileInfo.StudentInfo = function StudentInfo() {
  const { name, age } = useProfileInfo();
  
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} anos</p>
    </div>
  );
};

ProfileInfo.CourseInfo = function CourseInfo() {
  const { course, semester, shift, university } = useProfileInfo();
  
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="font-semibold">{course}</h3>
      <p>{semester}° Semestre</p>
      <p>{shift}</p>
      <h3 className="font-semibold">{university}</h3>
    </div>
  );
};

ProfileInfo.Attributes = function ProfileAttributes() {
  const { attributes } = useProfileInfo();
  
  return (
    <div className="flex gap-1">
      {attributes.map((attribute, index) => (
        <p key={index} className="text-sm rounded-sm bg-gray-200 px-2 py-1 w-fit">
          {attribute}
        </p>
      ))}
    </div>
  );
};

ProfileInfo.InternshipStatus = function InternshipStatus() {
  const { isLookingForInternship } = useProfileInfo();
  
  return (
    <div>
      <Toggle 
        isEnabled={isLookingForInternship} 
        label="Buscando estágio" 
        labelPosition="left" 
        onToggle={() => {
          console.log("toggle");
        }}
      />
    </div>
  );
};

ProfileInfo.AttributesContainer = function AttributesContainer({ children }) {
  return (
    <div className="flex flex-col gap-1">
      {children}
    </div>
  );
};

// Example usage
export default function ProfileInfoComponent() {
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
  };

  return (
    <ProfileInfo data={fakeData}>
      <ProfileInfo.Avatar />
      <ProfileInfo.Details>
        <ProfileInfo.StudentInfo />
        <ProfileInfo.CourseInfo />
        <ProfileInfo.AttributesContainer>
          <ProfileInfo.Attributes />
          <ProfileInfo.InternshipStatus />
        </ProfileInfo.AttributesContainer>
      </ProfileInfo.Details>
    </ProfileInfo>
  );
}