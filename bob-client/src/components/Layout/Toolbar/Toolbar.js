import React from 'react';
import './Toolbar.scss';
import LoginInfo from './LoginInfo';
import {Icon} from 'antd';

let Toolbar = ({Title, collapsed, toggle}) => {
	return (
		<nav className="toolbar__navigation">
			<Icon
				className="trigger"
				type={collapsed ? 'menu-unfold' : 'menu-fold'}
				onClick={toggle}
			/>
			<div className="toolbar__logo">{Title}</div>
			<div className="toolbar_login-info">
				<LoginInfo />
			</div>
		</nav>
	);
}

export default Toolbar;