import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    try {
      const response = await unsplash.get("/search/photos", {
        params: {
          per_page: 20,
          query: term,
        },
      });
      this.setState({ images: response.data.results });
    } catch (error) {
      console.log("Unsplash API error: " + error);
    }
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
