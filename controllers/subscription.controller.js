import Subscription from "../models/subscription.model.js";
import {workflowClient} from "../config/upstash.js";
import {SERVER_URL} from "../config/env.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id
        });

        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription._id
            },
            headers: {
                'Content-Type': 'application/json' // Korrigierte Groß-/Kleinschreibung
            },
            retries: 0
        });

        res.status(201).json({
            success: true,
            data: {subscription, workflowRunId}
        });

    } catch (e) {
        next(e);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        // We cvheck if the user is the owner of the account, !== is a strange operator but it was suggested to me by the highlighter
        if (req.user.id !== req.params.id) {
             const error = new Error('You`re not the owner of this account');
             error.statusCode = 401;
             throw error;
        }
        const subscriptions = await Subscription.find({user: req.params.id});

        res.status(200).json({
            success: true,
            data: subscriptions
        });
    } catch (e) {
        next(e);
    }
}