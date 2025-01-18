// const Redis = require("ioredis");
// const logger = require("./winston");

// const redis = new Redis({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASSWORD,
// });

// async function getCachedData(
//   key,
//   fetchFunction,
//   expiry = 86400,
//   schema = null,
//   processor = null,
//   preValidationProcess = null
// ) {
//   try {
//     const cachedData = await redis.get(key);
//     if (cachedData) {
//       logger.debug(`Redis get successful for key ${key}`);
//       return JSON.parse(cachedData);
//     }
//   } catch (redisError) {
//     logger.error(`Redis get error for key ${key}: ${redisError.message}`);
//   }

//   try {
//     let data = await fetchFunction();

//     if (preValidationProcess && typeof preValidationProcess === "function") {
//       data = preValidationProcess(data);
//     }

//     if (schema) {
//       const validation = await schema.safeParse(data);
//       if (!validation.success) {
//         throw new Error(
//           `Validation failed for ${key}: ${JSON.stringify(validation.error)}`
//         );
//       }
//       data = validation.data;
//     }

//     if (processor && typeof processor === "function") {
//       data = await processor(data);
//     }

//     try {
//       await redis.set(key, JSON.stringify(data), "EX", expiry);
//     } catch (error) {
//       logger.error(`Redis set error for key ${key}: ${error.message}`);
//     }

//     return data;
//   } catch (fetchError) {
//     logger.error(`API fetch error for key ${key}: ${fetchError.message}`);
//     throw fetchError;
//   }
// }

// module.exports = { redis, getCachedData };
