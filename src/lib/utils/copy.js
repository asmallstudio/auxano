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
 * Sanitize input string
 * @param {string} string Input
 * @returns {string} Sanitized string
 */
const sanitizeString = string => {
  return string
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

/**
 * Create slug from title and date
 * @returns {string} URL safe slug
 */
const createSlugFromTitleAndDate = data => {
  const { title, date } = data;

  function formatDate(momentDate) {
    return momentDate.format("YYYY-MM-DD");
  }

  const momentDate = createMomentObjectFromLLLDateString(date);
  const formattedDate = formatDate(momentDate);
  const sanitizedTitle = sanitizeString(title);

  return `${formattedDate}-${sanitizedTitle}`;
};

/**
 * Create slug from title
 * @param {object} data File data
 * @returns {string} Created Slug
 */
const createSlugFromTitle = data => {
  return sanitizeString(data.title);
};

export {
  getFullPageTitle,
  formatDateStringToFromNow,
  createSlugFromTitleAndDate,
  createSlugFromTitle
};
