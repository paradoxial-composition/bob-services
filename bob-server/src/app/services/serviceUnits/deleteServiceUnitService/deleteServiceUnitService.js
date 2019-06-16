
import Service from '../../Service';
import ServiceUnits from '~/app/models/ServiceUnits';

// let axios = require('axios')

export default class deleteServiceUnitService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		try {
			let _ServiceUnits = (new ServiceUnits).getInstance();
			_ServiceUnits.remove({ _id: this.req.params.id }, (err, res) => { // to Object_Id may be a future probleme
				if (err) {
					return this.end(err)
				} else {
					return this.toJson({
						res
					})
				}
			})
		} catch (e) {
			console.log('data base error.')
			return this.end()
		}
	}
}