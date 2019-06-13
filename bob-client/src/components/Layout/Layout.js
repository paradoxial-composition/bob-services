import React, {useState} from 'react';
import './Layout.scss';
import { Layout, Drawer} from 'antd';
import _SideBar from './SideBar';
import _Toolbar from './Toolbar';
import Dashboard from '../Dashboard';
import Jobs from '../Asks';
import Profil from '../Profil';
const { Header, Sider, Content } = Layout;

let _Layout = () => {
	let [collapsed, setCollapsed] = useState(false);
	let [visible, setVisible] = useState(false);

	let toggle = () => {
    setCollapsed(!collapsed);
	};
	
	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<_SideBar setVisible={setVisible}/>
			</Sider>

			<Layout>
				<Header style={{ background: '#fff', padding: 0 }}>
					<_Toolbar toggle={toggle} collapsed={collapsed}/>
				</Header>
				
				<Drawer
          title="Mon profile"
          placement="right"
          closable={false}
          onClose={() => setVisible(false)}
					visible={visible}
					width= {500}
        >
					<Profil />
				</Drawer>

				<Content>
					<Jobs />
				</Content>
			</Layout>

		</Layout>
		);
}

export default _Layout;