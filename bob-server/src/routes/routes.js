import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import { welcomeService } from '~/app/services';

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
	}
])