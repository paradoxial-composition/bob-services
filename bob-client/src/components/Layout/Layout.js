import React, {useState} from 'react';
import './Layout.scss';
import { Layout, Drawer} from 'antd';
import SideBar from './SideBar';
import Toolbar from './Toolbar';
import Profil from '../Profil';
const { Header, Sider, Content } = Layout;

let _Layout = ({children, history}) => {
	let [collapsed, setCollapsed] = useState(false);
	let [visible, setVisible] = useState(false);

	let toggle = () => {
    setCollapsed(!collapsed);
	};
	
	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<SideBar setVisible={setVisible}/>
			</Sider>

			<Layout>
				<Header style={{ background: '#fff', padding: 0 }}>
					<Toolbar toggle={toggle} collapsed={collapsed} history={history}/>
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

				<Content
					className="LayoutContent"
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
					{children}
				</Content>
			</Layout>

		</Layout>
		);
}

export default _Layout;