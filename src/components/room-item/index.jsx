import PropTypes from "prop-types";
import React, { memo } from "react";
import { Rate } from "antd";
import { RoomWrapper } from "./style";

const Room = memo((props) => {
  const { roomData } = props;
  return (
    <RoomWrapper color={roomData.verify_info.text_color}>
      <div className="item" key={roomData.id}>
        <div className="ImageDiv">
          <img src={roomData.picture_url} alt="" />
        </div>

        <div
          className="desc"
          style={{ color: roomData.verify_info.text_color }}
        >
          {roomData.verify_info.messages.join("*")}
        </div>
        <h2 className="name">{roomData.name}</h2>
        <div className="price">{roomData.price_format}/晚</div>
        <div className="bootom">
          <Rate
            allowHalf
            defaultValue={roomData.star_rating}
            style={{ color: roomData.star_rating_color }}
          />
          {roomData.reviews_count}*{roomData?.bottom_info?.content}
        </div>
      </div>
    </RoomWrapper>
  );
});

Room.propTypes = {
  item: PropTypes.object,
};

export default Room;
