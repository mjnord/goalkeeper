import { getNode } from "@formkit/core";

export const isValid = (formId: string): boolean => {
  const node = getNode(formId);
  return Boolean(node?.context?.state.valid);
};

/**
 * A custom FormKit validation rule that ensures the input’s length equals a specified value.
 */
export const exactLength =(node: Node, requiredLength: string): boolean => {
  return node?.value?.length === parseInt(requiredLength);
};
