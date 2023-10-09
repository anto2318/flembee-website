import { motion } from "framer-motion";
import { FaRegLightbulb, FaPen, FaCode, FaRocket } from "react-icons/fa";

import { ActionButton, SelectedPage } from "../../shared";

import agileImg from "../../assets/images/agile.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export function About({ setSelectedPage }: Props) {

  return (
    <section className="py-16" id="about">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="md:flex md:justify-between md:gap-6">
          {/* about img */}
          <div className="order-2 mt-8 mb-5 flex justify-center md:mt-0 md:w-5/12">
            <img
              src={agileImg}
              alt="about us"
              className="max-h-[500px] md:max-h-max"
            />
          </div>

          <div className="order-1 md:w-6/12">
            {/* heading text */}
            <motion.div
              className="mb-5 sm:mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="font-medium text-primary-two">Nuestro proceso de desarrollo de software</span>
              <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
                Filosofía de las 4 D
              </h1>
            </motion.div>
            <p className="mb-6 text-slate-500">
              Nuestros servicios de vanguardia ofrecen un conjunto valioso que permite a las 
              empresas prosperar, manteniéndose a la vez flexibles y adaptables para satisfacer 
              las necesidades en constante evolución.
            </p>
            <ul>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-primary-two text-white">
                  <FaRegLightbulb />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  <b>Descubrir:</b> Los clientes son nuestros socios. Exploramos en profundidad sus requisitos y aplicamos la mejor estrategia para hacer realidad su proyecto.
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-primary-two text-white">
                  <FaPen />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  <b>Diseñar:</b> Nos enfocamos en el diseño. Nuestro objetivo es crear algo único que sea fácil para nuestros clientes.
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <motion.div
                  className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-primary-two text-white"
                  onViewportEnter={() => setSelectedPage(SelectedPage.About)}
                >
                  <FaCode />
                </motion.div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  <b>Desarrollar:</b> Desarrollamos con las mejores tecnologías. Construimos con eficiencia y habilidad, creando soluciones 
                  flexibles y escalables, orientadas al negocio.
                </p>
              </li>
              <li className="mb-8 flex items-center">
                <motion.div
                  className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-primary-two text-white"
                  onViewportEnter={() => setSelectedPage(SelectedPage.About)}
                >
                  <FaRocket />
                </motion.div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  <b>Desplegar:</b> Utilizamos metodologías ágiles. Nuestro enfoque iterativo nos permite organizar mejor nuestro 
                  trabajo y siempre buscamos mejorar lo que hacemos.
                </p>
              </li>
            </ul>
            <div className="flex w-full min-w-full">
              <ActionButton setSelectedPage={setSelectedPage}>
                Contáctanos
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
