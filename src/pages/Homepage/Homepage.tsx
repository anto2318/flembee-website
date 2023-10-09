import { useEffect, useState } from "react";

import { SelectedPage } from "../../shared/types";

import { FooterData } from "../../components/Footer/FooterData";

import { LandingNavbar, Footer } from "../../components";
import { About, Portfolio, Brand, Contacts, Faq, Features } from "../../sections";

export function Homepage() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  // const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsTopOfPage(window.scrollY === 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    //adding event listener
    window.addEventListener("scroll", handleScroll);
    //removing on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <LandingNavbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Brand setSelectedPage={setSelectedPage} />
      <Features setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Portfolio setSelectedPage={setSelectedPage} />
      <Faq setSelectedPage={setSelectedPage} />
      <Contacts setSelectedPage={setSelectedPage} />
      <Footer {...FooterData} />
    </div>
  );
};
