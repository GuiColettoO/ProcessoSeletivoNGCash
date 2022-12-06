import { Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { authMiddleware } from "./middlewares/authMiddleware";
import { validate } from './middlewares/validator';
import { bodyCreateUser } from './middlewares/schemasValidator/user';


const routes = Router()

routes.post('/users',  validate(bodyCreateUser), new UsersController().create)
routes.post('/login', new UsersController().login)
routes.post('/profile', authMiddleware, new UsersController().getProfile)

export default routes