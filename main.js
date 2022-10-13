title = "MASH SIMULATOR";

description = `Press Space`;

characters = [];

const G = {
	WIDTH: 100,
	HEIGHT: 150,
};

options = {
    viewSize: {x: G.WIDTH, y: G.HEIGHT},
    isCapturing: true,
    isCapturingGameCanvasOnly: true,
    captureCanvasScale: 2,
    isPlayingBgm: true
};

let player;
let mashCount = 0;
let time = 0;

function update() {
    if (!ticks) {
        player = {};
        mashCount = 0;
    }
    if (ticks == 600) {
        end();
    }
    if (input.isJustPressed) {
        mashCount++;
        addScore(100);
    }
    player.pos = vec(G.WIDTH * 0.5, G.HEIGHT * 1.5 - mashCount);
    color("cyan");
    box(player.pos, G.HEIGHT);
    color("black");
    text("MASH!!!", G.WIDTH * 0.5 - 17.5, 40);
}

addEventListener("load", onLoad);