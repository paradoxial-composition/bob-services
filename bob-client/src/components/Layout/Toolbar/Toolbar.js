import React from 'react';
import './Toolbar.css';
import LoginInfo from './LoginInfo';
import {Icon} from 'antd';

let Toolbar = ({Title, collapsed, toggle}) => {
	return (
		<nav className="toolbar__navigation">
			<div className="toolbar__logo">{Title}</div>
			<div className="toolbar_login-info">
					<Icon
					className="trigger"
					type={collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={toggle}
				/>
				<LoginInfo />
			</div>
		</nav>
	);
}

export default Toolbar;