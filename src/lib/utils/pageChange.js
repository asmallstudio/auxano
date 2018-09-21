/**
 * Removes focus from links on page navigation.
 */

const pageChange = () => {
  if (document.activeElement.nodeName === "A") {
    document.activeElement.blur();
    window.localStorage.setItem("showCover", false);
    console.log("change", window.localStorage.getItem("showCover"));
  }
};

export { pageChange };
