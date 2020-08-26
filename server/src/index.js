import { config as configureDotEnv } from 'dotenv';
import express from 'express';
import path from 'path';
import createGraphServer from './graph/createGraphServer';
import createMongoConnection from './mongo/createMongoConnection';

configureDotEnv();

const app = express();
app.use(express.static(path.join(__dirname, '../../client/build')));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

const graphServer = createGraphServer();
graphServer.applyMiddleware({ app });

(async () => {
  try {
    await createMongoConnection();
    app.listen({ port: process.env.PORT || 5000 }, () => {
      console.log(
        `Feast-It Events Graph Server - Listening on ${
          process.env.PORT || 5000
        }`,
      );
    });
  } catch (e) {
    console.error(`Feast-It Events Graph Server - Failed to boot with ${e}`);
  }
})();
