import React from 'react';
import './Dashboard.scss';
import { Button, notification, Card, Row, Col, Divider, Empty} from 'antd';

import axios from 'axios';

const BASE_URL = 'http://localhost:7000';
const serviceUnitsURL = '/serviceUnits';

let Dashboard = ({componentItems, services, currentUser, allUsers}) => {

	let askDisplay= [];
	let jobDisplay= [];
	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 12
	}

	console.log('USERS',allUsers);
	localStorage.setItem('serviceUnits', JSON.stringify(services));
	localStorage.setItem('allUsers', JSON.stringify(allUsers));

	const suggestHelp = (task) => {

		task.intrestedUsers.push(currentUser._id);

		axios.post(`${BASE_URL}${serviceUnitsURL}/${task._id}`, task)
		.then((response) => {
			console.log(response);
		})
		.catch(err => {
			console.log(err)
		})

		const args = {
			message: 'Propsition d\'aide envoyé.',
			description:
				'Merci pour votre intérêt.',
			duration: 1.5,
		};
		notification.open(args);
	};

	services.map((item,index) => {
		if (item.intrestedUsers.length > 0 && item.userId === currentUser._id && item.achieved === false) {
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
			askDisplay.push(
				<Col {...colGris}>
					<Card className="CardItem" key={index}>
						<p>{componentItems.cardItems.activity} 
							<spacer/> <b>{item.activity}</b>
						</p>
						<p>{componentItems.cardItems.creationDate} 
							<spacer/> <b>{item.creationDate.split('T')[0]}</b>
						</p>
						<p>{componentItems.cardItems.user} 
							<spacer/> <b>{userName}</b>
						</p>
						<p>{componentItems.cardItems.intrestedUsers} 
							{helpers}
						</p>
						<p>{componentItems.cardItems.description} 
							<spacer/> <b>{item.description}</b>
						</p>
						<Row style={{ textAlign: 'center'}}>
							<Button type="primary" shape="round" icon="mail" >
								Contacter
							</Button>
						</Row>
					</Card>
				</Col>
			)
		}
		if (item.userId != currentUser._id && item.achieved === false) {
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
				allUsers.map((item2, index) => {
					if( item2._id === item.userId) {
						userName.push(<p><spacer/> <b>{item2.lastName + ' ' + item2.firstName}</b></p>)
						return;
					}
				})
			jobDisplay.push(
				<Col {...colGris}>
					<Card className="CardItem" key={index}>
						<p>{componentItems.cardItems.activity} 
							<spacer/> <b>{item.activity}</b>
						</p>
						<p>{componentItems.cardItems.creationDate.split('T')[0]} 
							<spacer/> <b>{item.creationDate}</b>
						</p>
						<p>{componentItems.cardItems.user} 
							<spacer/> <b>{userName}</b>
						</p>
						<p>{componentItems.cardItems.intrestedUsers} 
							{helpers}
						</p>
						<p>{componentItems.cardItems.description} 
							<spacer/> <b>{item.description}</b>
						</p>
						<Row style={{ textAlign: 'center'}}>
							<Button type="primary" shape="round" icon="plus" onClick={() => {suggestHelp(item)}}>
								Aider
							</Button>							
						</Row>
					</Card>
				</Col>
			)
		}
	})

	if (jobDisplay.length === 0)  {
		jobDisplay.push(
			<Col span={24}>
					<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
			</Col>
		)
	}

	if (askDisplay.length === 0)  {
		askDisplay.push(
			<Col span={24}>
					<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
			</Col>
		)
	}

	return (
			<div className="Dashboard">
				<h2>{componentItems.jobTitle}</h2>
				<Row>
					<Col offset={10} span={4}>
						<Divider />
					</Col>
				</Row>
				<Row gutter={24} type="flex" justify="start">
					{jobDisplay}
				</Row>
				<Row>
					<Col offset={6} span={12}>
						<Divider />
					</Col>
				</Row>
				<h2>{componentItems.askTitle}</h2>
				<Row>
					<Col offset={10} span={4}>
						<Divider />
					</Col>
				</Row>
				<Row gutter={24} type="flex" justify="start">
					{askDisplay}
				</Row>
			</div>
		);
}

export default Dashboard;