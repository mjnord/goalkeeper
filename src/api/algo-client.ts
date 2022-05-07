import { http } from "@tauri-apps/api";
import { Algodv2, BaseHTTPClient, BaseHTTPClientResponse } from "algosdk";
import { Query } from "algosdk/dist/types/src/client/baseHTTPClient";

const token = "Your algod API token";
const server = "http://127.0.0.1";
const port = 8080;

const composeUrl = (path: string, query?: Query<unknown>) => {
  const url = new URL(server);
};

const baseHttpClient: BaseHTTPClient = {
  async delete(path, data, query, headers): Promise<BaseHTTPClientResponse> {
    const res = await http.fetch();
    return;
  },
  get(): Promise<BaseHTTPClientResponse> {
    return;
  },
  post(): Promise<BaseHTTPClientResponse> {
    return;
  },
};

export const algoClient = new Algodv2(baseHttpClient, server, port);
