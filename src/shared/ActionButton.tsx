import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export function ActionButton({ children, setSelectedPage }: Props) {

  return (
    <AnchorLink
      offset="100"
      className="w-full gap-4 rounded-md bg-primary-two px-8 py-2.5 text-center font-semibold text-white shadow-md shadow-primary-two/20 duration-200 hover:bg-primary-two md:w-max"
      onClick={() => setSelectedPage(SelectedPage.Contacts)}
      href={`#${SelectedPage.Contacts}`}
    >
      {children}
    </AnchorLink>
  );
};
