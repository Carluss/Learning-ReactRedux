import axios from "axios";

const KEY = "AIzaSyBWGyBIl7AllLiD_tGKaeOhIkH4Ks8IqQw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
