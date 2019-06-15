import React, {useState, useEffect} from 'react';
import Dashboard from './Dashboard';

import axios from 'axios';
import Loader from '../Loader';

const BASE_URL = 'http://localhost:7000';
const serviceUnitsURL = '/serviceUnits';

let DashboardContainer = (props) => {

	useEffect(() => {
		localServices();
	}, []);

	let [radius, SetRadius] = useState(200000000);
	let [loading, setLoading] = useState(false);
	let [services, setServices] = useState([]);

	async function localServices () {
		// setLoading(true);
		await axios.get(`${BASE_URL}${serviceUnitsURL}/local/${radius}`)
		.then((response) => {
			console.log(response.data);
			setServices(response.data);
			console.log(services);
		})
		.catch(err => {
			console.log(err)
		})
		// .finally(() => setLoading(false))
	}
	
	let methods = {
		// services,

		componentItems: {
			jobTitle: 'Vos voisins ont besoin de vous.',
			askTitle: 'Vos voisins veulent vous aidez.',
			cardItems: {
				activity: 'Activité',
				creationDate: 'Date de Création',
				user: 'Creé par',
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
	if (loading === true) return <Loader />
	return (
		<Dashboard {...methods} />
	)
}

export default DashboardContainer;