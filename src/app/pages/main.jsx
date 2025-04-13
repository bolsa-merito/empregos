import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './global.css'
import Index from './Index.jsx'
import { Estudante } from './estudante/Estudante.jsx'
import { Empresa } from './empresa/Empresa.jsx'
import { CadastroEmpresa } from '../components/forms/CadastroEmpresa.jsx'
import Cursos from './empresa/busca/Cursos.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
			<Routes>
				<Route path='/' element={<Index/>}/>
				<Route path='estudante' element={<Estudante/>}/>
				<Route path='empresa' element={<Empresa/>}/>
				<Route path='empresa/cadastro' element={<CadastroEmpresa/>}/>
				<Route path='empresa/busca/cursos' element={<Cursos/>}/>
			</Routes>
		</BrowserRouter>
    </StrictMode>
)
