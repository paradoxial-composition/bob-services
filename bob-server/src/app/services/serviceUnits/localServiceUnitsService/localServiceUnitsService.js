import Service from '../../Service';
import ServiceUnits from '~/app/models/ServiceUnits';

import axios from 'axios';

export default class localServiceUnitsService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		let res = this.res;
		let radius = this.req.params.radius
		axios.get('https://ipapi.co/json') // get the browser's current position
			.then((response) => {
				let coord = response.data
				try {
					let _ServiceUnits = (new ServiceUnits).getInstance();
					_ServiceUnits.aggregate([ // look for nearby shops using mongo's distance calculation method geoNear
						{
							$geoNear: {
								near: {
									type: 'Point',
									coordinates: [parseFloat(coord.longitude), parseFloat(coord.latitude)]
								},
								spherical: true,
								distanceField: 'distance',
								maxDistance: parseInt(radius) || 3000// if radius is null then default distance is 10Km
							}
						}
					], function (err, serviceUnit) {
						if (err) {
							res.send(err)
						} else {
							// return this.toJson({
							// 	serviceUnit
							// })
							res.status(200)
							console.log(serviceUnit);
            	res.json(serviceUnit)
						}
					})
				} catch (err) {
					console.log(err)
				}
			})
	}
}