import { FormKitNode } from "@formkit/core";
import { FormKitValidationRule } from "@formkit/validation";

/**
 * A custom FormKit validation rule that ensures the input’s length equals a specified value.
 */
export const exactLength = (
  node: FormKitNode,
  requiredLength: string
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

export const customRules: Record<string, FormKitValidationRule> = {
  exactLength,
};
