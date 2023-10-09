import { useState } from "react";
import { motion } from "framer-motion";

import { FaqType, SelectedPage } from "../../shared";
import { FaqItem } from "./";

import faqImage from "../../assets/images/faq.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const faqList: Array<FaqType> = [
  {
    "title": "¿Cuáles son los beneficios de usar Flembee?",
    "description":
      "Las soluciones de Flembee ofrecen múltiples beneficios, entre ellos la rentabilidad, escalabilidad, facilidad de uso y accesibilidad. También proporcionamos actualizaciones y mantenimiento automático del software, así que no tienes que preocuparte por gestionar el software por tu cuenta."
  },
  {
    "title": "¿Qué tan segura está mi información con las soluciones de Flembee?",
    "description":
      "Flembee utiliza diversas medidas de seguridad para proteger tus datos, incluyendo cifrado, cortafuegos y copias de seguridad regulares. Sin embargo, es esencial seguir las mejores prácticas, como contraseñas robustas y controles de acceso, para garantizar la seguridad de tus datos."
  },
  {
    "title": "¿Cómo evalúo el éxito con Flembee?",
    "description":
      "Para evaluar el éxito, es recomendable monitorear métricas como la adopción de usuarios, el ROI y la satisfacción del usuario. También puedes recopilar retroalimentación de tu equipo para ver si el software satisface sus necesidades y mejora su productividad."
  },
  {
    "title": "¿Qué tipo de soporte al cliente puedo esperar?",
    "description":
      "Flembee ofrece soporte al cliente a través de correo electrónico, teléfono o chat en vivo. Además, brindamos recursos de apoyo como bases de conocimiento y comunidades de usuarios."
  }
]

//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export function Faq({ setSelectedPage }: Props) {

  const [selected, setSelected] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section className="py-16" id="faq">
      <motion.div className="mx-auto max-w-7xl px-8 md:px-6">
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
          <span className="font-medium text-primary-two">FAQ</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Preguntas frecuentes
          </h1>
        </motion.div>
        <div className="md:flex md:justify-between md:gap-6">
          <div className="mb-8 flex justify-center md:mb-0 md:w-5/12">
            <img
              src={faqImage}
              alt="faq"
              className="max-h-[500px] md:min-h-[500px] md:object-cover"
            />
          </div>
          <div className="md:w-6/12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={container}
              onViewportEnter={() => setSelectedPage(SelectedPage.FAQ)}
            >
              {faqList.map((item, index) => (
                <FaqItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  index={index}
                  isSelected={index === selected}
                  handleItemClick={handleItemClick}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
