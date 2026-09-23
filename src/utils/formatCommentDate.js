import moment from "moment";
import "moment/locale/uk";

export const formatCommentDate = (date) => {
  const parsedDate = moment(date);

  return parsedDate.isValid()
    ? parsedDate.locale("uk").format("D MMMM YYYY, HH:mm")
    : "Date is not available";
};
