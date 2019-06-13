import React from 'react';
import SideBar from './SideBar';

let SideBarContainer = (props) => {
	let methods = {
		componentItems: {
			dashboard: {
				label: 'Acceuil',
				icon: 'user'
			},
			myAsks: {
				label: 'Mes Demmandes',
				icon: 'user'
			},
			myJobs: {
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