import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import React, { PureComponent } from "react";
import { RightWrapper } from "./style";

export default class HeaderRifht extends PureComponent {
  render() {
    return (
      <RightWrapper>
        <div className="item">登录</div>
        <div className="item">注册</div>
        <div className="global">
          <IconGlobal />
        </div>

        <div className="user">
          <div>
            <IconMenu />
          </div>
          <div>
            <IconAvatar />
          </div>
        </div>
      </RightWrapper>
    );
  }
}
