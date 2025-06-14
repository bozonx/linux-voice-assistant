export const useHelpers = () => {
  const globalResetFocus = () => {
    const activeElement = document.activeElement as any;
    if (activeElement?.blur && typeof activeElement.blur === "function") {
      activeElement.blur();
    }
  };

  return {
    globalResetFocus,
  };
};
