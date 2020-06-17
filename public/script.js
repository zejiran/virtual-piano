const routes = {
    'A': '../assets/white_keys/A.mp3',
    'S': '../assets/white_keys/S.mp3',
    'D': '../assets/white_keys/D.mp3',
    'F': '../assets/white_keys/F.mp3',
    'G': '../assets/white_keys/G.mp3',
    'H': '../assets/white_keys/H.mp3',
    'J': '../assets/white_keys/J.mp3',
    'W': '../assets/black_keys/W.mp3',
    'E': '../assets/black_keys/E.mp3',
    'T': '../assets/black_keys/T.mp3',
    'Y': '../assets/black_keys/Y.mp3',
    'U': '../assets/black_keys/U.mp3',
};

document.addEventListener('keydown',  e => {
    const audio = document.createElement('AUDIO');
    audio.src = (e.key.toUpperCase() in routes) ? routes[e.key.toUpperCase()] : '../assets/other.mp3';
    audio.play();
    console.log(`The '${e.key.toUpperCase()}' is pressed.`);
});
