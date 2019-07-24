import axios from "axios";
const KEY = "AIzaSyBWKybD-1gBAwOui3AiWWCeDQhf3IcOhHc";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: `${KEY}`
  }
});
