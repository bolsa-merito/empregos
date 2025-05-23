import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/home/HomePage";

import StudentLayout from "@/components/layouts/StudentLayout"
import StudentHome from "@/pages/student/StudentHome";
import StudentProfile from "@/pages/student/StudentProfile";
import { StudentProjectsPage } from "../pages/student/StudentProjectsPage";
import { StudentFormationFormPage } from "../pages/student/StudentFormationFormPage";
import { StudentDescriptionFormPage } from "../pages/student/StudentDescriptionFormPage";
import { StudentProfileFormPage } from "../pages/student/StudentProfileFormPage";

import CompanyLayout from "@/components/layouts/CompanyLayout"
import CompanyHome from "@/pages/company/CompanyHome";
import CompanyProfile from "@/pages/company/CompanyProfile";
import FilterStudents from "@/pages/company/FilterStudents";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },

    // TODO proteger as rotas /estudante /empresa
    // Exemplo 
    //{
    //     path: "/aluno",
    //     element: (
    //     <ProtectedRoute>
    //         <DashboardAluno />
    //     </ProtectedRoute>
    //     ),
    // },
    {
        path: '/estudante',
        element: <StudentLayout/>,
        children: [
            {
                path: 'home',
                element: <StudentHome/>
            },
            {
                path: 'perfil',
                element: <StudentProfile/>
            },
            {
                path: 'projetos',
                element: <StudentProjectsPage/>
            },
            {
                path: 'formacao', 
                element: <StudentFormationFormPage />
              },
              {
                path: 'descricao',
                element: <StudentDescriptionFormPage />
              },
            {
                path: 'formulario',
                element: <StudentProfileFormPage />
              }
        
        ]
    },
    {
        path: '/empresa',
        element: <CompanyLayout/>,
        children: [
            {
                path: 'home',
                element: <CompanyHome/>
            },
            {
                path: 'perfil',
                element: <CompanyProfile/>
            },
            {
                path: 'filtro-estudantes',
                element: <FilterStudents/>
            }
        ]
    },
]);

export default router;