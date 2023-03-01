import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car.model';

class CarService {
  private model: CarModel;

  constructor() {
    this.model = new CarModel();
  }

  public createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    const carDom = this.createCarDomain(newCar);

    return { status: 200, result: carDom };
  }
}

export default CarService;