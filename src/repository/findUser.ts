import fs from "fs/promises";
import { User } from "@domain/user";
import { userIndex } from "@restapi/handlers/postUser";

export const findUser = async (userName: string): Promise<User> => {
  const filePath = userIndex[userName];

  const content = await fs.readFile(filePath, "utf-8");

  const user: User = JSON.parse(content);

  return user;
};
