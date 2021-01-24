import React from "react";
import "./styles.css";
import bell from "../../Assets/bell.svg";
import upload from "../../Assets/upload.svg";
import loupe from "../../Assets/loupe.svg";
import linkWhite from "../../Assets/link-white.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header_container">
        {this.props.isSearch && (
          <div
            className="header_search-open-icon"
            onClick={this.props.toggleSearch}
          >
            <img
              alt="Search"
              className="header_center-inner header_icons-inner"
              src={loupe}
            />
          </div>
        )}
        {this.props.isSearch && (
          <input
            className="header_search-open-main-title"
            placeholder={"Search Inside Videos"}
            onKeyDown={this.props.submitIfEnter}
          ></input>
        )}
        {!this.props.isSearch && (
          <div className="header_main-title">Personal Library</div>
        )}
        <div className="header_round header_float-right">
          <div className="header_center-inner header_letter-inner">R</div>
        </div>
        {!this.props.isSearch && (
          <div className="header_float-right header_icons">
            <img
              alt="Notifications"
              className="header_center-inner header_icons-inner"
              src={bell}
            />
          </div>
        )}
        {!this.props.isSearch && (
          <div className="header_float-right header_copy-link-button">
            <img alt="Link" className="header_link-icon" src={linkWhite} />
            <div className="header_center-inner">Copy Link</div>
            <div className="header_down-arrow">
              <div className="header_center-inner">V</div>
            </div>
          </div>
        )}
        {!this.props.isSearch && (
          <div className="header_float-right header_icons">
            <img
              alt="Upload"
              className="header_center-inner header_icons-inner"
              src={upload}
            />
          </div>
        )}
        {!this.props.isSearch && (
          <div
            className="header_float-right header_icons header_no-margin-right"
            onClick={this.props.toggleSearch}
          >
            <img
              alt="Search"
              className="header_center-inner header_icons-inner"
              src={loupe}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Header;
