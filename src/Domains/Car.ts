import ICar from '../Interfaces/ICars';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getDoorsQty(): number { return this.doorsQty; }
  
  public getSeatsQty(): number { return this.seatsQty; }
}