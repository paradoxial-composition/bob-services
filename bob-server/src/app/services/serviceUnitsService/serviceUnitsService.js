import Service from '../Service';
import mongoose from 'mongoose';

// let axios = require('axios')

export default class serviceUnitsService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		let ServiceUnits = mongoose.model('ServiceUnits')
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