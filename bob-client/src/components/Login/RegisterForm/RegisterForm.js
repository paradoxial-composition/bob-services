import React from 'react';
import './RegisterForm.scss';
import { Form, Icon, Input, Button, Divider, DatePicker, Col, Row} from 'antd';


import axios from 'axios';
import Loader from '../../Loader';

const BASE_URL = 'http://localhost:7000';
const usersURL = '/users';

let RegisterForm = ({form, history}) => {
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
            console.log(response);
            history.push('/auth')
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
        <Row style={{ textAlign: 'center'}}>
          <Col >
            <Form.Item>
              <Button type="primary" htmlType="submit" className="register-form-button">
                Enregistrer
              </Button>
            </Form.Item>
          </Col>
          <Col style={{ textAlign: 'center'}}>
            <Form.Item>
            <Button type="link" onClick={() => {history.push('/auth');}}>Annuler</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
		);
}
const WrappedRegisterForm = Form.create({ name: 'normal_register' })(RegisterForm);
export default WrappedRegisterForm;