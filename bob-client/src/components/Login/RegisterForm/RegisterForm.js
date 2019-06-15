import React from 'react';
import './RegisterForm.scss';
import { Form, Icon, Input, Button, Divider, DatePicker, Col} from 'antd';

import axios from 'axios';
import Loader from '../../Loader';

let RegisterForm = ({form}) => {
	let  handleSubmit = async (e) => {
    e.preventDefault();
    form.validateFields( async (err, values) => {
      if (!err) {
        let user= {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          birthDate: values.birthDate,
          adress: '',
          phone: ''
        }
        await axios.post(`${BASE_URL}${usersURL}/register`, user ) // req.params.id
          .then((response) => {
            console.log(response.data);
            setUser(response.data);
            console.log(user);
          })
          .catch(err => {
            console.log(err)
          })
      }
    });
	};
	
	const { getFieldDecorator } = form;

	return (
		<Form onSubmit={handleSubmit} className="register-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Divider />
        
        <Form.Item>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input
              placeholder="First Name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input
              placeholder="Last Name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('birthDate', {
            rules: [{ required: true, message: 'Please input your birth date!' }],
          })(
            <DatePicker />, // onChange={onChange} 
          )}
        </Form.Item>

        <Divider />
        
        <Col style={{ textAlign: 'center'}}>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Sign in
            </Button>
          </Form.Item>
        </Col>
      </Form>
		);
}
const WrappedRegisterForm = Form.create({ name: 'normal_register' })(RegisterForm);
export default WrappedRegisterForm;