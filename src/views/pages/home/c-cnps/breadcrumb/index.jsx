import React from "react";
import { Breadcrumb } from "antd";
export default function Breadcrum(props) {
  const { breadcrumb } = props;

  return (
    <div>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: breadcrumb,
          },
        ]}
      />
    </div>
  );
}
