import Service from '../../Service';
import ServiceUnits from '~/app/models/ServiceUnits';

// let axios = require('axios')

export default class serviceUnitsService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		try {
			let _ServiceUnits = (new ServiceUnits).getInstance();
			_ServiceUnits.find((err, serviceUnit) => {
				if (err) {
					return this.end(err)
				} else {
					return this.toJson({
						serviceUnit
					})
				}
			})
		} catch (e) {
			console.log('data base error.')
			return this.end()
		}
	}
}