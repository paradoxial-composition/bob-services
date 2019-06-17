import React, {useState, useEffect} from 'react';
import Asks from './Asks';

import axios from 'axios';
import Loader from '../Loader';

const BASE_URL = 'http://localhost:7000';
const serviceUnitsURL = '/serviceUnits';

let AsksContainer = (props) => {
	// useEffect(() => {
	// 	setLoading(true);
	// 	getMyAsks();
	// }, []);

	let [loading, setLoading] = useState(false);
	let [asks, setAsks] = useState([]);

	// if(asks.length === 0) {
	// 	setTimeout(() => {
	// 		setLoading(false)
	// 	}, 3000);
		
	//}

	// async function getMyAsks () {
	// 	// setLoading(true);
	// 	await axios.get(`${BASE_URL}${serviceUnitsURL}`) //req.params.id
	// 	.then((response) => {
	// 		setAsks(response.data);
	// 	})
	// 	.catch(err => {
	// 		console.log(err)
	// 	})
	// 	// .finally(() => setLoading(false))
	// }

	let methods = {
		allUsers: JSON.parse( localStorage.getItem('allUsers')),
		services: JSON.parse( localStorage.getItem('serviceUnits')),
		currentUser: JSON.parse(localStorage.getItem('user')).user,
		componentItems: {
			title: 'Offres dont j\'ai besoin d\'aide.',
			cardItems: {
				activity: 'Activité',
				creationDate: 'Date de Création',
				user: 'Créer par',
				intrestedUsers: 'Personnes intéressées :',
				description: 'Description'
			}
		},

		// services: [
		// 	{
		// 		activity: 'Baby-sitting',
		// 		creationDate: '02-05-2019',
		// 		userId: 1,
		// 		intrestedUsers: [2,3,4],
		// 		description: 'Aidez mois svp ..',
		// 		type: 'job',
		// 	},
		// ],
		...props
	}

	if (loading === true) return <Loader />
	return (
		<Asks {...methods} />
	)
}

export default AsksContainer;