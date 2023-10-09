import { motion } from "framer-motion";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  index: number;
  isSelected: boolean;
  handleItemClick: (index: number) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function FaqItem({
    index,
    title,
    description,
    isSelected,
    handleItemClick 
}: Props) {

  return (
    <motion.div variants={childVariant}>
      <div className="mb-5 transition duration-500 sm:mb-10">
        <button
          type="button"
          className="w-full rounded-lg bg-primary-two/40 px-8 py-6 text-left"
          onClick={() => handleItemClick(index)}
        >
          <div className="flex items-center justify-between ">
            <h4 className="font-medium text-dark-100">{title}</h4>
            {isSelected ? (
              <FaRegArrowAltCircleUp className="w-8 text-lg text-primary-two" />
            ) : (
              <FaRegArrowAltCircleDown className="w-8 text-lg text-primary-two" />
            )}
          </div>
        </button>
        <div
          className={`max-h-0 overflow-hidden rounded-b-lg bg-primary-two/20 ${
            isSelected ? "max-h-max" : ""
          }`}
        >
          <div className="p-6">
            <p className="text-slate-500">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
