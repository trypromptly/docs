---
id: development
title: Development
---

To start LLMStack in development mode, clone the github repo and run the following commands to build client and server:

```bash
git clone https://github.com/trypromptly/LLMStack.git
cd LLMStack/client
npm install
npm run build
cd ..
docker compose -f docker/docker-compose.dev.yml --env-file docker/.env.dev up
```

The client will be available at [http://localhost:3000](http://localhost:3000) and the server will be available at [http://localhost:9000](http://localhost:9000).

> You can skip running `npm install` and `npm run build` if you have already built the client before

For frontend development, you can use `REACT_APP_API_SERVER=localhost:3000 npm run start` to start the development server in client directory. You can also use `npm run build` to build the frontend and serve it from the backend server.

## Docker builds

To build the docker image for API server, run the following command from the root of the repo:

```bash
make api
```

This will build the client and then the api server docker image. Once the client is build, if you want to make changes to the api server only, you can run the following command:

```bash
make api-image
```

To build the docker image for the client app, run the following command:

```bash
make app
```
