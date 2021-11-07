import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = ({ defaultSearch }) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });

    setVideos(response.data.items);
  };

  useEffect(() => {
    search(defaultSearch);
  }, [defaultSearch]);

  return [videos, search];
};

export default useVideos;
