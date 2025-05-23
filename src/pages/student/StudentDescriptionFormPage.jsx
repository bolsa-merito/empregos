import { DescriptionForm } from '../../features/student/components/forms/DescripitonForm';

export function StudentDescriptionFormPage() {
  return (
    <div className="w-full p-4 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-md">
        <DescriptionForm />
      </div>
    </div>
  );
}
