import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorCycles.service';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const { body } = this.req;

    try {
      const newMoto = await this.service.create(body);
      return this.res.status(201).json(newMoto.result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;