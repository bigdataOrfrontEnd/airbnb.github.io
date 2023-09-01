import React from "react";
import { Outlet } from "react-router-dom";
import { ContentWrapper } from "./style";
export default function Content() {
  return (
    <ContentWrapper>
      <Outlet />
    </ContentWrapper>
  );
}
