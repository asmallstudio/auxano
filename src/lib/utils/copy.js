import moment from "moment";

import constants from "../constants.json";

/**
 * Convert date string to moment object
 * @param {string} LLLDateString Date string in LLL format
 * @return {object} Moment object
 */
const createMomentObjectFromLLLDateString = LLLDateString =>
  moment(LLLDateString, "LLL");

/**
 * Create complete page title
 * @param {string} title Page title
 * @returns Full page title
 */
const getFullPageTitle = title => `${title} | ${constants.siteMeta.title}`;

/**
 * Create from now copy from date string
 * @param {string} LLLDateString Date string in LLL format
 * @returns {string} From now string
 */
const formatDateStringToFromNow = LLLDateString => {
  const momentDate = createMomentObjectFromLLLDateString(LLLDateString);
  return momentDate.fromNow();
};

/**
 * Create slug from title and date
 * @param {string} title
 * @param {string} date Date string in LLL format
 * @returns {string} URL safe slug
 */
const createSlugFromTitleAndDate = data => {
  const { title, date } = data;

  function sanitizeString(string) {
    return string
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  function formatDate(momentDate) {
    return momentDate.format("YYYY-MM-DD");
  }

  const momentDate = createMomentObjectFromLLLDateString(date);
  const formattedDate = formatDate(momentDate);
  const sanitizedTitle = sanitizeString(title);

  return `${formattedDate}-${sanitizedTitle}`;
};

export {
  getFullPageTitle,
  formatDateStringToFromNow,
  createSlugFromTitleAndDate
};
