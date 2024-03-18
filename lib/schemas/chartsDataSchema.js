const { z } = require("zod");

const ArcticDataSchema = z.object({
  arcticData: z.array(
    z.object({
      year: z.number(),
      extent: z.number(),
    })
  ),
});

const GlobalDataSchema = z.object({
  result: z.array(
    z.object({
      time: z.string(),
      station: z.string().transform((s) => parseFloat(s)),
    })
  ),
});

const OceanDataSchema = z.object({
  result: z.record(z.string(), z.string()),
});

module.exports = {
  ArcticDataSchema,
  GlobalDataSchema,
  OceanDataSchema,
};
