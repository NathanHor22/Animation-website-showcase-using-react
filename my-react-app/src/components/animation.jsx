import {useEffect, useRef } from 'react';

    export const animationStates = [
      { name: 'idle', frames: 7 },
      { name: 'jump', frames: 7 },
      { name: 'fall', frames: 7 },
      { name: 'run', frames: 9 },
      { name: 'dizzy', frames: 11 },
      { name: 'sit', frames: 5 },
      { name: 'roll', frames: 7 },
      { name: 'bite', frames: 7 },
      { name: 'ko', frames: 12 },
      { name: 'getHit', frames: 4 }
    ];
    
function Animation ( {playerState, width = 600, height = 600} ) {
const canvasRef = useRef(null);

useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

    //setting up the canvas size
    const ctx = canvas.getContext('2d');
    const CANVAS_WIDTH = canvas.width = width;
    const CANVAS_HEIGHT = canvas.height = height;

    const playerImage = new Image();
    playerImage.src = '/shadow_dog.png';
    const spriteWidth = 575;
    const spriteHeight = 523;

    let gameFrame = 0;
    const staggerFrames = 6; //slowing down the animation speed
    const spriteAnimations = [];
    let animationId =null;
    let isActive = true;
    //looping through the animation states and setting up the frames for each state
    animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    } 
    //for loop to get the x and y positions of each frame in the sprite sheet, and pushing it to the loc array
    for(let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
    });


    function animate(){
      if(!isActive) return; //stops if component unmounted
    //clear old paint, specificing if we want to clear the whole canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); (reference)
    let position  = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX , frameY , spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameFrame++;
    //running over and over, creating a loop
    animationId = requestAnimationFrame(animate);
    }

    playerImage.onload = () => {
      if(isActive) {
        animate();
      }
    };

    return () => {
      isActive = false;
      //stops the old animation when component updates or unmounts
      //to prevent memory leak to making the website slower
      if(animationId) {
        cancelAnimationFrame(animationId);
      }
    };
    }, [playerState, width, height]);

    return <canvas ref={canvasRef} className="myCanvas"></canvas>;
    }

export default Animation;