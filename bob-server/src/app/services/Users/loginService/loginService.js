import Service from '../../Service';
import User from '~/app/models/User';

// let axios = require('axios')

export default class loginService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		try {
			let _User = (new User).getInstance();
			_User.findOne({ $and: [ {email: this.req.body.email}, {password: this.req.body.password} ] }, (err, user) => {
				if (err) {
					return this.end(err)
				} else {
					return this.toJson({
						user
					})
				}
			})
		} catch (e) {
			console.log('data base error.', e.message)
			return this.end()
		}
	}

	// async handle() {

	// 	this.Users.findOne({ $and: [ {email: req.body.email}, {password: req.body.password} ] }, function (err, user) {
	// 		if (err) {
	// 			res.send(err)
	// 		} else {
	// 			res.status(200)
	// 			res.json(user)
	// 		}
	// 	})

	// 	return this.toJson({
	// 		name: this.constructor.name
	// 	})
	// }
}