# Поиск автозапчастей

[Открыть приложение](https://favorit-tau.vercel.app/)

Поиск производителей по артикулу, выбор детали и просмотр её аналогов и предложений по складам через
API Favorit Parts.

Стек: React, Redux Toolkit / RTK Query, JavaScript, Bootstrap, Vite. Включён React Compiler.

## Локальный запуск

Нужен Node.js 22.12+.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

В `.env.example` указан публичный демо-ключ Favorit. Обе переменные окружения обязательны.Для
использования своего ключа измените значения в `.env.local`:

```dotenv
FAVORIT_API_BASE_URL=https://api.favorit-parts.ru/hs/hsprice/
FAVORIT_API_KEY=ваш_ключ
```

После изменения переменных перезапустите dev-сервер.

## Проверки и сборка

```bash
npm run lint
npm run build
npm run preview
```
