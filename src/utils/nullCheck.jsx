import { MdOutlineQuestionMark as Question } from "react-icons/md";

const nullCheck = (value, color) => {
  return value || <Question style={{ color: color || "#535bf2" }} />;
};

export default nullCheck;
