import { FormationForm } from '../../features/student/components/forms/FormationForm';

export function StudentFormationFormPage() {
  return (
    <div className="w-full p-4 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-md">
        <FormationForm />
      </div>
    </div>
  );
}
