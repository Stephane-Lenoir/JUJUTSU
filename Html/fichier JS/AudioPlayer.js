document.addEventListener("DOMContentLoaded", function() {
  const audioPlayer = document.getElementById('audio-player');

  // Fonction pour vérifier et charger la position de lecture depuis localStorage
  function loadAudioState() {
    const savedTime = localStorage.getItem('audio-player-time');
    if (savedTime) {
      audioPlayer.currentTime = parseFloat(savedTime);
    }
  }

  // Chargement initial de la position de lecture
  loadAudioState();

  // Événement lors de la mise en pause de l'audio pour sauvegarder la position
  audioPlayer.addEventListener('pause', function() {
    localStorage.setItem('audio-player-time', audioPlayer.currentTime.toString());
  });

  // Événement lorsque l'audio est terminé pour effacer la position de lecture
  audioPlayer.addEventListener('ended', function() {
    localStorage.removeItem('audio-player-time');
  });

  // Événement lors du chargement initial pour effacer la position de lecture
  audioPlayer.addEventListener('loadedmetadata', function() {
    localStorage.removeItem('audio-player-time');
  });
});
