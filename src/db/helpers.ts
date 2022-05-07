import { fs, path } from "@tauri-apps/api";
import { Node } from "./types/node";

const dbName = `goalkeeper${path.sep}db.json`;
interface Db {
  nodes: Node[];
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
    return readDatabase().then((res) => JSON.parse(res));
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
