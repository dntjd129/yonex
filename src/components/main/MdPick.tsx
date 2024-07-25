import React from "react";
import MdPickSlide from "./MdPickSlide";
import "../../assets/scss/style.scss";

const MdPick = () => {
  return (
    <>
      <div className="section md_pick horizontal">
        <div className="section-title title">
          <span>MD's Pick</span>
        </div>
        <MdPickSlide />
      </div>
    </>
  );
};

export default MdPick;
