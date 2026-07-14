import { z } from 'zod';
declare const envSchema: z.ZodObject<{
    PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    CORS_ORIGIN: z.ZodDefault<z.ZodString>;
    DATABASE_URL: z.ZodString;
    DIRECT_URL: z.ZodString;
    SUPABASE_URL: z.ZodString;
    SUPABASE_SERVICE_ROLE_KEY: z.ZodString;
    SUPABASE_JWT_SECRET: z.ZodString;
    STRIPE_SECRET_KEY: z.ZodString;
    STRIPE_WEBHOOK_SECRET: z.ZodString;
    MERCADO_PAGO_ACCESS_TOKEN: z.ZodString;
    OPENAI_API_KEY: z.ZodString;
    ANTHROPIC_API_KEY: z.ZodString;
    GEMINI_API_KEY: z.ZodString;
}, z.core.$strip>;
export type Env = z.infer<typeof envSchema>;
export declare function validateEnv(config: Record<string, unknown>): Env;
export {};
