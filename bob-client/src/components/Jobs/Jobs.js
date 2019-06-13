import React from 'react';
import './Jobs.scss';
import {Card} from 'antd';

let Jobs = ({componentItems, services}) => {

	let jobs = []
	services.map((item, index) => {
		jobs.push(
			<Card key={index} style={{ with: 200}}>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.activity} <spacer/> {item.activity}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.creationDate} <spacer/> {item.creationDate}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.user} <spacer/> {item.userId}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.description} <spacer/> {item.description}</label></div>
				</Card>
		)
	})
	return (
			<div>
				<h3>{componentItems.title}</h3>
				<div style={{ display: 'flex' }}>
					{jobs}
				</div>
			</div>
		);
}

export default Jobs;