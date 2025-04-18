import { Link } from 'react-router'

function HomePage() {
	return (
		<div>
			Landing page
			<div className='flex flex-col'>
				<Link to={'/estudante'}>Procuro uma vaga de estágio</Link>
				<Link to={'/empresa'}>Procuro um estagiário</Link>
			</div>
		</div>
	)
}

export default HomePage