import moment from "moment";

import constants from "../constants.json";

const getFullPageTitle = title => `${title} | ${constants.siteMeta.title}`;

const formatDateStringToFromNow = dateString => {
  const momentDate = moment(dateString);
  return momentDate.fromNow();
};

export { getFullPageTitle, formatDateStringToFromNow };
