import Phaser from 'phaser'
import overscene from "./scenes/GameOverScene";
import mainscene from "./scenes/mainscene.js";
const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 480,
	height: 640,
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	//scene:[overscene]
	scene: [mainscene,overscene],
}

export default new Phaser.Game(config)
