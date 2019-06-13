import React from 'react';
import './Toolbar.scss';
import {Icon} from 'antd';

let Toolbar = ({toggle, collapsed}) => {
	return (
			<Icon
			className="trigger"
			type={collapsed ? 'menu-unfold' : 'menu-fold'}
			onClick={toggle}
		/>
		);
}

export default Toolbar;