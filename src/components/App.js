import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
    //ssd
  }

  render() {
    return (
      <div className="ui container color red">
        <br />
        <SearchBar onImSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
