import {
    DescriptionForm,
    EducationForm,
    ExperienceForm,
    PersonalInfoForm
  } from '@/features/student/components'
  
  export function StudentFormsPage() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-6">Perfil do Estudante</h1>
        
        <PersonalInfoForm />
        <EducationForm />
        <ExperienceForm />
        <DescriptionForm />
      </div>
    )
  }