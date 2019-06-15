import React from 'react';
import './Dashboard.scss';
import { Card, Row, Col, Divider, Empty} from 'antd';

let Dashboard = ({componentItems, services}) => {

	let askDisplay= [];
	let jobDisplay= [];
	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 12
	}
	services.map((item,index) => {
		if (item.type === 'ask') {
			askDisplay.push(
				<Col {...colGris}>
					<Card className="CardItem" key={index}>
						<p>{componentItems.cardItems.activity} 
							<spacer/> <b>{item.activity}</b>
						</p>
						<p>{componentItems.cardItems.creationDate} 
							<spacer/> <b>{item.creationDate}</b>
						</p>
						<p>{componentItems.cardItems.user} 
							<spacer/> <b>{item.userId}</b>
						</p>
						<p>{componentItems.cardItems.description} 
							<spacer/> <b>{item.description}</b>
						</p>
					</Card>
				</Col>
			)
		}
		if (item.type === 'job') {
			jobDisplay.push(
				<Col {...colGris}>
					<Card className="CardItem" key={index}>
						<p>{componentItems.cardItems.activity} 
							<spacer/> <b>{item.activity}</b>
						</p>
						<p>{componentItems.cardItems.creationDate} 
							<spacer/> <b>{item.creationDate}</b>
						</p>
						<p>{componentItems.cardItems.user} 
							<spacer/> <b>{item.userId}</b>
						</p>
						<p>{componentItems.cardItems.description} 
							<spacer/> <b>{item.description}</b>
						</p>
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