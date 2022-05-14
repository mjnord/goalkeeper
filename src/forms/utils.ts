import { getNode } from "@formkit/core";

export const isValid = (formId: string): boolean => {
  const node = getNode(formId);
  return Boolean(node?.context?.state.valid);
};
