import React from 'react';
import './Dashboard.scss';
import {Card} from 'antd';

let Dashboard = ({componentItems, services}) => {

	let askDisplay= [];
	let jobDisplay= [];

	services.map((item,index) => {
		if (item.type === 'ask') {
			askDisplay.push(
				<Card key={index} style={{ with: 200}}>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.activity} <spacer/> {item.activity}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.creationDate} <spacer/> {item.creationDate}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.user} <spacer/> {item.userId}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.description} <spacer/> {item.description}</label></div>
				</Card>
			)
		}
		if (item.type === 'job') {
			jobDisplay.push(
				<Card key={index} style={{ with: 200}}>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.activity} <spacer/> {item.activity}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.creationDate} <spacer/> {item.creationDate}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.user} <spacer/> {item.userId}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.description} <spacer/> {item.description}</label></div>
				</Card>
			)
		}
	})

	return (
			<div>
				<h3>{componentItems.jobTitle}</h3>
				<div style={{ display: 'flex' }}>
					{jobDisplay}
				</div>

				<h3>{componentItems.askTitle}</h3>
				<div style={{ display: 'flex' }}>
					{askDisplay}
				</div>
			</div>
		);
}

export default Dashboard;