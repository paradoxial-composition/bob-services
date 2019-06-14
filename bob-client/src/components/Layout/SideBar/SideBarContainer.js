import React from 'react';
import SideBar from './SideBar';

let SideBarContainer = (props) => {
	let methods = {
		componentItems: {
			dashboard: {
				path: '/',
				label: 'Acceuil',
				icon: 'home'
			},
			myAsks: {
				path: 'asks',
				label: 'Mes Demmandes',
				icon: 'snippets'
			},
			myJobs: {
				path: 'jobs',
				label: 'Mes Reponses',
				icon: 'hdd'
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