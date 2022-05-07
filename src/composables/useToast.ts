import { useToast as pUseToast } from "primevue/usetoast";

export type Severity = "success" | "error" | "warn" | "info";

export const useToast = () => {
  const toast = pUseToast();
  return (msg: string, severity: Severity = "success") => {
    toast.add({
      severity,
      summary: msg,
      life: 3000,
    });
  };
};
