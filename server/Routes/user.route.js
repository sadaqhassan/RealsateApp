import { Router } from "express";
import { LoginApi, RegisterApi } from "../controllers/user.controller.js";

const user = Router();

user.post('/register',RegisterApi);
user.post('/login',LoginApi);


export const userRoute = user;