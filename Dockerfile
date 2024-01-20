FROM node:18-alpine3.16 AS base

ENV  DIR /server

WORKDIR $DIR

FROM base AS dev



ENV NODE_ENV=development

COPY package*.json $DIR/

RUN npm install

COPY tsconfig*.json $DIR/

COPY src $DIR/src

EXPOSE $PORT

USER $USER

CMD ["npm", "run", "start:dev" ]


FROM base AS build

RUN apk update && apk add --no-cache dumb-init

COPY package*.json $DIR/

RUN npm ci

COPY tsconfig*.json $DIR/

COPY src $DIR/src

RUN npm run build && \
    npm prune --omit=dev

FROM base AS production

ENV USER node

COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init

COPY --from=build $DIR/node_modules $DIR/node_modules

COPY  --chown=node:node --from=build $DIR/dist $DIR/dist

ENV NODE_ENV=production

EXPOSE $PORT

USER $USER

CMD ["dumb-init", "node", "dist/main.js" ]

