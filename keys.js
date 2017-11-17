var currentlyPressedKeys = {};
   
function degToRad(degrees) {
  return degrees * Math.PI / 180;

}

function handleKeyDown(event) {
  currentlyPressedKeys[event.keyCode] = true;
}


function handleKeyUp(event) {
  currentlyPressedKeys[event.keyCode] = false;
}

function handleKeys() {

  if (currentlyPressedKeys[37] || currentlyPressedKeys[65]) {
     // Left cursor key or A
     yawRate = 0.1;
  } else if (currentlyPressedKeys[39] || currentlyPressedKeys[68]) {
    // Right cursor key or D
    yawRate = -0.1;
  }else{
    yawRate = 0;
  }

  if (currentlyPressedKeys[38] || currentlyPressedKeys[87]) {
            // Up cursor key or W
    speed = 0.003;
  }else if (currentlyPressedKeys[40] || currentlyPressedKeys[83]) {
    // Down cursor key
    speed = -0.003;
  }else{
    speed = 0;
  }

}

