import { Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../config/queue.js";
import { send } from "../config/mail.js";
export const emailQueueName = "emailQueue";
export const emailQueue = new Queue(emailQueueName, {
    connection: redisConnection,
    defaultJobOptions: defaultQueueOptions
});
// worker
export const queueWorker = new Worker(emailQueueName, async (job) => {
    const data = job.data;
    await send(data.to, data.subject, data.body);
}, {
    connection: redisConnection
});
