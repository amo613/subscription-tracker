import { Router } from 'express';
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
const userRouter = Router();
import errorMiddleware from "../middlewares/error.middleware.js";

userRouter.get('/',authorize, getUsers);
userRouter.get('/:id', authorize,errorMiddleware, getUser);
userRouter.post('/', (req, res) => res.send({ title: 'POST new user' }));
userRouter.put('/:id', (req, res) => res.send({ title: 'PUT user by ID', id: req.params.id }));
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user by ID', id: req.params.id }));

export default userRouter;