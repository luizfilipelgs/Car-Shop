import express from 'express';
import carRouter from './routes/cars.routes';
import motorcyclesRouter from './routes/motorcycles.routes';

const app = express();

app.use(express.json());

app.use('/cars', carRouter);
app.use('/motorcycles', motorcyclesRouter);

export default app;
