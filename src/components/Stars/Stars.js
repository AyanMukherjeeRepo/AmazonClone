import React from "react";
import style from "../../components/Stars/Stars.module.css";
import ReactStars from "react-rating-stars-component";
function Stars({ count }) {
  return (
    <div>
      <ReactStars
        count={5}
        size={24}
        activeColor="#ffa41c"
        value={Number(count)}
        edit={false}
        isHalf={true}
      />
    </div>
  );
}

export default Stars;
