import React from 'react';
import './RegisterForm.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

let RegisterForm = ({form}) => {
	let  handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
	};
	
	const { getFieldDecorator } = form;

	return (
		<Form onSubmit={handleSubmit} className="register-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
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
        <Form.Item>
          
          <Button type="primary" htmlType="submit" className="register-form-button">
            Sign in
          </Button>
        </Form.Item>
      </Form>
		);
}
const WrappedRegisterForm = Form.create({ name: 'normal_register' })(RegisterForm);
export default WrappedRegisterForm;