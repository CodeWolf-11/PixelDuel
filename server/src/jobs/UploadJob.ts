import { Job, Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../config/queue.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import axios from "axios";
import prisma from "../config/db.js";


interface uploadJobDataType {
    localFilePath: string
    duelId: number
}

export const uploadQueueName = "uploadQueue";

export const uploadQueue = new Queue(uploadQueueName, {
    connection: redisConnection,
    defaultJobOptions: defaultQueueOptions
});

export const uploadWorker = new Worker(uploadQueueName, async (job: Job) => {

    //code that the worker will execute
    const uploadData: uploadJobDataType = job.data;

    const response = await uploadOnCloudinary(uploadData.localFilePath);

    //update the db

    await prisma.duel.update({
        where: {
            id: uploadData.duelId
        },
        data: {
            image: response?.secure_url
        }
    });

    return response;

}, {
    connection: redisConnection
});

uploadWorker.on("completed", async (job: Job, returnValue: any) => {

    const response = await axios.get(`${process.env.CLIENT_APP_URL}/api/revalidate`);
});