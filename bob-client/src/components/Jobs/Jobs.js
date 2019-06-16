import React from 'react';
import './Jobs.scss';
import { Button, Popconfirm, notification, Card, Col, Row, Divider } from 'antd';

let Jobs = ({componentItems, services}) => {

	let jobs = [];
	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 12
	}
	const cancelJob = () => {

		//TODO: insert Job cancel by this user call here

		const args = {
			message: 'Propsition d\'aide annulé.',
			description:
				'Vous avez retiré votre proposition d\'aide concernant un offre.',
			duration: 1.5,
		};
		notification.open(args);
	};

	services.map((item, index) => {
		jobs.push(
			<Col {...colGris}>
				<Card key={index}>
					<p>{componentItems.cardItems.activity} <spacer/> <b>{item.activity}</b></p>
					<p>{componentItems.cardItems.creationDate} <spacer/> <b>{item.creationDate}</b></p>
					<p>{componentItems.cardItems.user} <spacer/> <b>{item.userId}</b></p>
					<p>{componentItems.cardItems.description} <spacer/> <b>{item.description}</b></p>
					<Row style={{ textAlign: 'center'}}>
						<Popconfirm
							title="Êtes vous sûre ?"
							onConfirm={cancelJob}
							okText="Oui"
							cancelText="Non"
						>
							<Button type="danger" ghost shape="round" icon="minus">
								Annuler
							</Button>
						</Popconfirm>
					</Row>
				</Card>
			</Col>
		)
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
					{jobs}
				</Row>
			</div>
		);
}

export default Jobs;