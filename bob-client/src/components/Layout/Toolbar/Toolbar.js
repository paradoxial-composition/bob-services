import React, {useState} from 'react';
import './Toolbar.scss';
import LoginInfo from './LoginInfo';
import AddAsk from '../../AddAsk';
import {Icon, Col, Button, Modal} from 'antd';

let Toolbar = ({Title, collapsed, toggle}) => {
	let [visible, setVisible] = useState(false);
	
	return (
		<nav className="toolbar__navigation">
			<Icon
				className="trigger"
				type={collapsed ? 'menu-unfold' : 'menu-fold'}
				onClick={toggle}
			/>
			<div className="toolbar__logo">{Title}</div>
			<Col span={12} style={{ textAlign: 'right'}}>
				<Button type="primary" shape="round" icon="plus" onClick={() => {setVisible(true)}} >
					J'ai besoin d'aide
				</Button>
				<Modal
          title="Postuler une demande."
					visible={visible}
					onCancel={() => {setVisible(false)}}
          footer = {null}
        >
          <AddAsk setVisible={setVisible}/>
        </Modal>
			</Col>
			<div className="toolbar_login-info">
					<LoginInfo />
			</div>
		</nav>
	);
}

export default Toolbar;