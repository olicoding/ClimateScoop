const { z } = require("zod");

const ArcticDataSchema = z
  .object({
    arcticData: z.object({
      data: z.record(
        z.string(),
        z.object({
          value: z.union([z.string(), z.number()]),
        })
      ),
    }),
  })
  .transform((data) => ({
    arcticData: {
      data: data.arcticData.data,
    },
  }));

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
