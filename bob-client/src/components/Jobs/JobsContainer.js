import React, {useState, useEffect} from 'react';
import Jobs from './Jobs';


import axios from 'axios';
import Loader from '../Loader';

const BASE_URL = 'http://localhost:7000';
const serviceUnitsURL = '/serviceUnits';

let JobsContainer = (props) => {
	// useEffect(() => {
	// 	getMyJobs();
	// }, []);

	let [radius, SetRadius] = useState(200000000);
	let [loading, setLoading] = useState(false);
	let [jobs, setJobs] = useState([]);

	// async function getMyJobs () {
	// 	// setLoading(true);
	// 	await axios.get(`${BASE_URL}${serviceUnitsURL}/jobs/`) // req.params.id
	// 	.then((response) => {
	// 		console.log(response.data);
	// 		setJobs(response.data);
	// 		console.log(jobs);
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
			title: 'Offres dont je suis intéressé.',
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
		// 		activity: 'Plomberie',
		// 		creationDate: '10-06-2019',
		// 		userId: 3,
		// 		intrestedUsers: [1],
		// 		description: 'Aidez mois svp ..',
		// 		type: 'ask',
		// 	},
		// 	{
		// 		activity: 'Bricolage',
		// 		creationDate: '10-06-2019',
		// 		userId: 2,
		// 		intrestedUsers: [1],
		// 		description: 'Aidez mois svp ..',
		// 		type: 'ask',
		// 	},
		// ],

		...props
	}
	return (
		<Jobs {...methods} />
	)
}

export default JobsContainer;