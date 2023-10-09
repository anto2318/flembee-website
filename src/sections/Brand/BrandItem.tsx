import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  image: string;
  alt: string;
};

export function BrandItem({ image, alt }: Props) {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });

  const childVariant = {
    hidden: { opacity: 0.01, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.img
      src={image}
      alt={alt}
      className="w-30 transform cursor-pointer rounded-lg border border-primary-two/20 bg-white px-5 py-3 shadow-md shadow-primary-two/5 duration-200 hover:scale-95 sm:w-36"
      variants={childVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    />
  );
};
