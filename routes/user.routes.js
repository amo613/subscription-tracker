import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({ title: 'GET all users' }));
userRouter.get('/:id', (req, res) => res.send({ title: 'GET user by ID', id: req.params.id }));
userRouter.post('/', (req, res) => res.send({ title: 'POST new user' }));
userRouter.put('/:id', (req, res) => res.send({ title: 'PUT user by ID', id: req.params.id }));
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user by ID', id: req.params.id }));

export default userRouter;