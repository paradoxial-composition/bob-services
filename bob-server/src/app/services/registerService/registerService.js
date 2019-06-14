import Service from '../Service';
let mongoose = require('mongoose')

// let axios = require('axios')

export default class loginService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
		// instruction
		let Users = mongoose.model('Users')
		
		let newUser = new Users(req.body)
			newUser.save(function (err, user) {
				if (err) {
					res.send(err)
				} else {
					res.json(user)
				}
			})

		return this.toJson({
			name: this.constructor.name
		})
	}
}