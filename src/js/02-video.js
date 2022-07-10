import Player from '@vimeo/player';
import  throttle from 'lodash.throttle';
const play = document.querySelector("#vimeo-player")
const CURRENT_TIME = "videoplayer-current-time";
const ls = localStorage.getItem(CURRENT_TIME);
console.log(play);
const player = new Player(play);

if (ls) {
    player.setCurrentTime(ls) 
}

player.on("timeupdate", throttle(timeSave, 1000))

function timeSave(timeData) {
    // console.log(timeData.seconds);
    
    localStorage.setItem(CURRENT_TIME, timeData.seconds)
    // ls = localStorage.getItem(CURRENT_TIME)
    // console.log(ls);
}

