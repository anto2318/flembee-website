import { useState } from "react";
import { motion } from "framer-motion";

import { FaSearch } from "react-icons/fa";

import { SelectedPage } from "../../shared";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export function Searchbar({ setSelectedPage }: Props) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      id="home"
      className="w-full items-center justify-between"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
      <div className="flex mx-auto max-w-7xl px-16 md:px-12 items-center justify-between w-full gap-8">
        <form className="flex w-full text-sm">
          <div className="relative w-full">
            <button type="submit" className="absolute top-0 left-0 p-4 text-gray-500" aria-label="Search">
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="BUSCAR"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-10 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </form>
      </div>
    </motion.section>
  );
};
