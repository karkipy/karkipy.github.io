// file with resources related to game such as canvas and its context's object
// The object will be singleton
// other resource will be assets such as loaded images or sound so as to be called when needed
// rather than being assigned again will be stored into one single object

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const loadedImages = {};
const loadedSounds = {};
let animationReq;
let animationId = 0;

