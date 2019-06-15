import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import { 
	loginService, 
	registerService,
	allUsersService,
	deleteUserService,
	updateUserService,

	serviceUnitsService,
	addServiceUnitsService,
	} from '~/app/services';
	
export default Router([
	{
		path: 'users/login',
		service: loginService,
		method: "POST",
		//middleware: [authMiddleware],
	},
	{
		path: 'users/register',
		service: registerService,
		method: "POST",
	},
	{
		path: 'users',
		service: allUsersService,
		method: "GET",
	},
	{
		path: 'users/:id',
		service: deleteUserService,
		method: "DELETE",
	},
	{
		path: 'users/:id',
		service: updateUserService,
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