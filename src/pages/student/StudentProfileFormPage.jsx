import { ProfileForm } from '../../features/student/components/forms/ProfileForm';

export function StudentProfileFormPage() {
  return (
    <div className="w-full p-4 min-h-screen">
              <h1 className="text-2xl mb-6">Editar Informações Pessoais</h1>
      
      <ProfileForm />
    </div>
  );
}