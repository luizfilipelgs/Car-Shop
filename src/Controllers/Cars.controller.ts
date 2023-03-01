import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/Cars.service';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const { body } = this.req;

    try {
      const newCar = await this.service.create(body);
      return this.res.status(201).json(newCar.result);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const { status, result } = await this.service.getAll();
      return this.res.status(status).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;

    try {
      const { message, status, result } = await this.service.findById(id);
        
      if (message) return this.res.status(status).json({ message });

      return this.res.status(status).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const { body } = this.req;

    try {
      const { message, status, result } = await this.service.update(id, body);

      if (message) return this.res.status(status).json({ message });
      return this.res.status(status).json(result);
    } catch (error) {
      return this.next(error);
    }
  }
}

export default CarController;