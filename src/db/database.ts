import { getDb, setDb, clearDb } from "./helpers";
import { GoalkeeperNode } from "./types/node";

export const db = {
  async getNodes(): Promise<GoalkeeperNode[]> {
    const db = await getDb();
    return db.nodes;
  },
  async setNode(node: GoalkeeperNode) {
    const db = await getDb();
    db.nodes.push(node);
    return setDb(db);
  },
  async clearNodes() : Promise<GoalkeeperNode[]> {
    const db = await getDb();
    clearDb();
    return db.nodes;
  },
};
