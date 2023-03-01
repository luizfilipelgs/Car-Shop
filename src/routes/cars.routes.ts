import { Router } from 'express';
import CarController from '../Controllers/Cars.controller';
import verifyId from '../middleware/id.middleware';

const routes = Router();

routes.post('/', (req, res, next) => new CarController(req, res, next).create());
routes.get('/', (req, res, next) => new CarController(req, res, next).findAll());
routes.get('/:id', verifyId, (req, res, next) => new CarController(req, res, next).findById());
routes.put('/:id', verifyId, (req, res, next) => new CarController(req, res, next).update());

export default routes;