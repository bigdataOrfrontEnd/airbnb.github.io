import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomWrapper } from "./style";

const Room = memo((props) => {
  const { item } = props;
  return (
    <RoomWrapper>
      <div className="item" key={item.id}>
        <img className="ImageDiv" src={item.picture_url} alt="" />

        <div>
          {item.verify_info.messages.map((item2) => (
            <span key={item2}>{item2}</span>
          ))}
        </div>
        <h2>{item.name}</h2>
        <div>{item.price_format}/晚</div>
        <div>
          {item.reviews_count}*{item?.bottom_info?.content}
        </div>
      </div>
    </RoomWrapper>
  );
});

Room.propTypes = {};

export default Room;
