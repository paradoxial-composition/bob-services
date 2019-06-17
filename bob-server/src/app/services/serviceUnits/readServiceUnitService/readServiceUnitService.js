import Service from '../../Service';
import ServiceUnits from '~/app/models/ServiceUnits';

// let axios = require('axios')

export default class readServiceUnitService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		try {
			let _ServiceUnits = (new ServiceUnits).getInstance();
			_ServiceUnits.findOne({ _id: this.req.params.id }, (err, serviceUnit) => {
				if (err) {
					this.res.send(err)
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