import { saveSettings } from './lib/storage';
import { isMobile } from 'mobile-device-detect';

export const gameVersion = '0.2.0-alpha';

export const gameProtocol = 2;

export const defaultSettings = {
	version: '0.0.0',
	nickname: `Player${Math.round(Math.random() * 100000)}`,
	autostep: isMobile,
	gamepad: false,
	singleplayer: false,
	allowcustom: false,
	mouse: isMobile ? 50 : 15,
	hotbarsize: 9,
};

export let gameSettings = { ...defaultSettings, version: gameVersion };

export function updateSettings(data: Object) {
	gameSettings = { ...defaultSettings, ...data };
	saveSettings(gameSettings);
}

export const defaultServerSettings = {
	cheats: false,
	control: false,
	ingame: false,
};

export let serverSettings = { ...defaultServerSettings };

export function updateServerSettings(data: Object) {
	serverSettings = { ...serverSettings, ...data };
}

export function noaOpts() {
	return {
		debug: true,
		showFPS: true,
		inverseY: false,
		inverseX: false,
		sensitivityX: gameSettings.mouse,
		sensitivityY: gameSettings.mouse,
		chunkSize: 32, // Don't touch this
		chunkAddDistance: 5, // Make it changeable?
		chunkRemoveDistance: 6, // ^
		blockTestDistance: 7, // Per Gamemode?
		tickRate: isMobile ? 65 : 50, // Maybe make it lower
		texturePath: '',
		playerStart: [0, 100, 0],
		playerHeight: 1.85,
		playerWidth: 0.5,
		playerAutoStep: gameSettings.autostep ? 1 : 0,
		clearColor: [0.8, 0.9, 1],
		ambientColor: [1, 1, 1],
		lightDiffuse: [1, 1, 1],
		lightSpecular: [1, 1, 1],
		groundLightColor: [0.5, 0.5, 0.5],
		useAO: true,
		AOmultipliers: [0.93, 0.8, 0.5],
		reverseAOmultiplier: 1.0,
		preserveDrawingBuffer: true,
		gravity: [0, -14, 0],
		bindings: {
			forward: ['W'],
			left: ['A'],
			backward: ['S'],
			right: ['D'],
			fire: '<mouse 1>',
			'mid-fire': ['<mouse 2>'],
			'alt-fire': ['<mouse 3>'],
			jump: '<space>',
			inventory: ['E'],
			muteMusic: ['O'],
			thirdprsn: ['M'],
			chatenter: ['<enter>'],
			chat: ['T'],
			cmd: ['/'],
			tab: ['<tab>'],
			menu: ['<escape>'],
			screenshot: ['P'],
		},
	};
}

export const defaultFonts = [
	'silkscreen',
	'Lato',
	'Lato-Italic',
	'Lato-Black',
	'Lato-BlackItalic',
	'Lato-Bold',
	'Lato-BoldItalic',
	'Lato-Light',
	'Lato-LightItalic',
	'Lato-Thin',
	'Lato-ThinItalic',
];

export let noa = null;
export function setNoa(x) {
	noa = x;
}