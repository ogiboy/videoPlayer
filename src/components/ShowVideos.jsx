import VideoPlayer from "./VideoPlayer";
import myFavVideos from "./myFavVideos";

const ShowVideos = ({ handleChange, showVideo }) => {
  return (
    <div>
      <form className="grid-container">
        {myFavVideos.map((video, index) => (
          <label
            className={`label label-${index}`}
            key={video.id}
            htmlFor={video.id}
          >
            Video {index + 1}
            <input
              value={video.videoId}
              name="video"
              id={video.id}
              type="radio"
              required
              onChange={handleChange}
              checked={showVideo === video.videoId}
            />
          </label>
        ))}
      </form>
      <VideoPlayer myFavVideos={myFavVideos} showVideo={showVideo} />
    </div>
  );
};

export default ShowVideos;
