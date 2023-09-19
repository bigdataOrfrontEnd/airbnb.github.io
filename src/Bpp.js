import React from "react";

import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
export function Bpp() {
  return (
    <div>
      <ResponsiveReactGridLayout></ResponsiveReactGridLayout>
    </div>
  );
}
