import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected name: string;

  constructor(schema: Schema, name: string) {
    this.schema = schema;
    this.name = name;
    this.model = models[name] || model(name, schema);
  }

  public async create(obj: T): Promise<T> {
    const result = await this.model.create(obj);
    return result;
  }

  public async findAll(): Promise<T[]> {
    const result = await this.model.find();
    return result;
  }

  public async findById(id: string): Promise<T | null> {
    const result = await this.model.findById(id);
    return result;
  }

  public async updateById(id: string, obj: Partial<T>): Promise<T | null> {
    const result = await this.model.findByIdAndUpdate(id, obj, { new: true });
    return result;
  }
}

export default AbstractODM;