import React from 'react';
import './Asks.scss';
import {Button , Popconfirm, notification, Card, Col, Row, Divider} from 'antd';

import axios from 'axios';

const BASE_URL = 'http://localhost:7000';

let Asks = ({componentItems, services, currentUser, allUsers}) => {
	let asks = []
	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 12
	}

	const revokeAsk = (task) => {

		//TODO: insert Ask delete call here

		let indexOfTask = services.map((item, index) => {
			if (item._id === task._id) {
				return index;
			}
		})

		services.splice(indexOfTask, 1);

		task.achieved = true;

		axios.post(`${BASE_URL}/serviceUnits/${task._id}`, task)
		.then((response) => {
			console.log(response);
		})
		.catch(err => {
			console.log(err)
		})

		const args = {
			message: 'Demande annulé.',
			description:
				'Votre Demande d\'aide a été annuler.',
			duration: 1.5,
		};
		notification.open(args);
	};

	const validateAsk = (task) => {

		//TODO: insert Ask delete call here

		let indexOfTask = services.map((item, index) => {
			if (item._id === task._id) {
				return index;
			}
		})

		services.splice(indexOfTask, 1);

		task.achieved = true;

		axios.post(`${BASE_URL}/serviceUnits/${task._id}`, task)
		.then((response) => {
			console.log(response);
		})
		.catch(err => {
			console.log(err)
		})

		const args = {
			message: 'Félicitations.',
			description:
				'Merci communauté.',
			duration: 1.5,
		};
		notification.open(args);
	};

	services.map((item, index) => {
		let helpers = [];

				item.intrestedUsers.map((item2, index) => {
					allUsers.map((item, index) => {
						if( item._id === item2) {
							helpers.push(<p><spacer/> <b>{item.lastName + ' ' + item.firstName}</b></p>)
							return;

						}
					})
				})

				let userName = [];
				allUsers.map((item, index) => {
					if( item._id === currentUser._id) {
						userName.push(<p><spacer/> <b>{item.lastName + ' ' + item.firstName}</b></p>)
						return;
					}
				})

		if (item.userId === currentUser._id && item.achieved === false) {
		asks.push(
			<Col {...colGris} >
				<Card key={index}>
					<p>{componentItems.cardItems.activity} <spacer/> <b>{item.activity}</b></p>
					<p>{componentItems.cardItems.creationDate} 
							<spacer/> <b>{item.creationDate.split('T')[0]}</b>
						</p>
						<p>{componentItems.cardItems.user} 
							<spacer/> <b>{userName}</b>
						</p>
						<p>{componentItems.cardItems.intrestedUsers} 
							{helpers}
						</p>
					<p>{componentItems.cardItems.description} <spacer/> <b>{item.description}</b></p>
					<Row style={{ textAlign: 'center'}}>
						<Popconfirm
							title="Êtes vous sûre ?"
							onConfirm={() => {revokeAsk(item)}}
							okText="Oui"
							cancelText="Non"
						>
							<Button type="danger" ghost shape="round" icon="minus">
								Retirer
							</Button>
						</Popconfirm>

						<Button type="primary"  shape="round" style={{ marginLeft: 10}} onClick={() => validateAsk(item)}>
								Valider
							</Button>
					</Row>
				</Card>
			</Col>
		)
		}
	})
	return (
			<div>
				<h2>{componentItems.title}</h2>
				<Row>
					<Col offset={10} span={4}>
						<Divider />
					</Col>
				</Row>
				<Row gutter={24} type="flex" justify="start">
					{asks}
				</Row>
			</div>
		);
}

export default Asks;