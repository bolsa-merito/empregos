import { ProjectsForm } from '@/features/student/components/forms/ProjectsForm';

export function StudentProjectsPage() {
  return (
    <div className="w-full p-4 min-h-screen">
      <h1 className="text-2xl mb-6">Projetos ou Experiências</h1>
      
      <ProjectsForm />
    </div>
  );
}
