import { motion } from "framer-motion";

import { ActionButton, SelectedPage, ProviderServiceType } from "../../shared";

import { BenefitsSlider } from "../../components";

import icon1 from "../../assets/images/features/icon1.png";
import icon2 from "../../assets/images/features/icon2.png";
import icon3 from "../../assets/images/features/icon3.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const featuresList: Array<ProviderServiceType> = [
  {
    image: { icon1 },
    title: "Web Design",
    action: "Learn more",
  },
  {
    image: { icon2 },
    title: "Automation",
    action: "Learn more",
  },
  {
    image: { icon3 },
    title: "Infographics",
    action: "Learn more",
  },
  {
    image: { icon1 },
    title: "Web Design",
    action: "Learn more",
  },
  {
    image: { icon2 },
    title: "Automation",
    action: "Learn more",
  },
  {
    image: { icon3 },
    title: "Infographics",
    action: "Learn more",
  },
  {
    image: { icon1 },
    title: "Web Design",
    action: "Learn more",
  },
  {
    image: { icon2 },
    title: "Automation",
    action: "Learn more",
  },
  {
    image: { icon3 },
    title: "Infographics",
    action: "Learn more",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export function Portfolio({ setSelectedPage }: Props) {

  return (
    <section className="py-16" id="services">
      <motion.div className="mx-auto max-w-7xl px-8 md:px-6">
        {/* heading text */}
        <motion.div
          className="mb-5 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="font-medium text-primary-two">Nuestros proyectos</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Conoce nuestros proyectos principales
          </h1>
          <p className="max-w-2 mx-auto mt-2 text-slate-500">
            Mejoramos continuamente pero nunca nos retrasamos.
          </p>
        </motion.div>
        {/* benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        >
          <BenefitsSlider 
            data={featuresList}
            setSelectedPage={setSelectedPage}
          />
        </motion.div>
      </motion.div>
      <div className="mt-16 flex flex-col items-center">
        <ActionButton setSelectedPage={setSelectedPage}>
          Más Proyectos
        </ActionButton>
      </div>
    </section>
  );
};
