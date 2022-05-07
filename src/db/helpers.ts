import { fs, path } from "@tauri-apps/api";
import { Node } from "./types/node";

interface Db {
  nodes: Node[];
}

const getDbPath = async (): Promise<string> => {
  const appDir = await path.resolve("../database/db.json");
  return appDir;
};

export const getDb = async (): Promise<Db> => {
  const dbName = await getDbPath();
  try {
    await fs.readTextFile(dbName);
  } catch {
    await fs.writeFile({ path: dbName, contents: '{ "nodes": [] }' });
  }
  return fs.readTextFile(dbName).then((res) => JSON.parse(res));
};

export const setDb = async (db: unknown) => {
  const dbName = await getDbPath();
  return fs.writeFile({
    path: dbName,
    contents: JSON.stringify(db),
  });
};
