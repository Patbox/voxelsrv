/* global BABYLON */

global.game = {}
game.name = 'VoxelSrv'
game.version = '0.0.1'

// Worldname
game.world = 'temp'

// Used in worldgen
game.seed = Math.random() //123

// Players gamemode 0 - Survival, 1 - Creative
game.mode = 1

import Engine from 'noa-engine'
import 'babylonjs'
import 'babylonjs-loaders'
import { initRegistration, getBlockNames } from './registration'
import { initWorldGen } from './world/menager'
import './world/commands'
import { initPhysics } from './world/physics'
import { setupPlayerEntity } from './player/player'
import { setupInteractions } from './player/actions'
import { setupGUI } from './player/gui'





// create engine
var noa = new Engine({
	debug: true,
	showFPS: true,
	inverseY: false,
	inverseX: false,
	sensitivityX: 15,
	sensitivityY: 15,
	chunkSize: 24,
	chunkAddDistance: 6.5,
	chunkRemoveDistance: 6.0,
	blockTestDistance: 10,
	tickRate: 40,
	texturePath: 'textures/',
	playerStart: [0.5, 40, 0.5],
	playerHeight: 1.85,
	playerWidth: 0.5,
	playerAutoStep: false,
	clearColor: [0.8, 0.9, 1],
	ambientColor: [1, 1, 1],
	lightDiffuse: [1, 1, 1],
	lightSpecular: [1, 1, 1],
	groundLightColor: [0.5, 0.5, 0.5],
	useAO: true,
	AOmultipliers: [0.93, 0.8, 0.5],
	reverseAOmultiplier: 1.0,
	preserveDrawingBuffer: true,
	gravity: [0, -18, 0]
})
noa.setMaxListeners(100)

var scene = noa.rendering.getScene()



global.pickedID = 1
global.inventory = {}

// this registers all the blocks and materials
game.blocks = initRegistration(noa)
var block = game.blocks
game.blockNames = getBlockNames(game.blocks)

game.illegalBlocks = [block.water, block.barrier]
game.unbreakableBlocks = [block.barrier]
game.plantsBlocks = [block.red_flower, block.yellow_flower, block.grass_plant]

// this sets up worldgen
initWorldGen(noa)

// adds a mesh to player
setupPlayerEntity(noa)

// does stuff on button presses
setupInteractions(noa)

// this sets up worldgen
initPhysics(noa)

// GUI
setTimeout(function(){ setupGUI(noa) }, 500)


