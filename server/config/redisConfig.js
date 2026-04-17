import { createClient } from "redis";

console.log(process.env.REDIS_URI);

const redisClient = createClient({
    url: process.env.REDIS_URI,
});

redisClient.on("connect", () => {
    console.log("redis client connecting");
})

// redisClient.on("error", (error) => {
//     console.log("error connecting with redis client", error);
// })

try {
    await redisClient.connect();
    console.log("connected with redis client");
} catch (err) {
    console.log("error connecting with redis client : ", err);
}

export default redisClient;