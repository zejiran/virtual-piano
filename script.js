const routes = {
    'A': 'white_keys/A.mp3',
    'S': 'white_keys/S.mp3',
    'D': 'white_keys/D.mp3',
    'F': 'white_keys/F.mp3',
    'G': 'white_keys/G.mp3',
    'H': 'white_keys/H.mp3',
    'J': 'white_keys/J.mp3',
    'W': 'black_keys/W.mp3',
    'E': 'black_keys/E.mp3',
    'T': 'black_keys/T.mp3',
    'Y': 'black_keys/Y.mp3',
    'U': 'black_keys/U.mp3',
};

document.addEventListener('keydown',  e => {
    const audio = document.createElement('AUDIO');
    audio.src = (e.key.toUpperCase() in routes) ? routes[e.key.toUpperCase()] : 'white_keys/other.mp3';
    audio.play();
    console.log(`The '${e.key.toUpperCase()}' is pressed.`);
});
