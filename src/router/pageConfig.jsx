import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/home/HomePage";
import StudentHome from "@/pages/student/StudentHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        // children: [
        //     {
        //         path: 'estudante',
        //         element: <div>Estudante</div>
        //     }
        // ]
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
        element: <StudentHome/>
    },
    {
        path: '/empresa',
        element: <div>Empresa</div>
    },
]);

export default router;