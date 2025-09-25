import { Router } from 'express';
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post('/', authorize,createSubscription);
subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription by ID', id: req.params.id }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription by ID', id: req.params.id }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription by ID', id: req.params.id }));
subscriptionRouter.get('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription', userId: req.params.userId }));
subscriptionRouter.get('/:user/:id', authorize, getUserSubscriptions);
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET all user subscriptions' }));

export default subscriptionRouter;