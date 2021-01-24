import React from "react";
import "./styles.css";
import videoPlaceholder from "../../Assets/video-placeholder-graphic.png";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-results_container">
        <div className="search-results_container-inner">
          <div className="search-results_result-count">3 Videos</div>
          <div className="search-results_entry">
            <img
              alt="Video"
              className="search-results_videos"
              src={videoPlaceholder}
            ></img>
            <div className="search-results_text">
              <div className="search-results_text-title">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </div>
              <div className="search-results_text-result-number">4 Results</div>
              <div className="search-results_text-result-details">
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
              </div>
            </div>
          </div>
          <div className="search-results_entry">
            <img
              alt="Video"
              className="search-results_videos"
              src={videoPlaceholder}
            ></img>
            <div className="search-results_text">
              <div className="search-results_text-title">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </div>
              <div className="search-results_text-result-number">4 Results</div>
              <div className="search-results_text-result-details">
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
              </div>
            </div>
          </div>
          <div className="search-results_entry">
            <img
              alt="Video"
              className="search-results_videos"
              src={videoPlaceholder}
            ></img>
            <div className="search-results_text">
              <div className="search-results_text-title">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </div>
              <div className="search-results_text-result-number">4 Results</div>
              <div className="search-results_text-result-details">
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
                <div className="search-results_text-result-details-inner">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
