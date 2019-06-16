import React, {useState, useEffect} from 'react';
import Asks from './Asks';

import axios from 'axios';
import Loader from '../Loader';

const BASE_URL = 'http://localhost:7000';
const serviceUnitsURL = '/serviceUnits';

let AsksContainer = (props) => {
	useEffect(() => {
		getMyAsks();
	}, []);

	let [radius, SetRadius] = useState(200000000);
	let [loading, setLoading] = useState(false);
	let [asks, setAsks] = useState([]);

	async function getMyAsks () {
		// setLoading(true);
		await axios.get(`${BASE_URL}${serviceUnitsURL}/asks/`) //req.params.id
		.then((response) => {
			console.log(response.data);
			setAsks(response.data);
			console.log(asks);
		})
		.catch(err => {
			console.log(err)
		})
		// .finally(() => setLoading(false))
	}

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