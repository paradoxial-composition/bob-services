import Service from '../../Service';
import ServiceUnits from '~/app/models/ServiceUnits';

// let axios = require('axios')

export default class addServiceUnitsService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
		
		try {
			 let _ServiceUnits = (new ServiceUnits).getInstance();
			(new _ServiceUnits(this.req.body)).save((err, serviceUnit) => {
				console.log({err, serviceUnit})
				if (err) {
					return this.end(err)
				} else {
					return this.toJson({
						newServiceUnit	: {}
					})
				}
			})
		} catch (e) {
			console.log('data base error.')
			return this.end()
		}


		// let ServiceUnits = mongoose.model('ServiceUnits')
		// let newService = new ServiceUnits(req.body)
		// 	newService.save(function (err, serviceUnit) {
		// 		if (err) {
		// 			res.send(err)
		// 		} else {
		// 			res.json(serviceUnit)
		// 		}
		// 	})

		// return this.toJson({
		// 	name: this.constructor.name
		// })
	}
}