import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ main: 'Hello FastFeet' }));

export default routes;
