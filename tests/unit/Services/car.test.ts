import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Cars.service';
import { carMock, carModelMock, carUpdateMock, listCarMock } from './car.mock';

describe('Teste da rota Cars', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('01-Verifica a criação de um novo carro com sucesso', async function () {
    const service = new CarService();
    sinon.stub(Model, 'create').resolves(carMock);
    const response = await service.create(carModelMock);

    expect(response.status).to.be.equal(200);
    expect(response.result).to.be.deep.equal(carMock);
  });

  it('02-Verifica a consulta da lista de carros com sucesso', async function () {
    const service = new CarService();
    sinon.stub(Model, 'find').resolves(listCarMock);
    const response = await service.getAll();

    expect(response.status).to.be.equal(200);
    expect(response.result).to.be.deep.equal(listCarMock);
    expect(response.result).to.be.length(2);
  });

  it('03-Verifica a consulta de um carro pelo id com sucesso', async function () {
    const service = new CarService();
    sinon.stub(Model, 'findById').resolves(carMock);
    const response = await service.findById('6348513f34c397abcad040b2');

    expect(response.status).to.be.equal(200);
    expect(response.result).to.be.deep.equal(carMock);
  });

  it('04-Verifica a consulta de um carro pelo id com falha', async function () {
    const service = new CarService();
    sinon.stub(Model, 'findById').resolves(null);
    const response = await service.findById('123');
        
    expect(response.status).to.be.equal(404);
    expect(response.message).to.be.equal('Car not found');
  });

  it('05-Verifica o update de um carro com sucesso', async function () {
    const service = new CarService();
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carUpdateMock);
    const response = await service.update('6348513f34c397abcad040b2', carUpdateMock);

    expect(response.status).to.be.equal(200);
    expect(response.result).to.be.deep.equal(carUpdateMock);
  });

  it('06-Verifica o update de um carro com falha', async function () {
    const service = new CarService();
    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
    const response = await service.update('6348513f34c397abcad040b2', carUpdateMock);

    expect(response.status).to.be.equal(404);
    expect(response.message).to.be.equal('Car not found');
  });
});
