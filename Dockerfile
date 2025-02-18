FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app ./
ENV NODE_ENV=production
EXPOSE 10091
CMD ["node", "dist/main"]
