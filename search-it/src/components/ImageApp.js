import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class ImageApp extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term, p) => {
    // unsplash api
    const response = await unsplash.get("/search/photos", {
      params: { query: term, page: p }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ImageApp;
