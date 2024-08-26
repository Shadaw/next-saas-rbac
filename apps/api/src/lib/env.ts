import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(1),
  PORT: z.string().min(1).transform(Number),
})

const env = envSchema.parse(process.env)

export default env
