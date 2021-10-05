FROM node:14

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY . .

RUN /bin/bash -c "source ./scripts/setup-env.sh"

RUN npm install

EXPOSE 80 3306 9229

USER node

CMD ["npm", "start"]