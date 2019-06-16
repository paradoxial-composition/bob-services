import React from 'react';
import './Asks.scss';
import {Button , Popconfirm, notification, Card, Col, Row, Divider} from 'antd';

let Asks = ({componentItems, services}) => {
	let asks = []
	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 12
	}

	const revokeAsk = () => {

		//TODO: insert Ask delete call here

		const args = {
			message: 'Demande annulé.',
			description:
				'Votre Demande d\'aide a été annuler.',
			duration: 1.5,
		};
		notification.open(args);
	};

	services.map((item, index) => {
		asks.push(
			<Col {...colGris} >
				<Card key={index}>
					<p>{componentItems.cardItems.activity} <spacer/> <b>{item.activity}</b></p>
					<p>{componentItems.cardItems.creationDate} <spacer/> <b>{item.creationDate}</b></p>
					<p>{componentItems.cardItems.user} <spacer/> <b>{item.userId}</b></p>
					<p>{componentItems.cardItems.description} <spacer/> <b>{item.description}</b></p>
					<Row style={{ textAlign: 'center'}}>
						<Popconfirm
							title="Êtes vous sûre ?"
							onConfirm={revokeAsk}
							okText="Oui"
							cancelText="Non"
						>
							<Button type="danger" ghost shape="round" icon="minus">
								Retirer
							</Button>
							<Button type="primary"  shape="round" style={{ marginLeft: 10}}>
								Valider
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
					{asks}
				</Row>
			</div>
		);
}

export default Asks;