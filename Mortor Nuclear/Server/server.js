import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import ImportData from './DataImport.js';
import productRoute from './Routes/ProductRoutes.js';
import { errorHandler, NotFound } from './Middleware/Error.js';
import userRouter from './Routes/UserRoutes.js';

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);
app.use('/api/users', userRouter);
//ERROR HANDLER
app.use(NotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server running in  port ${PORT} `));
