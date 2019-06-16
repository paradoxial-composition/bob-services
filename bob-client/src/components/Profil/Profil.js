import React from 'react';
import './Profil.scss';
import {Divider, Card, Row, Col, Descriptions} from 'antd';

let Profil = ({componentItems, currentUser, DescriptionItem}) => {
	console.log(currentUser);
	return (
			<div>
				<Card bordered={false}>
				<Row>
						<Col span={12}>
							<h3>{componentItems.personal.title}</h3>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem title={componentItems.personal.fullName} content={currentUser.lastName + ' ' + currentUser.firstName} />
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem title={componentItems.personal.adress} content={currentUser.adress} />
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem title={componentItems.personal.birthDate} content={ String(currentUser.birthDate).split('T')[0]} />
						</Col>
					</Row>	
				</Card>
				<Divider />
				<Card bordered={false}>
					<Row>
						<Col span={12}>
							<h3>{componentItems.contact.title}</h3>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem title={componentItems.contact.email} content={currentUser.email} />
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem title={componentItems.contact.phone} content={currentUser.phone} />
						</Col>
					</Row>
				</Card>
			</div>
		);
}

export default Profil;