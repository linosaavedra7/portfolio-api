"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = validateEnv;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.coerce.number().default(3001),
    NODE_ENV: zod_1.z.enum(['development', 'production', 'test']).default('development'),
    CORS_ORIGIN: zod_1.z.string().url().default('http://localhost:3000'),
    DATABASE_URL: zod_1.z.string().min(1),
    DIRECT_URL: zod_1.z.string().min(1),
    SUPABASE_URL: zod_1.z.string().url(),
    SUPABASE_SERVICE_ROLE_KEY: zod_1.z.string().min(1),
    SUPABASE_JWT_SECRET: zod_1.z.string().min(1),
    STRIPE_SECRET_KEY: zod_1.z.string().min(1),
    STRIPE_WEBHOOK_SECRET: zod_1.z.string().min(1),
    MERCADO_PAGO_ACCESS_TOKEN: zod_1.z.string().min(1),
    OPENAI_API_KEY: zod_1.z.string().min(1),
    ANTHROPIC_API_KEY: zod_1.z.string().min(1),
    GEMINI_API_KEY: zod_1.z.string().min(1),
});
function validateEnv(config) {
    const result = envSchema.safeParse(config);
    if (!result.success) {
        console.error('❌ Invalid environment variables:');
        console.error(JSON.stringify(result.error.flatten().fieldErrors, null, 2));
        throw new Error('Invalid environment variables. Check your .env file.');
    }
    return result.data;
}
//# sourceMappingURL=env.validation.js.map