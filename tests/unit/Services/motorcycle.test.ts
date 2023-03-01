import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoService from '../../../src/Services/MotorCycles.service';
import { motoMock, motoModelMock, motoUpdateMock, listMotoMock } from './motorcycle.mock';

describe('Teste da rota Cars', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('01-Verifica a criação de um novo moto com sucesso', async function () {
    const service = new MotoService();
    sinon.stub(Model, 'create').resolves(motoMock);
    const response = await service.create(motoModelMock);

    expect(response.status).to.be.equal(200);
    expect(response.result).to.be.deep.equal(motoMock);
  });

  it('02-Verifica a consulta da lista de motos com sucesso', async function () {
    const service = new MotoService();
    sinon.stub(Model, 'find').resolves(listMotoMock);
    const response = await service.getAll();

    expect(response.status).to.be.equal(200);
    expect(response.result).to.be.deep.equal(listMotoMock);
    expect(response.result).to.be.length(2);
  });

  it('03-Verifica a consulta de um moto pelo id com sucesso', async function () {
    const service = new MotoService();
    sinon.stub(Model, 'findById').resolves(motoMock);
    const response = await service.findById('6348513f34c397abcad040b2');

    expect(response.status).to.be.equal(200);
    expect(response.result).to.be.deep.equal(motoMock);
  });

  it('04-Verifica a consulta de um moto pelo id com falha', async function () {
    const service = new MotoService();
    sinon.stub(Model, 'findById').resolves(null);
    const response = await service.findById('123');
        
    expect(response.status).to.be.equal(404);
    expect(response.message).to.be.equal('Motorcycle not found');
  });

  it('05-Verifica o update de um moto com sucesso', async function () {
    const service = new MotoService();
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motoUpdateMock);
    const response = await service.update('6348513f34c397abcad040b2', motoUpdateMock);

    expect(response.status).to.be.equal(200);
    expect(response.result).to.be.deep.equal(motoUpdateMock);
  });

  it('06-Verifica o update de um moto com falha', async function () {
    const service = new MotoService();
    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
    const response = await service.update('6348513f34c397abcad040b2', motoUpdateMock);

    expect(response.status).to.be.equal(404);
    expect(response.message).to.be.equal('Motorcycle not found');
  });
});
