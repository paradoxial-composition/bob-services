import React from 'react';
import Jobs from './Jobs';

let JobsContainer = (props) => {
	let methods = {

		componentItems: {
			title: 'Offres dont je suis intéressé.',
			cardItems: {
				activity: 'Activité',
				creationDate: 'Date de Création',
				user: 'Créer par',
				description: 'Description'
			}
		},

		services: [
			{
				activity: 'Plomberie',
				creationDate: '10-06-2019',
				userId: 3,
				intrestedUsers: [1],
				description: 'Aidez mois svp ..',
				type: 'ask',
			},
			{
				activity: 'Bricolage',
				creationDate: '10-06-2019',
				userId: 2,
				intrestedUsers: [1],
				description: 'Aidez mois svp ..',
				type: 'ask',
			},
		],

		...props
	}
	return (
		<Jobs {...methods} />
	)
}

export default JobsContainer;