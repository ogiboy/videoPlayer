import { useState } from "react";
import "./styles.css";
import ShowVideos from "./components/ShowVideos";

export default function App() {
  const [showVideo, setShowVideo] = useState("6L8yUY-doNc");
  const handleChange = (e) => {
    setShowVideo(e.target.value);
  };
  return (
    <div className="App">
      <h1>CodeSandboxTube</h1>
      <ShowVideos handleChange={handleChange} showVideo={showVideo} />
    </div>
  );
}
