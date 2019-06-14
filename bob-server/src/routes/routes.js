import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import { loginService, registerService, serviceUnitsService, addServiceUnitsService } from '~/app/services';

export default Router([
	{
		path: 'users/login',
		service: loginService,
		method: "GET",
		//middleware: [authMiddleware],
	},
	{
		path: 'users/register',
		service: registerService,
		method: "POST",
	},
	{
		path: 'serviceUnits',
		service: serviceUnitsService,
		method: "GET",
	},
	{
		path: 'serviceUnits',
		service: addServiceUnitsService,
		method: "POST",
	}
])