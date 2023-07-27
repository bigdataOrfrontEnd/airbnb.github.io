import React from "react";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRifht from "./c-cpns/header-right";

import styled from "styled-components";
function AppHeader() {
  // 样式
  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #eee;
  `;
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRifht />
    </HeaderWrapper>
  );
}

export default AppHeader;
