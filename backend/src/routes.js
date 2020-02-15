import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

// Todas rotas a partir daqui devem ser autenticadas com o token do LOGIN
routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.get('/deliverymen', DeliverymanController.index);
routes.delete('/deliveryman/:deliveryman_id', DeliverymanController.delete);

routes.post('/delivery', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);
routes.delete('/delivery/:delivery_id', DeliveryController.delete);
routes.put('/delivery/:delivery_id', DeliveryController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
