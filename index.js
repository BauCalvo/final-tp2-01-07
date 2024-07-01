import express from 'express';
import { SERVER_PORT } from './config/config.js';
import router from './routers/router.js';
import generalError from './Middlewares/generalError.js';

const app = express();

app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.use("/api",router);

app.use(generalError);

app.listen(SERVER_PORT, () => {console.log(`Server running on port ${SERVER_PORT}`)});