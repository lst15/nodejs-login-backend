import 'dotenv/config';
import {z} from "zod";

const envZodSchema = z.object({
    PORT: z.number().min(1).max(65535),
    NODE_ENV: z.enum(["dev","test","production"]).default('dev'),
    DATABASE_URL: z.string().regex(/^mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)$/),    
});

const _env = envZodSchema.safeParse(process.env);

if(_env.success === false) {
    console.error("invalid environment param", );
    throw new Error("Invalid environment param");
}

export const env = _env.data;