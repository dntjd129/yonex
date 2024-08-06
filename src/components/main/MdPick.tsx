import React from "react";
import MdPickSlide from "./MdPickSlide";
import "../../assets/scss/style.scss";

const MdPick = () => {
  return (
    <>
      <div className="section md_pick bg-grey">
        <div className="horizontal">
          <div className="section-title title">
            <div>
              <span>MD's Pick</span>
            </div>
          </div>
          <div className="divider"></div>
          {/* <MdPickSlide /> */}
        </div>
      </div>

      <div className="section md_pick">
        <div className="horizontal">
          <div className="section-title title">
            <div>
              <span>회원 전용 혜택</span>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <div className="section md_pick bg-grey">
        <div className="horizontal">
          <div className="section-title title">
            <div>
              <span>요넥스 소식</span>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <div className="section md_pick">
        <div className="horizontal">
          <div className="section-title title">
            <div>
              <span>SNS</span>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
};

export default MdPick;
