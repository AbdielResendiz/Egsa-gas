// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

<script>
    var audio = document.getElementById('background-music');
    var isPlaying = false;
    function toggleMusic() {
        var musicIcon = document.getElementById('music-icon');
        if (isPlaying) {
            audio.pause();
            musicIcon.src = 'https://citykids.edu.mx/wp/wp-content/uploads/2024/08/silenciar.gif';
        } else {
            audio.play();
            musicIcon.src = 'https://citykids.edu.mx/wp/wp-content/uploads/2024/08/volumen.gif';
        }
        isPlaying = !isPlaying;
}
 window.addEventListener('load', function() {
 audio.play();
 isPlaying = true;
 document.getElementById('music-icon').src = 'https://citykids.edu.mx/wp/wp-content/uploads/2024/08/volumen.gif';
 });
</script>
