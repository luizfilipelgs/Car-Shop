import { Router } from 'express';
import MotoController from '../Controllers/Motorcycles.controller';
import verifyId from '../middleware/id.middleware';

const routes = Router();

routes.post('/', (req, res, next) => new MotoController(req, res, next).create());
routes.get('/', (req, res, next) => new MotoController(req, res, next).findAll());
routes.get('/:id', verifyId, (req, res, next) => new MotoController(req, res, next).findById());
routes.put('/:id', verifyId, (req, res, next) => new MotoController(req, res, next).update());

export default routes;