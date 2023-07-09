import { createContext, useContext } from "react";
import FakeYoutebeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";
import YoutebeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

const client = new FakeYoutebeClient();
// const client = new YoutebeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
