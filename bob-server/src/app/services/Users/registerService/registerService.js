import Service from '../../Service';
import User from '~/app/models/User';

// let axios = require('axios')

export default class loginService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
	//	instruction
	try {
		let _User = (new User).getInstance();
		(new _User(this.req.body)).save((err, user) => {
			console.log({err, user})
			if (err) {
				this.res.send(err)
			} else {
				return this.toJson({
					newUser	: {}
				})
			}
		})
	} catch (e) {
		console.log('data base error.')
		return this.end()
	}
		//name: this.constructor.name
	}
}