FROM node:18-alpine

LABEL maintainer="Erwin Lejeune <erwin.lejeune15@gmail.com>"

WORKDIR /app

COPY package.json /.
COPY docker/entrypoint.sh /.
COPY tsconfig.json /.
COPY tsconfig.node.json /.
COPY vite.config.ts /.

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "dev", "--host"]