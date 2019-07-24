import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ff88d8f2ca336e5d033268ad2a56ef8765cfc36f7172ccab85f9fb96d9211574"
  }
});
