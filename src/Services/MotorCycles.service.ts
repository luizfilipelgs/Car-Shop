import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycles';
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
}

export default MotorcyclesService;