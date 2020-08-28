import React, { useState } from 'react'
import Formulario from './components/Formulario'

function App() {
	const [citax, setCitax] = useState([])

	const addCita = (cita) => {
		setCitax([...citax, cita])
	}

	return (
		<div>
			<h1>Administrador de Pacientes</h1>
			<div className='container'>
				<div className='row'>
					<div className='one-half column'>
						<Formulario addCita={addCita} />
					</div>
					<div className='one-half column'>2</div>
				</div>
			</div>
		</div>
	)
}

export default App
