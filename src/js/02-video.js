import Player from '@vimeo/player';
    import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player('vimeo-player');
console.log(iframe);
console.log(player);


const STORAGE_KEY = "videoplayer-current-time";


// player.on('currentTime', onPlay);


const onPlay = function(time) {
localStorage.setItem(STORAGE_KEY, JSON.stringify(time));
};
player.on('timeupdate', throttle((onPlay), 1000));   

const data = localStorage.getItem(STORAGE_KEY);


if (data !== null) {
const parsedData = JSON.parse(data);
    const currentTime = parsedData.seconds;
    player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
}








