import { ToastMessageOptions } from "primevue/toast";
import { useToast as pUseToast } from "primevue/usetoast";

export type Severity = "success" | "error" | "warn" | "info";
export type UseToastOptions = Omit<ToastMessageOptions, "severity" | "summary">;

export const useToast = (options?: UseToastOptions) => {
  const toast = pUseToast();
  return (msg: string, severity: Severity = "success") => {
    toast.add({
      severity,
      summary: msg,
      life: 3000,
      ...options,
    });
  };
};
