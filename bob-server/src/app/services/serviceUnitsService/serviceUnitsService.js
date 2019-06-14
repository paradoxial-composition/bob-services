import Service from '../Service';
let mongoose = require('mongoose')
let ServiceUnits = mongoose.model('ServiceUnits')

// let axios = require('axios')

export default class serviceUnitsService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		ServiceUnits.find({}, function (err, usnitServices) {
			if (err) {
				res.send(err)
			} else {
				res.status(200)
				res.json(usnitServices)
			}
		})

		return this.toJson({
			name: this.constructor.name
		})
	}
}