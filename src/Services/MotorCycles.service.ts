import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycles.model';

class MotorcyclesService {
  private model: MotorcycleModel;

  constructor() {
    this.model = new MotorcycleModel();
  }

  public createMotoDomain(moto: IMotorcycles | null): Motorcycles | null {
    if (moto) return new Motorcycles(moto);
    return null;
  }

  public async create(moto: IMotorcycles) {
    const newMoto = await this.model.create(moto);
    const motoDom = this.createMotoDomain(newMoto);

    return { status: 200, result: motoDom };
  }

  public async getAll() {
    const motoList = await this.model.findAll();
    const motoListDom = motoList.map((c) => this.createMotoDomain(c));

    return { status: 200, result: motoListDom };
  }

  public async findById(id: string) {
    const carId = await this.model.findById(id);
    const carIdDom = this.createMotoDomain(carId);

    if (carId) return { status: 200, result: carIdDom };
    return { status: 404, message: 'Motorcycle not found' };
  }

  public async update(id: string, moto: IMotorcycles) {
    const motoUpdated = await this.model.updateById(id, moto);
    if (!motoUpdated) return { status: 404, message: 'Motorcycle not found' };

    const motoUpdatedDom = this.createMotoDomain(motoUpdated);
    return { status: 200, result: motoUpdatedDom };
  }
}

export default MotorcyclesService;