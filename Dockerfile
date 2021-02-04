# ---------- Base ----------
FROM node:15.8.0-alpine3.10 AS base
WORKDIR /app

# ---------- Builder ----------
FROM base AS builder
COPY package.json .babelrc ./
RUN npm install
COPY ./src ./src
RUN npm run build
RUN npm prune --production

# ---------- Release ----------
FROM base AS release
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
USER node
CMD ["node", "./dist/index.js"]