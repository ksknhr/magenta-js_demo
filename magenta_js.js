// Instantiate model by loading desired config.
const model = new mm.MusicVAE(
    'https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_4bar');
const player = new mm.Player();

function play() {
    player.resumeContext(); // enable audio
    model.sample(1).then((samples) => player.start(samples[0], 120));
}

function stop(){
    player.stop();
}