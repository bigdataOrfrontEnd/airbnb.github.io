import React from "react";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRifht from "./c-cpns/header-right";
import { HeaderWrapper } from "./style";
function AppHeader() {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRifht />
    </HeaderWrapper>
  );
}

export default AppHeader;
