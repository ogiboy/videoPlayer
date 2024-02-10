import { YouTubeEmbed } from "@next/third-parties/google";

const VideoPlayer = ({ myFavVideos, showVideo }) => {
  return (
    <div className="video-container">
      <h3>
        {myFavVideos.map((video) => {
          if (video.videoId === showVideo) {
            return video.name;
          }
        })}
      </h3>
      <YouTubeEmbed
        videoid={showVideo}
        params="controls=2&rel=0&showInfo=0&modestbranding=1&cc_load_policy=1"
      />
    </div>
  );
};

export default VideoPlayer;
