import React from "react";
import "./styles.css";
import tagGray from "../../Assets/tag-gray.svg";

const Modal = ({ handleClose, show, title, modalType, mainButton }) => {
  const showHideClassName = show
    ? "modal modal_display-block"
    : "modal modal_display-none";

  let modal_main_style = "modal_main";
  if (modalType === 2) {
    modal_main_style = "modal_main modal_adjusted-dimensions";
  }

  return (
    <div className={showHideClassName}>
      <section className={modal_main_style}>
        <div className="modal_title">{title}</div>
        {modalType === 1 && (
          <div>
            <img
              alt="Tag"
              className="modal_tag-icon"
              src={tagGray}
              onClick={() => {
                this.showModal();
              }}
            />
            <input className="modal_tag-input" placeholder="Enter Tag"></input>
          </div>
        )}
        {modalType === 2 && (
          <div>
            <div className="modal_select-all-label modal_select-all-currently-in">
              Currently in:
            </div>
            <img
              alt="Tag"
              className="modal_tag-icon-select"
              src={tagGray}
              onClick={() => {
                this.showModal();
              }}
            />
            <select
              name="currently-in-select"
              className="modal_currently-in-select"
            >
              <option value="technology">Technology</option>
            </select>
            <div className="modal_select-all-label">Selected Videos:</div>
            <div className="modal_selected-tags">
              <img
                alt="Tag"
                className="modal_tag-icon-select"
                src={tagGray}
                onClick={() => {
                  this.showModal();
                }}
              />
              <div className="modal_selected-tags-text">Technology</div>
              <div className="modal_selected-tags-remove">X</div>
            </div>
          </div>
        )}
        <div className="modal_cancel" onClick={handleClose}>
          <div className="modal_cancel-text">Close</div>
        </div>
        <div className="modal_tag-video">
          <div className="modal_tag-video-text">{mainButton}</div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
