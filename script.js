const playPauseBtn = document.querySelector('#playPauseBtn');
const audioTrack =document.querySelector('#trackAudio');
const trackDurationElem=document.querySelector('.track-duration');
const trackcurrenTimeElem=document.querySelector('.Track-time');
const sliderThumb=document.querySelector('.slider__thumb');
let trackDuration=0;
let currentTime=0;

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {

    if (isPlaying) {
        playPauseBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.266 13.5162C20.2579 12.7487 20.2579 11.2512 19.266 10.4837C16.2685 8.16434 12.9213 6.33619 9.34973 5.06771L8.69725 4.83597C7.44898 4.39263 6.13047 5.23719 5.96148 6.52574C5.48932 10.126 5.48932 13.8739 5.96148 17.4742C6.13047 18.7627 7.44898 19.6073 8.69725 19.1639L9.34973 18.9322C12.9213 17.6637 16.2685 15.8356 19.266 13.5162Z" />
</svg>
`
        isPlaying = false;
        audioTrack.pause();


    } else {
        playPauseBtn.innerHTML = `
    <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2757 5.46995C17.7109 5.63029 18 6.04492 18 6.50872L18 17.4912C18 17.955 17.7109 18.3696 17.2757 18.53C16.4523 18.8333 15.5477 18.8333 14.7243 18.53C14.2891 18.3696 14 17.955 14 17.4912L14 6.50872C14 6.04492 14.2891 5.63029 14.7243 5.46995C15.5477 5.16659 16.4523 5.16659 17.2757 5.46995Z" />
<path d="M9.27568 5.46995C9.71088 5.63029 10 6.04492 10 6.50872L10 17.4912C10 17.955 9.71088 18.3696 9.27568 18.53C8.45228 18.8333 7.54772 18.8333 6.72432 18.53C6.28912 18.3696 6 17.955 6 17.4912L6 6.50872C6 6.04492 6.28912 5.63029 6.72432 5.46995C7.54772 5.16659 8.45228 5.16659 9.27568 5.46995Z" />
</svg>
`
        audioTrack.play();
        isPlaying = true;


    }

});
const convertduration =(duration) => {

   const minutes=Math.floor(duration / 60);
   const seconds=Math.floor(duration %60);
   return `${minutes}:${seconds}`;
}
audioTrack.addEventListener('loadeddata',() => {
    trackDuration = audioTrack.duration;
    trackDurationElem.innerText = convertduration(trackDuration);
});
audioTrack.addEventListener('timeupdate',() => {
    currentTime = audioTrack.currentTime;
    trackcurrenTimeElem.innerText = convertduration(currentTime);

    const percent=(currentTime/trackDuration)*100.
    sliderThumb.style.left=`${percent}% `;
});

