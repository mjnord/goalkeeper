import { getNode } from "@formkit/core";
import { FormKitValidationRule } from "@formkit/validation";

export const isValid = (formId: string): boolean => {
  const node = getNode(formId);
  return Boolean(node?.context?.state.valid);
};

/**
 * A custom FormKit validation rule that ensures the input’s length equals a specified value.
 */
export const exactLength: FormKitValidationRule = (
  node,
  requiredLength?: string
): boolean => {
  if (!requiredLength) {
    throw new Error(
      "Supplying an argument for exactLength validation rule is required."
    );
  }
  if (typeof node.value !== "string") {
    return false;
  }
  return node.value.length === parseInt(requiredLength);
};
