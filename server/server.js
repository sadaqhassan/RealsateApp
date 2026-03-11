import express from 'express'
import { configApp } from './configs/config.js';
import { mongodbConn } from './configs/conn.js';
const app = express();

configApp(app);

mongodbConn()
