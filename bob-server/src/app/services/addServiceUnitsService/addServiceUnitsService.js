import Service from '../Service';
let mongoose = require('mongoose')
let ServiceUnits = mongoose.model('ServiceUnits')

// let axios = require('axios')

export default class addServiceUnitsService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		let newService = new User(req.body)
			newService.save(function (err, serviceUnit) {
				if (err) {
					res.send(err)
				} else {
					res.json(serviceUnit)
				}
			})

		return this.toJson({
			name: this.constructor.name
		})
	}
}