FROM node:18-alpine
WORKDIR /microservices-app/post
COPY package.json .

ARG NODE_ENV

# RUN npm run build

RUN if [ "$NODE_ENV" = "development" ]; then \
        npm install; \
    else \
        npm install --only=production; \
    fi

COPY . ./
ENV PORT 5000
EXPOSE $PORT

# CMD ["npm", "run", "apollo"]
CMD ["node", "index.js"]



