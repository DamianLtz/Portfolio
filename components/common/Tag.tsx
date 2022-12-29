import { TYear } from "../../utils/types";

const Tag = ({ year }: TYear) => {
  return (
    <p className="text-light tag px-2 py-1 rounded mx-4 cursor-default">
      {year}
      <span className="BorderTopBottom"></span>
      <span className="BorderLeftRight"></span>
    </p>
  );
};

export default Tag;
