import { ProjectsForm } from '@/features/student/components/forms/ProjectsForm';

export function StudentProjectsPage() {
  return (
    <div className="w-full p-4 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-md">
        <ProjectsForm />
      </div>
    </div>
  );
}
