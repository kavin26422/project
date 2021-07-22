var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(20, 25,18,18);
//creating the player Sofia
sofia.shapeColor="red"

//creating the maze walls (wall1 - wall2)
var wall1 =createSprite(10,70,100,20)
 wall1.shapeColor = "brown";
var wall2 =createSprite(101,60,20,80)
wall2.shapeColor = "brown";
var wall3 =createSprite(250,159,100,20)
wall3.shapeColor ="brown";
var wall4 =createSprite(190,100,100,20)
wall4.shapeColor = "brown";
var wall5 =createSprite(4,149,200,20)
wall5.shapeColor = "brown";
var wall6=createSprite(301,50,20,150)
wall6.shapeColor = "brown";
var wall7=createSprite(150,201,20,135)
wall7.shapeColor = "brown";
var wall8=createSprite(276,65,20,125)
wall8.shapeColor = "brown";
var wall9=createSprite(200,201,20,20)
wall9.shapeColor = "brown";
var wall10=createSprite(50,225,120,20)
wall10.shapeColor = "brown";
var wall11=createSprite(252,232,20,100)
wall11.shapeColor = "brown";
var wall12=createSprite(252,226,20,100)
wall12.shapeColor = "brown";
var wall13=createSprite(172,205,62,20)
wall13.shapeColor = "brown";
var wall14=createSprite(250,320,220,20)
wall14.shapeColor = "brown";
var wall15=createSprite(250,361,20,100)
wall15.shapeColor = "brown";
var wall16=createSprite(130,342,20,65)
wall16.shapeColor = "brown";
var wall17=createSprite(350,64,100,20)
wall17.shapeColor = "brown";
var wall18=createSprite(364,160,70,20)
wall18.shapeColor = "brown";
var wall19=createSprite(340,227,20,113)
wall19.shapeColor = "brown";
var wall20=createSprite(50,320,92,20)
wall20.shapeColor = "brown";
var wall21=createSprite(6,360,20,100)
wall21.shapeColor = "brown";
var wall22=createSprite(28,294,50,20)
wall22.shapeColor = "brown";






//create cup
var cup =createSprite(385,385,10,50)
cup.shapeColor = "gold"

  
function draw() {
  //setting the background color to pink
  background("pink");
  createEdgeSprites();
  sofia .bounceOff(edges)
  
sofia.velocityX=0;  
sofia.velocityY=0;  
 
if(keyDown(UP_ARROW)){
sofia.velocityY=-4;
}

if(keyDown(DOWN_ARROW)){
sofia.velocityY=4;

}

if(keyDown(LEFT_ARROW)){
sofia.velocityX=-4;
}

if(keyDown(RIGHT_ARROW))
sofia.velocityX=4;

if (sofia.isTouching(wall1))
  

  
  drawSprites();

}


























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
