import { Hono } from 'hono';
import { swaggerUI } from '@hono/swagger-ui';
import { openApiConfig } from '../swagger.js';
const router = new Hono();
// Swagger UI
router.get('/docs', swaggerUI({ url: '/api-docs' }));
// OpenAPI спецификация в JSON формате
router.get('/api-docs', (c) => {
    return c.json(openApiConfig);
});
export default router;
