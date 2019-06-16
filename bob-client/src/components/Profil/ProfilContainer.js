import React from 'react';
import Profil from './Profil';

let ProfilContainer = (props) => {

	let methods = {
		currentUser: JSON.parse(localStorage.getItem('user')).user,
		
		componentItems: {
			personal: {
				title: 'Informations personelle',
				fullName: 'Nom complet',
				adress: 'Adresse',
				birthDate: 'Date de naissance',
			},
			contact: {
				title: 'Contact',
				email: 'Email',
				phone: 'Tél'
			}
		},

		DescriptionItem: ({ title, content }) => (
			<div
				style={{
					fontSize: 14,
					lineHeight: '22px',
					marginBottom: 7,
					color: 'rgba(0,0,0,0.65)',
				}}
			>
				<p
					style={{
						marginRight: 8,
						display: 'inline-block',
						color: 'rgba(0,0,0,0.85)',
					}}
				>
					{title}:
				</p>
				{content}
			</div>
		),

		...props
	}
	return (
		<Profil {...methods} />
	)
}

export default ProfilContainer;