import React from 'react';
import './AddAsk.scss';
import { Form, message, Input, Button, Divider, Row, Col} from 'antd';


import axios from 'axios';

const BASE_URL = 'http://localhost:7000';
const usersURL = '/users';

let AddAsk = ({setVisible, form}) => {

	const success = () => {
		message
			.loading('Action en cours..', 1)
			.then(() => message.success('Demande postuler avec succés.', 2.5))
			setVisible(false);
	};

	let  handleSubmit = async (e) => {
    e.preventDefault();
    form.validateFields( async (err, values) => {
      if (!err) {
				success();
        // await axios.post(`${BASE_URL}${usersURL}/ask`, user ) // req.params.id
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   })
      }
    });
	};

	const { getFieldDecorator } = form;

	return (
		<Form onSubmit={handleSubmit} className="ask-form">
        <Form.Item>
          {getFieldDecorator('activity', {
            rules: [{ required: true, message: 'Please input your Activity!' }],
          })(
            <Input
              placeholder="Activity"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('description', {
          })(
            <Input
              placeholder="Description"
            />,
          )}
        </Form.Item>

        <Divider />
				<Col style={{ textAlign: 'right'}}>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="ask-form-button">
							Postuler
						</Button>
					</Form.Item>
				</Col>
      </Form>
		);
}

const WrappedAskForm = Form.create({ name: 'add_ask' })(AddAsk);
export default WrappedAskForm;