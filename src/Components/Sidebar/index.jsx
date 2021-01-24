import React from "react";
import "./styles.css";
import user from "../../Assets/user.svg";
import uploadGray from "../../Assets/upload-gray.svg";
import group from "../../Assets/group.svg";
import star from "../../Assets/star.svg";
import addUser from "../../Assets/add-user.svg";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar_container">
        <div className="sidebar_container-top">
          <div className="sidebar_round">
            <div className="sidebar_center-inner sidebar_round-inner"></div>
          </div>
          <div className="sidebar_title">Libraries</div>
        </div>
        <div className="sidebar_library sidebar_library-personal">
          <img
            alt="Personal"
            className="sidebar_library-center sidebar_library-icon"
            src={user}
          />
          <div className="sidebar_library-center-text">Personal</div>
        </div>
        {this.props.isSearch && (
          <div className="sidebar_library">
            <img
              alt="Shared"
              className="sidebar_library-center sidebar_library-icon"
              src={uploadGray}
            />
            <div className="sidebar_library-center-text">Shared</div>
          </div>
        )}
        {!this.props.isSearch && (
          <div className="sidebar_library">
            <img
              alt="Featured"
              className="sidebar_library-center sidebar_library-icon"
              src={star}
            />
            <div className="sidebar_library-center-text">Featured</div>
          </div>
        )}
        <div className="sidebar_library">
          <img
            alt="Team"
            className="sidebar_library-center sidebar_library-icon"
            src={group}
          />
          <div className="sidebar_library-center-text">Team</div>
        </div>
        <div className="sidebar_invite-members">
          <div className="sidebar_invite-members-text">
            <img
              alt="Invite Member"
              className="sidebar_invite-icon"
              src={addUser}
            />
            Invite members
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
