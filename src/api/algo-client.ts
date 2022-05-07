import { http } from "@tauri-apps/api";
import { Body } from "@tauri-apps/api/http";
import { Algodv2, BaseHTTPClient, BaseHTTPClientResponse } from "algosdk";
import { Query } from "algosdk/dist/types/src/client/baseHTTPClient";

const token =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const server = "http://localhost:4001";
const port = 8080;

const composeUrl = (path: string, query?: Query<unknown>): string => {
  const urlString = `${server}${path}`;
  if (!query) {
    return urlString;
  }
  const url = new URL(urlString);
  for (const [key, val] of Object.entries(query)) {
    url.searchParams.append(key, val);
  }
  return url.toString();
};

const httpAlgoToTauri = async (
  url: string,
  method: http.HttpVerb,
  headers?: Record<string, string>,
  data?: Uint8Array
) => {
  const res = await http.fetch(url, {
    method,
    body: data && Body.bytes(data),
    headers: {
      ...headers,
      "X-Algo-API-Token": token,
    },
  });
  const stringifiedData = JSON.stringify(res.data);
  const baseRes: BaseHTTPClientResponse = {
    body: new TextEncoder().encode(stringifiedData),
    headers: res.headers,
    status: res.status,
  };
  return baseRes;
};

const baseHttpClient: BaseHTTPClient = {
  async delete(path, data, query, headers): Promise<BaseHTTPClientResponse> {
    const url = composeUrl(path, query);
    return httpAlgoToTauri(url, "DELETE", headers, data);
  },
  get(path, query, headers): Promise<BaseHTTPClientResponse> {
    const url = composeUrl(path, query);
    return httpAlgoToTauri(url, "GET", headers);
  },
  post(path, data, query, headers): Promise<BaseHTTPClientResponse> {
    const url = composeUrl(path, query);
    return httpAlgoToTauri(url, "GET", headers, data);
  },
};

export const algoClient = new Algodv2(baseHttpClient, server, port);
