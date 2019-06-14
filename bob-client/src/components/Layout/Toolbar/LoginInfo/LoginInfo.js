
import React from 'react'
import { Avatar } from 'antd';
// import { userService } from '../../../Authentication/_services';
import { Menu, Dropdown, Icon } from 'antd';

// import { logout } from '../../../../store/actions/userActions';
// import { connect } from 'react-redux';


let LoginInfo = ({user, logout, componentItems}) => {
	return (
		<div style={{ dislay: 'flex'}}>
				<label>{user.lastName + ' '}</label>
				<label>{user.firstName}</label>

				<Dropdown overlay={
					<Menu>
						<Menu.Item>
							<a target="_self" rel="noopener noreferrer" onClick={logout}>{componentItems.logout}</a>
						</Menu.Item>
					</Menu>
				}>
					<a className="ant-dropdown-link" href="#">
						<Avatar icon="user" /><Icon type="down" />
					</a>
				</Dropdown>
		</div>
	);
}

// const mapStateToProps = state => ({
// 	user: state.userReducer
// });

// export default connect(mapStateToProps, {
// 	logout,
// })(LoginInfo);

export default LoginInfo;