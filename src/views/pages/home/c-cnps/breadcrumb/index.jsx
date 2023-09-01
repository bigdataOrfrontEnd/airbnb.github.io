import React from "react";
import { Breadcrumb } from "antd";
import { BreadcurumbWarpper } from "./style";
export default function Breadcrum(props) {
  const { breadcrumb } = props;

  return (
    <BreadcurumbWarpper>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: breadcrumb,
          },
        ]}
      />
    </BreadcurumbWarpper>
  );
}
