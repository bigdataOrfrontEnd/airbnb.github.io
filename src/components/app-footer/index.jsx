import React from "react";
import { FooterWrapper } from "./style";
import Content from "./content";
import data from "@/assets/data/footer.json";
export default function Footer() {
  console.log(data);
  return (
    <FooterWrapper>
      <div className="ceter">
        {data.map((item, index) => {
          return <Content item={item} key={index} />;
        })}
      </div>
    </FooterWrapper>
  );
}
