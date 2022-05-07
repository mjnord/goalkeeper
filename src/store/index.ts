import { defineStore } from "pinia";

export interface AppState {}

export const useAppStore = defineStore("app-store", {
  state: (): AppState => ({}),
  actions: {
    addNode(server: string) {},
  },
});
