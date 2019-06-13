import React from 'react';
import Asks from './Asks';

let AsksContainer = (props) => {
	let methods = {
		componentItems: {
			title: 'Offres dont j\'ai besoin d\'aide.',
			cardItems: {
				activity: 'Activité',
				creationDate: 'Date de Création',
				user: 'Créer par',
				description: 'Description'
			}
		},

		services: [
			{
				activity: 'Baby-sitting',
				creationDate: '02-05-2019',
				userId: 1,
				intrestedUsers: [2,3,4],
				description: 'Aidez mois svp ..',
				type: 'job',
			},
		],
		...props
	}
	return (
		<Asks {...methods} />
	)
}

export default AsksContainer;