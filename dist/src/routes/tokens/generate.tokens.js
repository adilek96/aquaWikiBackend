// Генерация новых токенов
import { Hono } from 'hono';
import { generateTokens } from '../../config/tokens.js';
const router = new Hono();
router.post('/tokens/generate', async (c) => {
    try {
        const { adminToken, readToken } = await generateTokens();
        return c.json({
            statusCode: 200,
            statusMessage: 'Tokens generated successfully',
            tokens: {
                adminToken,
                readToken
            },
            instructions: {
                adminToken: 'Используйте для создания, обновления и удаления контента',
                readToken: 'Используйте для чтения контента',
                nextSteps: [
                    'Скопируйте токены в переменные окружения',
                    'ADMIN_TOKEN=ваш_админский_токен',
                    'READ_TOKEN=ваш_токен_чтения',
                    'Перезапустите сервер'
                ]
            }
        });
    }
    catch (error) {
        console.error('Token generation error:', error);
        return c.json({
            statusCode: 500,
            statusMessage: 'Server Error',
            error: error instanceof Error ? error.message : String(error)
        }, 500);
    }
});
export default router;
