import { Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../config/queue.js";
import { Job } from "bullmq";

interface createDuelJobDataType {
    imageUrl?: string,
    duelId?: string,
    title?: string,
    expire_at?: string,
    description?: string
}


export const createDuelQueueName = "createDuel";

export const createDuelQueue = new Queue(createDuelQueueName, {
    connection: redisConnection,
    defaultJobOptions: defaultQueueOptions
});


export const createDuelQueueWorker = new Worker(createDuelQueueName, async (job: Job) => {

    //create a id with the recieved duel

    //if duelId exists then update 

    //if not then create a new Duel



}, {
    connection: redisConnection
});

