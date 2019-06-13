import React from 'react';
import SideBar from './SideBar';

let SideBarContainer = (props) => {
	let methods = {
		componentItems: {
			dashboard: {
				path: '/',
				label: 'Acceuil',
				icon: 'user'
			},
			myAsks: {
				path: 'asks',
				label: 'Mes Demmandes',
				icon: 'user'
			},
			myJobs: {
				path: 'jobs',
				label: 'Mes Reponses',
				icon: 'user'
			},
			profil: {
				label: 'Mon profile',
				icon: 'user'
			}
		},
		...props
	}
	return (
		<SideBar {...methods} />
	)
}

export default SideBarContainer;