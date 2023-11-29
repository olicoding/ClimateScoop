const Redis = require("ioredis");
const logger = require("./winston");

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

async function getCachedData(key, fetchFunction) {
  try {
    const cachedData = await redis.get(key);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  } catch (redisError) {
    logger.error(`Redis get error for key ${key}: ${redisError.message}`);
  }

  try {
    const data = await fetchFunction();
    try {
      await redis.set(key, JSON.stringify(data), "EX", 86400);
    } catch (error) {
      logger.error(`Redis set error for key ${key}: ${error.message}`);
    }
    return data;
  } catch (fetchError) {
    logger.error(`API fetch error for key ${key}: ${fetchError.message}`);
    throw fetchError;
  }
}

module.exports = { redis, getCachedData };
