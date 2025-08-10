# API Изображений - AquaWiki

Документация для эндпоинтов управления изображениями в AquaWiki API.

## Обзор

API изображений предоставляет функциональность для загрузки и удаления изображений в системе AquaWiki. Изображения хранятся в MinIO объектном хранилище и связаны с записями в базе данных.

## Базовый URL

```
https://aqua-wiki-backend.vercel.app/
```

## Аутентификация

Все эндпоинты требуют Bearer токен в заголовке `Authorization`:

```
Authorization: Bearer <your-token>
```

## Эндпоинты

### 1. Загрузка изображения

**POST** `/images`

Загружает изображение в MinIO хранилище и возвращает presigned URL для доступа к файлу.

#### Параметры запроса

- **Content-Type**: `multipart/form-data`
- **file** (обязательный): Файл изображения
  - Максимальный размер: 10MB
  - Поддерживаемые форматы: JPG, PNG, GIF, WebP

#### Пример запроса

```bash
curl -X POST "https://aqua-wiki-backend.vercel.app/images" \
  -H "Authorization: Bearer <your-token>" \
  -F "file=@image.jpg"
```

#### Пример ответа (200 OK)

```json
{
  "statusCode": 200,
  "imageUrl": "https://minio.example.com/bucket/1703123456789.jpg?signature=..."
}
```

#### Возможные ошибки

**400 Bad Request** - Файл слишком большой
```json
{
  "statusCode": 400,
  "statusMessage": "Размер файла не должен превышать 10MB",
  "error": "Размер файла не должен превышать 10MB"
}
```

**404 Not Found** - Файл не предоставлен
```json
{
  "statusCode": 404,
  "statusMessage": "File not found",
  "error": "File not found"
}
```

**500 Internal Server Error** - Ошибка сервера
```json
{
  "statusCode": 500,
  "statusMessage": "Server Error",
  "error": "Ошибка загрузки в MinIO: Connection failed"
}
```

### 2. Удаление изображения

**DELETE** `/images/{imageId}`

Удаляет изображение из MinIO хранилища и базы данных по ID.

#### Параметры пути

- **imageId** (обязательный): ID изображения в базе данных

#### Пример запроса

```bash
curl -X DELETE "https://aqua-wiki-backend.vercel.app/images/clx1234567890abcdef" \
  -H "Authorization: Bearer <your-token>"
```

#### Пример ответа (200 OK)

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Изображение успешно удалено"
}
```

#### Возможные ошибки

**404 Not Found** - Изображение не найдено
```json
{
  "success": false,
  "error": "Изображение не найдено в базе данных"
}
```

**500 Internal Server Error** - Ошибка сервера
```json
{
  "statusCode": 500,
  "statusMessage": "Server Error",
  "error": "Failed to delete file from MinIO"
}
```

## Особенности реализации

### MinIO Хранилище

- **Endpoint**: Настраивается через переменную окружения `MINIO_ENDPOINT`
- **Bucket**: `aquarium-images` (по умолчанию)
- **Presigned URLs**: Действуют 7 дней
- **SSL**: Настраивается через переменную окружения `MINIO_USE_SSL`

### Безопасность

- Проверка размера файла (максимум 10MB)
- Уникальные имена файлов с временными метками
- Аутентификация через Bearer токены
- Валидация типов файлов

### Обработка ошибок

- Детальные сообщения об ошибках
- Логирование всех операций
- Graceful handling ошибок MinIO
- Проверка существования записей в базе данных

## Примеры использования

### JavaScript/Node.js

```javascript
// Загрузка изображения
const formData = new FormData();
formData.append('file', fileInput.files[0]);

const response = await fetch('https://aqua-wiki-backend.vercel.app/images', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-token-here'
  },
  body: formData
});

const result = await response.json();
console.log('Image URL:', result.imageUrl);

// Удаление изображения
const deleteResponse = await fetch(`https://aqua-wiki-backend.vercel.app/images/${imageId}`, {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer your-token-here'
  }
});

const deleteResult = await deleteResponse.json();
console.log('Delete result:', deleteResult);
```

### Python

```python
import requests

# Загрузка изображения
with open('image.jpg', 'rb') as f:
    files = {'file': f}
    headers = {'Authorization': 'Bearer your-token-here'}
    
    response = requests.post(
        'https://aqua-wiki-backend.vercel.app/images',
        files=files,
        headers=headers
    )
    
    result = response.json()
    print('Image URL:', result['imageUrl'])

# Удаление изображения
delete_response = requests.delete(
    f'https://aqua-wiki-backend.vercel.app/images/{image_id}',
    headers={'Authorization': 'Bearer your-token-here'}
)

delete_result = delete_response.json()
print('Delete result:', delete_result)
```

## Переменные окружения

Для настройки MinIO используются следующие переменные окружения:

```env
MINIO_ENDPOINT=194.163.151.11
MINIO_PORT=9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_BUCKET_NAME=aquarium-images
MINIO_USE_SSL=false
```

## Примечания

1. **Presigned URLs**: Ссылки на изображения действительны 7 дней
2. **Размер файлов**: Максимальный размер загружаемого файла - 10MB
3. **Форматы**: Рекомендуются JPG, PNG, GIF, WebP
4. **Безопасность**: Все запросы должны содержать валидный Bearer токен
5. **Обработка ошибок**: API возвращает детальные сообщения об ошибках для отладки
