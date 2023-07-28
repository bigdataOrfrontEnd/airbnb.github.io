import IconSearchBar from "@/assets/svg/icon-search-bar";
import React, { Component } from "react";
import { CenterWrapper } from "./style";

export default class HeaderCenter extends Component {
  render() {
    return (
      <CenterWrapper>
        <div className="search-bar">
          <div className="text">搜索房源和体验</div>
          <span className="icon">
            <IconSearchBar />
          </span>
        </div>
      </CenterWrapper>
    );
  }
}
