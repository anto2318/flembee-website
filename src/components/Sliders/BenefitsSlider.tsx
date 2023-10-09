import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { SelectedPage, ProviderServiceType } from "../../shared";
import { BenefitCard } from "../";

import '@splidejs/react-splide/css';

type Props = {
  data: Array<ProviderServiceType>;
  setSelectedPage: (value: SelectedPage) => void;
};

export function BenefitsSlider({ data, setSelectedPage }: Props) {

  const navigate = useNavigate();
  
  return (
    <Splide options={{perPage: 3}}>
        {data.map((item: ProviderServiceType, index) => (
            <SplideSlide key={index}>
                <BenefitCard
                    key={item.title}
                    image={Object.values(item.image)[0]}
                    title={item.title}
                    action={item.action}
                    setSelectedPage={setSelectedPage}
                />
            </SplideSlide>
        ))}
    </Splide>
  );
};
