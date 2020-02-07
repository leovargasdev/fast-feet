import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/', SessionController.store);

export default routes;
