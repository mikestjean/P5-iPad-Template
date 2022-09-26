function setup() {
    createCanvas(500, 500)
    colorMode(HSB, 360, 100, 100, 100);
    rectMode(CENTER);
    noStroke();
    
//    alph = 40;
//    
//    let res = 0.82;
//    for (i = 0; i < width; i++){
//      for (j = 0; j < height; j++){
//        n = noise(i* res, j* res)
//        let brt = map(n,0,1,0,100);
//        fill(0,0,brt,alph);
//        rect(i,j,3);
//      }
//    }
}

function draw() {
    background(170,0,80);


glow(color(220,100,100),20);

hyperGradient();

//      radialGradient(
//      width/2, height/2, 0, 
//      width/2, height/2, 350, 
//      color(150, 100, 100, 100), 
//      color(250, 100, 100, 100)
//      );
//ellipse(width/2, height/2, 300, 300);
//
//      linearGradient(
//      width/2, height/2-200, 
//      width/2, height/2+200, 
//      color(0, 80, 80, 100), 
//      color(0, 80, 100, 0)
//      );
//
//ellipse(width/2, height/2, 300, 300);

const effects = new Effects(this);

  // I start with defining random colors
  const brand = effects.colors.any();
  const bright = effects.colors.bright();
  const dark = effects.colors.dark();

  // Then I define some colorful hatches
  // All hatches take width, height, density, color and weight
  // A new p5.Graphics buffer with the hatch is returned to the variable
  const grain = effects.hatches.grain(width, height, random(), brand, random(3));
  const stripes = effects.hatches.stripes(width, height,  random(), dark,  random(3));
  const bars = effects.hatches.bars(width, height,  random(), dark,  random(3));

  // Rendering with ps's image() function
  background(bright);
  image(grain, 0, 0);
  image(stripes, 0, 0);
  image(bars, 0, 0);

  // Post process?
  image(effects.pixels.glitch(this.get()), 0, 0);
    
function linearGradient(sX, sY, eX, eY, colorS, colorE){
    let gradient = drawingContext.createLinearGradient(
     sX, sY, eX, eY
    );
    
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
    
    drawingContext.fillStyle = gradient;
    }

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
    let gradient = drawingContext.createRadialGradient(
     sX, sY, sR, eX, eY, eR
    );
    
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
    
    drawingContext.fillStyle = gradient;
    }

function hyperGradient(){
 
     radialGradient(
      width/2, height/2, 0, 
      width/2, height/2, 350, 
      color(150, 100, 100, 100), 
      color(250, 100, 100, 100)
      );
ellipse(width/2, height/2, 300, 300);
    linearGradient(
      width/2, height/2-200, 
      width/2, height/2+200, 
      color(0, 80, 80, 100), 
      color(0, 80, 100, 0)
      );
 ellipse(width/2, height/2, 300, 300);
  
  }

function glow(glowColor, blurAmount){
  drawingContext.shadowBlur = blurAmount;
drawingContext.shadowColor = glowColor;
}


}