var canvas,backgroundImage
var gameState = 0
var playerCount
var database

var form,player,game

var X  = random(0,250)
var Y =  random(0,250)
var Z  =  random(0,250)


function setup(){
  database = firebase.database();
  
 canvas = createCanvas(400,400);
 
 game = new Game()
 game.getState() 
 game.start()

// game.draw()
 
}

function draw(){
  
  
}

