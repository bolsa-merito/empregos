import { FormationForm } from '../../features/student/components/forms/FormationForm';

export function StudentFormationFormPage() {
  return (
    <div className="w-full p-4 min-h-screen">
      <h1 className="text-2xl mb-6">Formações ou Cursos</h1>
      
      <FormationForm />
    </div>
  );
}
