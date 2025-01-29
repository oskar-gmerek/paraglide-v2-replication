FROM oven/bun:1.2.1-alpine AS builder

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run prepare
RUN bun run build

FROM oven/bun:1.2.1-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY package.json bun.lock ./
RUN bun install --production --frozen-lockfile
ENV NODE_ENV=production
ENV PORT=3001
EXPOSE ${PORT}

CMD ["bun", "./build/index.js"]