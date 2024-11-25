import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './global.css'
import Index from './Index.jsx'
import { Estudante } from './estudante/Estudante.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
			<Routes>
				<Route path='/' element={<Index/>}/>
				<Route path='estudante' element={<Estudante/>}/>
				<Route path='empresa' element={<Estudante/>}/>
			</Routes>
		</BrowserRouter>
    </StrictMode>
)
