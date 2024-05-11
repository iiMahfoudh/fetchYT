let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

document.getElementById('url-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const url = document.getElementById('url-input').value;
  const videoId = extractVideoId(url);

  if (videoId) {
    player.loadVideoById(videoId);
  } else {
    alert('Invalid YouTube URL');
  }
});

function extractVideoId(url) {
  const videoIdRegex = /[?&]v=([^&#]*)/;
  const match = videoIdRegex.exec(url);
  return match ? match[1] : null;
}