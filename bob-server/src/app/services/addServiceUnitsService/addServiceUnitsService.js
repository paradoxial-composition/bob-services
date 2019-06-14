import Service from '../Service';
import mongoose from 'mongoose';

// let axios = require('axios')

export default class addServiceUnitsService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
		
		let ServiceUnits = mongoose.model('ServiceUnits')
		let newService = new ServiceUnits(req.body)
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