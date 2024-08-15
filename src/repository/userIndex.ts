import fs from "fs/promises";
import env from "@constants/env";
import path from "path";
import { userIndex } from "@restapi/handlers/postUser";


export const initializeUserIndex = async () => {
  const dirPath = env.PERSISTENT_DATA_BASEDIR;

  try {
    const files = await fs.readdir(dirPath);

    for (const fileName of files) {
        const filePath = path.join(dirPath, fileName);
        const content = await fs.readFile(filePath, "utf-8");
        const user = JSON.parse(content);
        userIndex[user.name] = filePath;
    }
  } catch (error) {
    console.error("Failed to initialize user index:", error);
  }
};
