import React from 'react';
import './SideBar.scss';
import { Link } from 'react-router-dom';
import {Menu, Icon} from 'antd';

let SideBar = ({componentItems, setVisible}) => {

	return (
		<div className="logo" />,
		<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ textAlign: 'left'}}>
			<Menu.Item key="1">
				<Link to={componentItems.dashboard.path} />
				<Icon type={componentItems.dashboard.icon} />
				<span>{componentItems.dashboard.label}</span>
			</Menu.Item>
			<Menu.Item key="2">
				<Link to={componentItems.myJobs.path} />
				<Icon type={componentItems.myJobs.icon} />
				<span>{componentItems.myJobs.label}</span>
			</Menu.Item>
			<Menu.Item key="3">
				<Link to={componentItems.myAsks.path} />
				<Icon type={componentItems.myAsks.icon} />
				<span>{componentItems.myAsks.label}</span>
			</Menu.Item>
			<Menu.Item key="4" onClick={() => setVisible(true)}>
				<Icon type={componentItems.profil.icon} />
				<span>{componentItems.profil.label}</span>
			</Menu.Item>
		</Menu>
		);
}

export default SideBar;