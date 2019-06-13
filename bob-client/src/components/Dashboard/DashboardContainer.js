import React from 'react';
import Dashboard from './Dashboard';

let DashboardContainer = (props) => {
	let methods = {

		componentItems: {
			jobTitle: 'Vos voisins ont besoin de vous.',
			askTitle: 'Vos voisins veulent vous aidez.',
			cardItems: {
				activity: 'Activité',
				creationDate: 'Date de Création',
				user: 'Créer par',
				description: 'Description'
			}
		},
		services: [
			{
				activity: 'Bricolage',
				creationDate: '10-06-2019',
				userId: 3,
				intrestedUsers: [1],
				description: 'Aidez mois svp ..',
				type: 'ask',
			},
			{
				activity: 'Plomberie',
				creationDate: '10-06-2019',
				userId: 3,
				intrestedUsers: [1],
				description: 'Aidez mois svp ..',
				type: 'ask',
			},
			{
				activity: 'Cuisine',
				creationDate: '25-05-2019',
				userId: 2,
				intrestedUsers: [2,4],
				description: 'Aidez mois svp ..',
				type: 'ask',
			},
			{
				activity: 'Reparation',
				creationDate: '5-06-2019',
				userId: 3,
				intrestedUsers: [],
				description: 'Aidez mois svp ..',
				type: 'ask',
			},
			{
				activity: 'Baby-sitting',
				creationDate: '10-05-2019',
				userId: 4,
				intrestedUsers: [4],
				description: 'Aidez mois svp ..',
				type: 'ask',
			},
			{
				activity: 'Baby-sitting',
				creationDate: '02-05-2019',
				userId: 1,
				intrestedUsers: [2,3,4],
				description: 'Aidez mois svp ..',
				type: 'job',
			},
			{
				activity: 'Baby-sitting',
				creationDate: '08-06-2019',
				userId: 2,
				intrestedUsers: [2],
				description: 'Aidez mois svp ..',
				type: 'job',
			},
			{
				activity: 'Baby-sitting',
				creationDate: '19-06-2019',
				userId: 4,
				intrestedUsers: [2,4],
				description: 'Aidez mois svp ..',
				type: 'job',
			},
		],

		...props
	}
	return (
		<Dashboard {...methods} />
	)
}

export default DashboardContainer;