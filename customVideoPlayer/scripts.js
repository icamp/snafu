
/* #1 get all elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');


/* #2 build out functions */
function togglePlay() {
    if(video.paused) {   // there is no 'playing property'
        video.play();
    } else {
        video.pause();
    }
} 

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'; // '.this' can be used here because it is bound to the video
    toggle.textContent = icon;
}

function skip() {
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)  // parseFloat converts this.dataset.skip from string to number
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    // console.log(this.name); 
    // console.log(this.value); 
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100; // currentTime & duration are properties on the video
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(e);
}

function goFullscreen() {
    if (fullscreen.requestFullscreen) {
        video.requestFullscreen();
    } else if (fullscreen.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (fullscreen.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (fullscreen.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
  }


/* #3 hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', () => {
//     if(mouseDown) {
//         scrub;
//     }
// });
// or
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));   // when mousemove check mouseDown and if true move to scrub() 
progress.addEventListener 
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false); 
fullscreen.addEventListener('click', goFullscreen);


/*
to do:
add listener to F key for fullscreen
change default fullscreen controls
icon sources - https://www.w3schools.com/charsets/ref_utf_geometric.asp
*/