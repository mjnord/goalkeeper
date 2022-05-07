import { http } from "@tauri-apps/api";
import { Body } from "@tauri-apps/api/http";
import { Algodv2, BaseHTTPClient, BaseHTTPClientResponse } from "algosdk";
import { Query } from "algosdk/dist/types/src/client/baseHTTPClient";

export const createAlgoClient = (serverUrl: string, token: string) => {
  const composeUrl = (path: string, query?: Query<unknown>): string => {
    const urlString = `${serverUrl}${path}`;
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
    delete(path, data, query, headers): Promise<BaseHTTPClientResponse> {
      const url = composeUrl(path, query);
      return httpAlgoToTauri(url, "DELETE", headers, data);
    },
    get(path, query, headers): Promise<BaseHTTPClientResponse> {
      const url = composeUrl(path, query);
      return httpAlgoToTauri(url, "GET", headers);
    },
    post(path, data, query, headers): Promise<BaseHTTPClientResponse> {
      const url = composeUrl(path, query);
      return httpAlgoToTauri(url, "POST", headers, data);
    },
  };

  return new Algodv2(baseHttpClient, serverUrl);
};
