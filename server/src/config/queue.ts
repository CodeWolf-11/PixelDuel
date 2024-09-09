import { ConnectionOptions, DefaultJobOptions } from "bullmq";

export const redisConnection: ConnectionOptions = {
    host: process.env.REDIS_HOST,
    port: 6379,
    // password: 
}

export const defaultQueueOptions: DefaultJobOptions = {
    removeOnComplete: {
        count: 20,
        age: 60 * 60
    },
    attempts: 3,
    backoff: {
        type: "exponential", //it defines that the delay between the retires will increase exponentially
        delay: 1000, //this is the initial delay
    },
    removeOnFail: false,
}