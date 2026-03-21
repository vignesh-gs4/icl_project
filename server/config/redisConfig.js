import { createClient } from "redis";

const redisClient = createClient({
    url: process.env.REDIS_URI
});

redisClient.on("connect", () => {
    console.log("redis client connecting");
})

redisClient.on("error", () => {
    console.log("error connecting with redis client");
})

try {
    await redisClient.connect();
    console.log("connected with redis client");
} catch(err) {
    console.log("error connecting with redis client : ", err.message);
}

export default redisClient;