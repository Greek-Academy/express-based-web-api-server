import express, { Router } from "express";
import { helloWorld } from "./handlers/helloWorld";
import { postUser } from "./handlers/postUser";
import { getUsers } from "./handlers/getUsers";
import { getUser } from "./handlers/getUser";

export const router = (): Router => {
  const router = express.Router();

  router.get("/", helloWorld);
  router.get("/users", getUsers);
  router.post("/users", postUser);
  router.get("/users/:userName", getUser);

  return router;
};
