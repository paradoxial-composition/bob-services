import Service from '../../Service';
import User from '~/app/models/User';

// let axios = require('axios')

export default class deleteUserService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		try {
			let _User = (new User).getInstance();
			_User.remove({ _id: this.req.params.id }, (err, res) => { // to Object_Id may be a future probleme
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