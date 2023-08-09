import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { Rate } from "antd";
import { RoomWrapper } from "./style";

const Room = memo((props) => {
  const { roomData } = props;
  const [rat, setRat] = useState();
  function getRatData(e) {
    setRat(e);
  }
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
            defaultValue={roomData.star_rating}
            style={{ color: roomData.star_rating_color }}
            value={rat}
            onHoverChange={(e) => getRatData(e)}
          />
          <span>{roomData.reviews_count}</span>
          <span
            style={{
              color: roomData?.bottom_info?.content_color,
              fontSize: roomData?.bottom_info?.font_size,
            }}
          >
            {roomData?.bottom_info?.content &&
              "*" + roomData.bottom_info.content}
          </span>
        </div>
      </div>
    </RoomWrapper>
  );
});

Room.propTypes = {
  item: PropTypes.object,
};

export default Room;
