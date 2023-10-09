import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export function CustomLink({
  page,
  selectedPage,
  setSelectedPage,
}: Props) {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      offset="100"
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-two" : ""
      } transition duration-500 hover:text-primary-two`}
    >
      {page}
    </AnchorLink>
  );
};
