import React from "react";
import Breadcrum from "../breadcrumb/index";
import { HeaderWarpper } from "./style";
export default function Header(props) {
  return (
    <HeaderWarpper>
      <div>
        <Breadcrum breadcrumb={props.breadcrumb} />
      </div>
      <div>login</div>
    </HeaderWarpper>
  );
}
