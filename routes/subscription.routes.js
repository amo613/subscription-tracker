import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE new subscription' }));
subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription by ID', id: req.params.id }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription by ID', id: req.params.id }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription by ID', id: req.params.id }));
subscriptionRouter.get('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription', userId: req.params.userId }));
subscriptionRouter.get('/:user/:id', (req, res) => res.send({ title: 'GET all user subscriptions' }));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET all user subscriptions' }));

export default subscriptionRouter;