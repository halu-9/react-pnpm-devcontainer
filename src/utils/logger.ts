export const logError = (error: unknown) => {
  if (import.meta.env.NODE_ENV !== "production") {
    console.log(error);
  }
};
