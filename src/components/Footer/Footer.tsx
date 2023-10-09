import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

import logo from "../../assets/images/logo.png";

interface FooterColumn {
  heading: string;
  links: { title: string; href: string }[];
}

interface Props {
  columns: FooterColumn[];
  author: string;
  githubUrl: string;
}

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function Footer({ columns, author, githubUrl }: Props) {

  return (
    <footer className="bg-slate-50/80 pt-16">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        {/* footer top */}
        <div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <img
              src={logo}
              alt="footer"
              className="w-36 cursor-pointer"
              onClick={handleScrollToTop}
            />
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-slate-500">
                Streamline your business operations with Flembee - The all-in-one
                SaaS solution for project management, collaboration, and
                workflow automation.
              </p>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-6 whitespace-nowrap lg:grid-cols-8 lg:gap-48">
            {columns.map((column, index) => (
              <div key={index} className="row-gap-8">
                <p className="font-semibold text-primary-two">{column.heading}</p>
                <ul className="mt-2 space-y-2">
                  {column.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-500 transition-colors duration-300 hover:text-primary-two"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* End footer top */}

        <div>
          {/* footer bottom */}
          <div className="flex flex-col justify-between border-t py-8 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()}{" "}
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary-two hover:text-primary-two"
              >
                {author}
              </a>
            </p>
            {/* Social icons */}
            <div className="mt-4 flex items-center space-x-4 sm:mt-0">
              <a href="#">
                <FaFacebook className="text-2xl text-slate-500 duration-300 hover:text-primary-two" />
              </a>
              <a href="#">
                <FaYoutube className="text-2xl text-slate-500 duration-300 hover:text-primary-two" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl text-slate-500 duration-300 hover:text-primary-two" />
              </a>
            </div>
          </div>
          {/* End footer bottom */}
        </div>
      </div>
    </footer>
  );
};
