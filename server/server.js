import express from 'express'
import { configApp } from './configs/config.js';
import { mongodbConn } from './configs/conn.js';
import { userRoute } from './Routes/user.route.js';
const app = express();

configApp(app);

mongodbConn();

app.use("/api/user",userRoute);

