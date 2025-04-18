import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from '@/router/pageConfig.jsx'
import { RouterProvider } from 'react-router'
import '/global.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
		<RouterProvider router={router} />
    </StrictMode>
)
