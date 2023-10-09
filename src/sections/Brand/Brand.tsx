import { motion } from "framer-motion";
import { ActionButton, BrandsType, SelectedPage } from "../../shared";
import { BrandItem } from "./";

import hero from "../../assets/images/hero.png";
import brand1 from "../../assets/images/brand/brand1.png";
import brand2 from "../../assets/images/brand/brand2.png";
import brand3 from "../../assets/images/brand/brand3.png";
import brand4 from "../../assets/images/brand/brand4.png";
import brand5 from "../../assets/images/brand/brand5.png";
import brand6 from "../../assets/images/brand/brand6.png";
import brand7 from "../../assets/images/brand/brand7.png";

import { useNavigate } from "react-router-dom";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const brandsList: Array<BrandsType> = [
  {
    image: { brand1 },
    alt: "Mercantil Seguros",
  },
  {
    image: { brand2 },
    alt: "Cashea",
  },
  {
    image: { brand3 },
    alt: "Polar",
  },
  {
    image: { brand4 },
    alt: "IESA",
  },
  {
    image: { brand5 },
    alt: "Cines Unidos",
  },
  {
    image: { brand6 },
    alt: "Rent a house",
  },
  {
    image: { brand7 },
    alt: "Payall",
  },
];

//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export function Brand({ setSelectedPage }: Props) {
  const navigate = useNavigate();

  return (
    <motion.section
      id="home"
      className="flex w-full items-center justify-between py-16 md:h-full"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
      <div className="mx-auto mt-32 flex max-w-7xl flex-wrap items-center justify-between px-8 md:mt-14 md:px-6">
        <div className="w-full md:basis-5/12">
          <h1 className="mb-2 text-4xl font-bold leading-snug text-slate-800 sm:text-[42px] lg:text-[40px] xl:text-[42px]">
              Tu socio de confianza en el desarrollo y crecimiento empresarial
            <span className="text-primary-two"> de tu negocio.</span>
          </h1>
          <p className="mb-8 max-w-[480px] text-base text-slate-500">
            Brindamos servicios de desarrollo de aplicaciones web y móviles a empresas globales. Contrata a los mejores desarrolladores, 
            a precios accesibles, en función de las necesidades de tu proyecto. Productos adaptados a tu negocio, con 100% de éxito 
            en la entrega del proyecto.
          </p>
          <div className="flex flex-wrap gap-4">
            <ActionButton setSelectedPage={setSelectedPage}>
              Contáctanos
            </ActionButton>
            <button
              onClick={() => navigate("/login")}
              className="border:primary-two/50 w-full min-w-[200px] rounded-md border  border-primary-two/20 px-8 py-2.5 text-center font-semibold text-primary-two shadow-primary-two/50 duration-200 hover:border-primary-two md:w-max"
            >
              Explorar
            </button>
          </div>

          {/* Brands */}
          {/* <motion.div
            className="mt-6 flex flex-wrap items-center justify-around gap-4 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
          >
            {brandsList.map((brand: BrandsType) => (
              <BrandItem
                key={brand.alt}
                image={Object.values(brand.image)[0]}
                alt={brand.alt}
              />
            ))}
          </motion.div> */}
        </div>
        {/* Image */}
        <div className="hidden items-center justify-end pb-10 md:flex md:w-6/12 md:pb-10">
          <div className="relative z-10 inline-block pt-2 lg:pt-0">
            <img src={hero} alt="hero section img" className="max-w-full" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
