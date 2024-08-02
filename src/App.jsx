/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { audioClips } from "./data/audio";

function App() {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playClip(e.key.toLocaleUpperCase());
    });
  }, []);

  function playClip(selector) {
    if (!selector) return;
    const audio = document.getElementById(selector);
    if (!audio) return;
    audio.play().catch(console.error);
    audio.parentElement.focus();
    setDisplay(audio.parentElement.id);
  }

  return (
    <div id="drum-machine" tabIndex="0">
      <h1 className="title">Drum Machine</h1>
      <div className="drum__inner">
        {audioClips.map((audioClip) => (
          <button
            id={audioClip.description}
            className="drum-pad"
            key={audioClip.description}
            onClick={() => playClip(audioClip.keyCode)}
          >
            {audioClip.keyCode}
            <audio
              id={audioClip.keyCode}
              src={audioClip.url}
              className="clip"
            ></audio>
          </button>
        ))}
      </div>
      <div id="display">{display}</div>
    </div>
  );
}

export default App;
