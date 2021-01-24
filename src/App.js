import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SearchResults from "./Components/Search-Results";
import PersonalLibrary from "./Components/Personal-Library";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSearch: false, showSearchResults: false };
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  };

  submitIfEnter = (e) => {
    if (e.keyCode === 13) {
      this.setState({ showSearchResults: true });
    }
  };

  render() {
    let { isSearch, showSearchResults } = this.state;
    return (
      <div className="App">
        <Header
          isSearch={isSearch}
          toggleSearch={this.toggleSearch}
          submitIfEnter={this.submitIfEnter}
        ></Header>
        <Sidebar isSearch={isSearch}></Sidebar>
        {isSearch && showSearchResults && <SearchResults></SearchResults>}
        {!isSearch && <PersonalLibrary></PersonalLibrary>}
      </div>
    );
  }
}

export default App;
