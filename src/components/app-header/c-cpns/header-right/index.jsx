import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import React, { PureComponent } from "react";
import { RightWrapper } from "./style";

export default class HeaderRifht extends PureComponent {
  constructor() {
    super();
    this.state = {
      showPacel: false,
    };
  }
  componentDidMount() {
    window.addEventListener(
      "click",
      () => {
        this.windowHandeClick();
      },
      true
    );
  }
  componentWillUnmount() {
    window.removeEventListener(
      "click",
      () => {
        this.windowHandeClick();
      },
      true
    );
  }
  render() {
    return (
      <RightWrapper>
        <div className="item">登录</div>
        <div className="item">注册</div>
        <div className="item">
          <IconGlobal />
        </div>

        <div
          className="user"
          onClick={(e) => {
            this.handShowPacel();
          }}
        >
          <div className="div">
            <IconMenu />
          </div>
          <div className="div">
            <IconAvatar />
          </div>
          {this.state.showPacel}
          {/* {this.state.showPacel ? (
            <div className="pacel">
              <div className="pitem">注册</div>
              <div className="pitem">登录</div>
              <div className="lin"></div>
              <div className="pitem">出租房源</div>
              <div className="pitem">开展体验</div>
              <div className="pitem">帮助</div>
            </div>
          ) : (
            ""
          )} */}
          {this.state.showPacel && (
            <div className="pacel">
              <div className="pitem">注册</div>
              <div className="pitem">登录</div>
              <div className="lin"></div>
              <div className="pitem">出租房源</div>
              <div className="pitem">开展体验</div>
              <div className="pitem">帮助</div>
            </div>
          )}
        </div>
      </RightWrapper>
    );
  }
  handShowPacel() {
    console.log(this.state.showPacel);
    this.setState({
      showPacel: true,
    });
  }
  windowHandeClick() {
    this.setState({
      showPacel: false,
    });
  }
}
