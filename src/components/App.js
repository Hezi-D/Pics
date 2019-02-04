import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  //We create array for the image:
  //If we define the array as NULL - we get error when we
  // want to apply MAP function when we define it
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    //Update images array with set state
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container color red">
        <br />
        <SearchBar onImSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
