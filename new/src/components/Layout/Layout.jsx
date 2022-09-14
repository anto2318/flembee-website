import React from "react";
import Routers from "../../routes/Routers";

import { Header, Footer} from "../";

export function Layout () {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};
