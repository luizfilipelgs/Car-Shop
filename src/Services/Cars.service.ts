import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Cars.model';

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

  public async getAll() {
    const carList = await this.model.findAll();
    const carListDom = carList.map((c) => this.createCarDomain(c));

    return { status: 200, result: carListDom };
  }

  public async findById(id: string) {
    const carId = await this.model.findById(id);
    const carIdDom = this.createCarDomain(carId);

    if (carId) return { status: 200, result: carIdDom };
    return { status: 404, message: 'Car not found' };
  }

  public async update(id: string, car: ICar) {
    const carUpdated = await this.model.updateById(id, car);
    if (!carUpdated) return { status: 404, message: 'Car not found' };

    const carUpdatedDom = this.createCarDomain(carUpdated);
    return { status: 200, result: carUpdatedDom };
  }
}

export default CarService;