import Service from '../../Service';
import ServiceUnits from '~/app/models/ServiceUnits';

// let axios = require('axios')

export default class updateServiceUnitService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		try {
			let _ServiceUnits = (new ServiceUnits).getInstance();
			_ServiceUnits.update({ _id: this.req.params.id }, this.req.body, (err, res) => { // to Object_Id may be a future probleme
				if (err) {
					this.res.send(err)
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