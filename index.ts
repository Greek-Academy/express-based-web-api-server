import env from "@constants/env";
import { initializeUserIndex } from "@repository/userIndex";
import { router } from "@restapi";
import { userIndex } from "@restapi/handlers/postUser";
import bodyParser from "body-parser";
import express from "express";

const main = async () => {
  await initializeUserIndex();

  expressjs();
};

const expressjs = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(router());

  app.listen(env.PORT);
};

main();
