export const messages = {
  en: {
    validation: {
      exactLength({ args }: { args: string }) {
        return `Value has to be of length ${args}.`;
      },
    },
  },
};
