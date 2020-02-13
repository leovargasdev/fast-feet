import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

// Todas rotas a partir daqui devem ser autenticadas com o token do LOGIN
routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);

routes.post('/deliveryman', DeliverymanController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
