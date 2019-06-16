import React, {useState, useEffect} from 'react';
import './AddAsk.scss';
import { Form, message, Input, Button, Divider, Row, Col} from 'antd';


import axios from 'axios';

const BASE_URL = 'http://localhost:7000';
const usersURL = '/users';

let AddAsk = ({setVisible, form}) => {
  useEffect(() => {
		getLocation();
	}, []);
  let [coord, setCoord] = useState({});

	const success = () => {
    message
    .loading('Action en cours..', 1)
    .then(() => message.success('Demande postuler avec succés.', 2.5))
    setVisible(false);
	};
  
  let getLocation= () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((position) => {
        let location = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
        
        setCoord( location );
        console.log('NAAV, ', location);
        return location;
      });
      
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
	let  handleSubmit = async (e) => {
    e.preventDefault();
    form.validateFields( async (err, values) => {
      if (!err) {
        success();
        let date = new Date();
        let month = date.getMonth() + 1;
        let today = date.getFullYear() + '-' + month + '-' + date.getDate();
        let ask = {
          activity: values.activity,
          creationDate: today,
          userId: JSON.parse(localStorage.getItem('user')).user._id,
          description: values.description,
          type: 'ask',
          intrestedUsers: [],
          achieved: false,
          location: {
            coordinates: [coord.long, coord.lat]
          },
          solved: false
        }
        console.log('Nav ', coord, 'ASK ', ask)
        // await axios.post(`${BASE_URL}${usersURL}/ask`, ask ) // req.params.id
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