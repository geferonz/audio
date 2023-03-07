import './Player.css';
import { useEffect } from 'react';

function Player({url}) {

  useEffect(() => {
    let audio = document.getElementById("audio");
    let playBtn = document.getElementById("play");
    let prog = document.getElementById("progress");
    let playTime = document.getElementById("time-played");

    prog.addEventListener("click", function (e) {
      audio.currentTime = e.target.value;
    });

    playBtn.addEventListener("click", function (e) {
      if (audio.paused) {
        audio.play();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
      } else {
        audio.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
      }
    });

    function paddZero(i) {
      if (i < 10) {
        i = "0" + i;
      } 
      return i;
    }

    audio.ontimeupdate = function() {
      let played = audio.currentTime;
      let percent = 100 * (audio.currentTime / audio.duration);
      prog.value = `${percent}`;
  
      const playedTime = played < 60 ? (
        "00:" + paddZero(Math.floor(played))
      ) : (
        paddZero(Math.floor(played / 60)) + ":" + paddZero(Math.floor(played % 60))
      );

      playTime.innerHTML = playedTime;
    } 
  }, []);

  return (
    <>
      <audio id="audio" src={url} />
      <div id="audio-box">
        <span id="play" className="fas fa-play"></span>
        <input id="progress" type="range" defaultValue='0' />
        <span id="time-played">00:00</span>
      </div>
    </>
  );
}

export default Player;
