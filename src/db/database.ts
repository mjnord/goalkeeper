import { getDb, setDb } from "./helpers";
import { Node } from "./types/node";

export const db = {
  async getNodes(): Promise<Node[]> {
    const db = await getDb();
    return db.nodes;
  },
  async setNode(node: Node) {
    const db = await getDb();
    db.nodes.push(node);
    return setDb(db);
  },
};
