import React from "react";
import MdPickSlide from "./MdPickSlide";
import "../../assets/scss/style.scss";

const MdPick = () => {
  return (
    <>
      <div className="section md_pick">
        <div className="horizontal">
          <div className="section-title title">
            <div>
              <span>MD's Pick</span>
            </div>
          </div>
          <div className="divider"></div>
          <MdPickSlide />
        </div>
      </div>
    </>
  );
};

export default MdPick;
