import express from 'express'
import { configApp } from './configs/config.js';
const app = express();
configApp(app);

