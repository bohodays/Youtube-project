import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { search } from "../api/youtube";
import FakeYoutebe from "../api/fakeYoutube";

const Videos = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutebe();
    return youtube.search(keyword);
  });

  console.log(videos);

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "❤"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😥</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
