import { motion } from "framer-motion";

import { ActionButton, SelectedPage, FeaturesType } from "../../shared";

import { FeatureItem } from "./";

import features from "../../assets/images/features/features.png";
import icon1 from "../../assets/images/features/icon1.png";
import icon2 from "../../assets/images/features/icon2.png";
import icon3 from "../../assets/images/features/icon3.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const featuresList: Array<FeaturesType> = [
  {
    image: { icon1 },
    title: "Desarrollo Web",
    action: "Explorar",
  },
  {
    image: { icon2 },
    title: "Aplicaciones Móviles",
    action: "Explorar",
  },
  {
    image: { icon3 },
    title: "Consultoría Tecnológica",
    action: "Explorar",
  },
];

//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export function Features({ setSelectedPage }: Props) {

  return (
    <section className="pb-16" id="features">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        {/* heading text  */}
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
          <span className="font-medium text-primary-two">¿Por qué Flembee?</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Contrata los mejores servicios para tu proyecto
          </h1>
        </motion.div>
        {/* feature img  */}
        <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
          <div className="mb-5 max-h-[600px] overflow-hidden rounded-lg md:mb-0 md:w-5/12">
            <img
              src={features}
              alt="features img"
              className="object-fit"
              // h-full sm:w-full sm:object-cover
            />
          </div>
          {/* titles */}
          <div className="md:w-7/12">
            <div className="mb-16 flex flex-col">
              <p className="mb-3 text-slate-500">
                Flembee es una de las principales agencias de diseño web y empresa de desarrollo de software, 
                fundada en Caracas, Venezuela. Nuestro gran equipo de desarrolladores está comprometido y disponible 
                para proyectos que representan un gran desafío. Utilizamos las mejores tecnologías web de tendencia, 
                front-end como ReactJs, back-end como Node.js para desarrollar sitios web, aplicaciones web y soluciones 
                de comercio electrónico receptivos y personalizados.
              </p>
              <p className="mb-10 text-slate-500">
                También desarrollamos aplicaciones móviles nativas para Android e iOS y aplicaciones móviles multiplataforma con React Native.
              </p>
              <ActionButton setSelectedPage={setSelectedPage}>
                Más información
              </ActionButton>
            </div>
            {/* feature */}
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={container}
              onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
            >
              {featuresList.map((item: FeaturesType) => (
                <FeatureItem
                  key={item.title}
                  image={Object.values(item.image)[0]} // extract the image file path
                  title={item.title}
                  action={item.action}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
