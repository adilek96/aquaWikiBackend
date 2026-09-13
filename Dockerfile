# aquaWikiBackend — Hono на Node + Prisma. Собирается tsc в dist/.

FROM node:22-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
COPY package.json package-lock.json* yarn.lock* ./
COPY prisma ./prisma
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

FROM node:22-alpine AS build
WORKDIR /app
RUN apk add --no-cache openssl
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV DATABASE_URL="postgresql://build:build@localhost:5432/build"
RUN npx prisma generate && npm run build

FROM node:22-alpine AS runner
WORKDIR /app
RUN apk add --no-cache openssl
ENV NODE_ENV=production PORT=3000
RUN addgroup -g 1001 -S nodejs && adduser -S api -u 1001

COPY --from=build --chown=api:nodejs /app/dist ./dist
COPY --from=build --chown=api:nodejs /app/node_modules ./node_modules
COPY --from=build --chown=api:nodejs /app/prisma ./prisma
COPY --from=build --chown=api:nodejs /app/package.json ./package.json

USER api
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(()=>process.exit(0)).catch(()=>process.exit(1))"

# tsc включает в сборку и корневой lib/, из-за чего общий корень
# смещается в корень проекта, а файлы ложатся в dist/src/, не в dist/.
CMD ["node", "dist/src/server.js"]
