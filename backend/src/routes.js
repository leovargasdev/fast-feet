import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
// import DeliveriesProblemController from './app/controllers/DeliveriesProblemController';
// import CancelDeliveryController from './app/controllers/CancelDeliveryController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

// Todas rotas a partir daqui devem ser autenticadas com o token do LOGIN
routes.use(authMiddleware);

routes.post('/recipient', RecipientController.store);
routes.get('/recipients', RecipientController.index);
routes.get('/recipient/:id', RecipientController.index);
routes.get('/recipients-select', RecipientController.show);
routes.put('/recipient/:id', RecipientController.update);
routes.delete('/recipient/:id', RecipientController.delete);

// deliveryman: singular, deliverymen: plural
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.get('/deliverymen', DeliverymanController.index);
routes.get('/deliveryman/:id', DeliverymanController.index);
routes.get('/deliverymen-select', DeliverymanController.show);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.post('/delivery', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);
routes.get('/delivery/:id', DeliveryController.index);
routes.get('/delivery/:id/view', DeliveryController.show);
routes.put('/delivery/:id', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.delete);

// routes.get('/deliveryman/:deliveryman_id/deliveries', DeliveryController.index);

routes.post('/delivery/:id/problems', DeliveryProblemController.store);
routes.get('/delivery/:delivery_id/problems', DeliveryProblemController.index);
routes.get('/delivery-problems', DeliveryProblemController.index);
routes.put('/problem/:id/cancel-delivery', DeliveryProblemController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/file/:id', FileController.index);

export default routes;
