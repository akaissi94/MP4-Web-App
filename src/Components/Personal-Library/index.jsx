import React from "react";
import "./styles.css";
import videoPlaceholder from "../../Assets/video-placeholder-graphic.png";
import settings from "../../Assets/settings.svg";
import link from "../../Assets/link.svg";
import starGray from "../../Assets/star-gray.svg";
import threeDots from "../../Assets/more.svg";
import goldStar from "../../Assets/gold-star.svg";
import check from "../../Assets/check.svg";
import settingsWhite from "../../Assets/settings-white.svg";
import linkWhite from "../../Assets/link-white.svg";
import arrowsWhite from "../../Assets/arrows-white.svg";
import emailWhite from "../../Assets/email-white.svg";
import twitterWhite from "../../Assets/twitter-white.svg";
import tagWhite from "../../Assets/tag-white.svg";
import starWhite from "../../Assets/star-white.svg";
import Modal from "../Modal";

class PersonalLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modalType: 0,
      allVideos: [
        {
          id: 1,
          title: "Test",
          author: "John Doe",
          isFeatured: true,
          isSelected: false,
        },
        {
          id: 2,
          title: "Test",
          author: "John Doe",
          isFeatured: false,
          isSelected: false,
        },
        {
          id: 3,
          title: "Test",
          author: "John Doe",
          isFeatured: false,
          isSelected: false,
        },
        {
          id: 4,
          title: "Test",
          author: "John Doe",
          isFeatured: false,
          isSelected: false,
        },
      ],
    };
  }

  showModal = (modalType) => {
    this.setState({ show: true, modalType });
  };

  hideModal = () => {
    this.setState({ show: false, modalType: 0 });
  };

  toggleIsFeatured(id) {
    let updatedAllVideos = this.state.allVideos.map((video) => {
      if (video.id !== id) return video;
      return { ...video, isFeatured: !video.isFeatured };
    });

    this.setState({ allVideos: updatedAllVideos });
  }

  toggleIsSelected(id) {
    let updatedAllVideos = this.state.allVideos.map((video) => {
      if (video.id !== id) return video;
      return { ...video, isSelected: !video.isSelected };
    });

    this.setState({ allVideos: updatedAllVideos });
  }

  render() {
    let { allVideos } = this.state;
    let featuredVideos = allVideos.filter((entry) => entry.isFeatured);
    let selectedVideos = allVideos.filter((entry) => entry.isSelected);

    return (
      <div className="personal-library_container">
        <Modal
          show={this.state.show}
          modalType={this.state.modalType}
          handleClose={this.hideModal}
          title={
            this.state.modalType === 1 ? "Tag Videos" : "Select All Videos"
          }
          mainButton={
            this.state.modalType === 1 ? "Tag Video" : "Select Videos"
          }
        ></Modal>
        {selectedVideos.length > 0 && (
          <div className="personal-library_toolbar">
            <div className="personal-library_toolbar-text">
              {selectedVideos.length} Video(s) Selected
            </div>
            <div
              className="personal-library_toolbar-text personal-library_select-all"
              onClick={() => {
                this.showModal(2);
              }}
            >
              Select All
            </div>
            <img
              alt="Settings"
              className="personal-library_toolbar-settings-icon"
              src={settingsWhite}
            />
            <div className="personal-library_toolbar-text personal-library_cancel">
              Cancel
            </div>
            <img
              alt="Link"
              className="personal-library_toolbar-right-icons"
              src={linkWhite}
            />
            <img
              alt="Arrows"
              className="personal-library_toolbar-right-icons"
              src={arrowsWhite}
            />
            <img
              alt="Email"
              className="personal-library_toolbar-right-icons"
              src={emailWhite}
            />
            <img
              alt="Twitter"
              className="personal-library_toolbar-right-icons"
              src={twitterWhite}
            />
            <img
              alt="Tag"
              className="personal-library_toolbar-right-icons"
              src={tagWhite}
              onClick={() => {
                this.showModal(1);
              }}
            />
            <img
              alt="Star"
              className="personal-library_toolbar-right-icons"
              src={starWhite}
            />
          </div>
        )}
        {featuredVideos.length > 0 && (
          <div className="personal-library_section">
            <div className="personal-library_section-title">
              Featured Videos
              <img
                alt="Settings"
                className="personal-library_settings-icon"
                src={settings}
              />
            </div>
            <div className="personal-library_video-listing-container">
              <div className="personal-library_video-listing">
                {featuredVideos.map((video) => {
                  return (
                    <div key={video.id} className="personal-library_video">
                      <img
                        alt="Video"
                        className="personal-library_video-placeholder"
                        src={videoPlaceholder}
                        onClick={() => {
                          this.toggleIsSelected(video.id);
                        }}
                      ></img>
                      {video.isSelected && (
                        <img
                          alt="Check"
                          className="personal-library_video-selected"
                          src={check}
                        ></img>
                      )}
                      <div className="personal-library_video-title">
                        {video.title}
                      </div>
                      <div>
                        <div className="personal-library_video-author">
                          {video.author}
                        </div>
                        <div className="personal-library_float-right personal-library_icons">
                          <img
                            alt="Link"
                            className="personal-library_center-inner personal-library_icons-inner"
                            src={link}
                          />
                        </div>
                        <div className="personal-library_float-right personal-library_icons">
                          <img
                            alt="Feature"
                            className="personal-library_center-inner personal-library_icons-inner"
                            src={video.isFeatured ? goldStar : starGray}
                            onClick={() => {
                              this.toggleIsFeatured(video.id);
                            }}
                          />
                        </div>
                        <div className="personal-library_float-right personal-library_icons">
                          <img
                            alt="More"
                            className="personal-library_center-inner personal-library_icons-inner"
                            src={threeDots}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="personal-library_section">
          <div className="personal-library_section-title">
            All Videos
            <img
              alt="Settings"
              className="personal-library_settings-icon"
              src={settings}
            />
          </div>
          <div className="personal-library_video-listing-container">
            <div className="personal-library_video-listing">
              {allVideos.map((video) => {
                return (
                  <div key={video.id} className="personal-library_video">
                    <img
                      alt="Video"
                      className="personal-library_video-placeholder"
                      src={videoPlaceholder}
                      onClick={() => {
                        this.toggleIsSelected(video.id);
                      }}
                    ></img>
                    {video.isSelected && (
                      <img
                        alt="Check"
                        className="personal-library_video-selected"
                        src={check}
                      ></img>
                    )}
                    <div className="personal-library_video-title">
                      {video.title}
                    </div>
                    <div>
                      <div className="personal-library_video-author">
                        {video.author}
                      </div>
                      <div className="personal-library_float-right personal-library_icons">
                        <img
                          alt="Link"
                          className="personal-library_center-inner personal-library_icons-inner"
                          src={link}
                        />
                      </div>
                      <div className="personal-library_float-right personal-library_icons">
                        <img
                          alt="Feature"
                          className="personal-library_center-inner personal-library_icons-inner"
                          src={video.isFeatured ? goldStar : starGray}
                          onClick={() => {
                            this.toggleIsFeatured(video.id);
                          }}
                        />
                      </div>
                      <div className="personal-library_float-right personal-library_icons">
                        <img
                          alt="More"
                          className="personal-library_center-inner personal-library_icons-inner"
                          src={threeDots}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalLibrary;
