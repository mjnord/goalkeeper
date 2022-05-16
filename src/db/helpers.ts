import { fs, path } from "@tauri-apps/api";
import { GoalkeeperNode } from "./types/node";

const dbName = `goalkeeper${path.sep}db.json`;

interface Db {
  nodes: GoalkeeperNode[];
}

const writeDatabase = (contents: string) =>
  fs.writeFile(
    {
      path: dbName,
      contents,
    },
    { dir: fs.BaseDirectory.Data }
  );

const readDatabase = () =>
  fs.readTextFile(dbName, {
    dir: fs.BaseDirectory.Data,
  });

export const getDb = async (): Promise<Db> => {
  try {
    const res = await readDatabase().then((res) => JSON.parse(res));
    return res;
  } catch {
    await fs.createDir("goalkeeper", {
      dir: fs.BaseDirectory.Data,
      recursive: true,
    });
    await writeDatabase('{ "nodes": [] }');
  }
  return getDb();
};

export const setDb = async (db: unknown) => {
  return writeDatabase(JSON.stringify(db));
};

export const clearDb = async () => {
  try {
    await writeDatabase('{ "nodes": [] }');
  } catch {
    throw new Error("Couldn't clear goalkeeper node database.");
  }
};
