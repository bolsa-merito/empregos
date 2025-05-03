import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/home/HomePage";

import StudentLayout from "@/components/layouts/StudentLayout"
import StudentHome from "@/pages/student/StudentHome";
import StudentProfile from "@/pages/student/StudentProfile";
import { StudentFormsPage } from "../pages/student/StudentFormsPage";

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
                path: 'formulario',
                element: <StudentFormsPage/>
            },
        ]
    },
    {
        path: '/empresa',
        element: <div>Empresa</div>
    },
]);

export default router;