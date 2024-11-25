import './App.css'
import { Link } from 'react-router'

/**
 * Raiz do projeto
 * @returns {String} HTML
 */
function Index() {
	return (
		<div>
			Landing page
			<div>
				<Link to={'/estudante'}>Procuro uma vaga de estágio</Link>
				<Link to={'/empresa'}>Procuro um estagiário</Link>
			</div>
		</div>
	)
}

export default Index
