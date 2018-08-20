/**
 * Removes focus from links on page navigation.
 */

const pageChange = () => {
  if (document.activeElement.nodeName === "A") {
    document.activeElement.blur();
  }
};

export { pageChange };
