import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  //We create array for the image:
  //If we define the array as NULL - we get error when we
  // want to apply MAP function when we define it
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 0aab95c1c79478132d1eb9de29a3dae96781cbf700f059ffeddcaa0effc79476"
      }
    });

    console.log(response.data.results);
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
