import { RequestHandler } from "express";

export const helloWorld: RequestHandler = (req, res) => {
  res.send("Hello world!");
};
