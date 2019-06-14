import Service from '../Service';
let mongoose = require('mongoose')
let Users = mongoose.model('Users')

let axios = require('axios')

export default class loginService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		Users.findOne({ $and: [ {email: req.body.email}, {password: req.body.password} ] }, function (err, user) {
			if (err) {
				res.send(err)
			} else {
				res.status(200)
				res.json(user)
			}
		})

		return this.toJson({
			name: this.constructor.name
		})
	}
}