const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
const reset = document.querySelector(".reset");
// console.log(buttons);

let winner = [0, 0];
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
  //   console.log(e.target.innerText);
  let playerSelection = e.target.innerText;
  let computerSelection = Math.random();
  if (computerSelection < 0.2) {
    computerSelection = "Rock👊";
  } else if (computerSelection <= 0.4) {
    computerSelection = "Paper🖐";
  } else if (computerSelection <= 0.6) {
    computerSelection = "Scissors✌";
  } else if (computerSelection <= 0.8) {
    computerSelection = "Lizard🤏";
  } else {
    computerSelection = "Spock🖖";
  }
  console.log(computerSelection);

  let result = checkWinner(playerSelection, computerSelection);
  //   console.log(result);
  if (result == "You") {
    // startConfetti();
    confetti();
    result += " won!🎈🎈🎈";
    winner[0]++;
  } else if (result == "Mr. Robot") {
    // removeConfetti();
    result += " wins!";
    winner[1]++;
  } else {
    // removeConfetti();
    result += " results in a tie match";
  }
  score.innerHTML =
    "<small>You</small>[" +
    winner[0] +
    "] <small>Mr. Robot</small>[" +
    winner[1] +
    "]";
  messager(
    playerSelection + " vs " + computerSelection + "<br><b>" + result + "</b>"
  );
}

function messager(mes) {
  message.innerHTML = mes;
}

function checkWinner(pl, co) {
  if (pl === co) {
    return "Draw";
  }
  if (pl === "Rock👊") {
    if (co === "Paper🖐" || co === "Spock🖖") {
      return "Mr. Robot";
    } else {
      return "You";
    }
  }
  if (pl === "Paper🖐") {
    if (co === "Scissors✌" || co === "Lizard🤏") {
      return "Mr. Robot";
    } else {
      return "You";
    }
  }
  if (pl === "Scissors✌") {
    if (co === "Rock👊" || co === "Spock🖖") {
      return "Mr. Robot";
    } else {
      return "You";
    }
  }
  if (pl === "Lizard🤏") {
    if (co === "Rock👊" || co === "Scissors✌") {
      return "Mr. Robot";
    } else {
      return "You";
    }
  }
  if (pl === "Spock🖖") {
    if (co === "Paper🖐" || co === "Lizard🤏") {
      return "Mr. Robot";
    } else {
      return "You";
    }
  }
}

reset.addEventListener("click", function () {
  winner = [0, 0];
  score.innerHTML =
    "<small>Mr. Robot</small>[" +
    winner[0] +
    "] <small>You</small>[" +
    winner[1] +
    "]";
  messager("");
});

// var confetti = {
//   maxCount: 150, //set max confetti count
//   speed: 2, //set the particle animation speed
//   frameInterval: 15, //the confetti animation frame interval in milliseconds
//   alpha: 1.0, //the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
//   gradient: false, //whether to use gradients for the confetti particles
//   start: null, //call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
//   stop: null, //call to stop adding confetti
//   toggle: null, //call to start or stop the confetti animation depending on whether it's already running
//   pause: null, //call to freeze confetti animation
//   resume: null, //call to unfreeze confetti animation
//   togglePause: null, //call to toggle whether the confetti animation is paused
//   remove: null, //call to stop the confetti animation and remove all confetti immediately
//   isPaused: null, //call and returns true or false depending on whether the confetti animation is paused
//   isRunning: null, //call and returns true or false depending on whether the animation is running
// };

// confetti.start = startConfetti;
// confetti.stop = stopConfetti;
// confetti.toggle = toggleConfetti;
// confetti.pause = pauseConfetti;
// confetti.resume = resumeConfetti;
// confetti.togglePause = toggleConfettiPause;
// confetti.isPaused = isConfettiPaused;
// confetti.remove = removeConfetti;
// confetti.isRunning = isConfettiRunning;
// var supportsAnimationFrame =
//   window.requestAnimationFrame ||
//   window.webkitRequestAnimationFrame ||
//   window.mozRequestAnimationFrame ||
//   window.oRequestAnimationFrame ||
//   window.msRequestAnimationFrame;
// var colors = [
//   "rgba(30,144,255,",
//   "rgba(107,142,35,",
//   "rgba(255,215,0,",
//   "rgba(255,192,203,",
//   "rgba(106,90,205,",
//   "rgba(173,216,230,",
//   "rgba(238,130,238,",
//   "rgba(152,251,152,",
//   "rgba(70,130,180,",
//   "rgba(244,164,96,",
//   "rgba(210,105,30,",
//   "rgba(220,20,60,",
// ];
// var streamingConfetti = false;
// var animationTimer = null;
// var pause = false;
// var lastFrameTime = Date.now();
// var particles = [];
// var waveAngle = 0;
// var context = null;

// function resetParticle(particle, width, height) {
//   particle.color =
//     colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
//   particle.color2 =
//     colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
//   particle.x = Math.random() * width;
//   particle.y = Math.random() * height - height;
//   particle.diameter = Math.random() * 10 + 5;
//   particle.tilt = Math.random() * 10 - 10;
//   particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
//   particle.tiltAngle = Math.random() * Math.PI;
//   return particle;
// }

// function toggleConfettiPause() {
//   if (pause) resumeConfetti();
//   else pauseConfetti();
// }

// function isConfettiPaused() {
//   return pause;
// }

// function pauseConfetti() {
//   pause = true;
// }

// function resumeConfetti() {
//   pause = false;
//   runAnimation();
// }

// function runAnimation() {
//   if (pause) return;
//   else if (particles.length === 0) {
//     context.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     animationTimer = null;
//   } else {
//     var now = Date.now();
//     var delta = now - lastFrameTime;
//     if (!supportsAnimationFrame || delta > confetti.frameInterval) {
//       context.clearRect(0, 0, window.innerWidth, window.innerHeight);
//       updateParticles();
//       drawParticles(context);
//       lastFrameTime = now - (delta % confetti.frameInterval);
//     }
//     animationTimer = requestAnimationFrame(runAnimation);
//   }
// }

// function startConfetti(timeout, min, max) {
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   window.requestAnimationFrame = (function () {
//     return (
//       window.requestAnimationFrame ||
//       window.webkitRequestAnimationFrame ||
//       window.mozRequestAnimationFrame ||
//       window.oRequestAnimationFrame ||
//       window.msRequestAnimationFrame ||
//       function (callback) {
//         return window.setTimeout(callback, confetti.frameInterval);
//       }
//     );
//   })();
//   var canvas = document.getElementById("confetti-canvas");
//   if (canvas === null) {
//     canvas = document.createElement("canvas");
//     canvas.setAttribute("id", "confetti-canvas");
//     canvas.setAttribute(
//       "style",
//       "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"
//     );
//     document.body.prepend(canvas);
//     canvas.width = width;
//     canvas.height = height;
//     window.addEventListener(
//       "resize",
//       function () {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       },
//       true
//     );
//     context = canvas.getContext("2d");
//   } else if (context === null) context = canvas.getContext("2d");
//   var count = confetti.maxCount;
//   if (min) {
//     if (max) {
//       if (min == max) count = particles.length + max;
//       else {
//         if (min > max) {
//           var temp = min;
//           min = max;
//           max = temp;
//         }
//         count = particles.length + ((Math.random() * (max - min) + min) | 0);
//       }
//     } else count = particles.length + min;
//   } else if (max) count = particles.length + max;
//   while (particles.length < count)
//     particles.push(resetParticle({}, width, height));
//   streamingConfetti = true;
//   pause = false;
//   runAnimation();
//   if (timeout) {
//     window.setTimeout(stopConfetti, timeout);
//   }
// }

// function stopConfetti() {
//   streamingConfetti = false;
// }

// function removeConfetti() {
//   stop();
//   pause = false;
//   particles = [];
// }

// function toggleConfetti() {
//   if (streamingConfetti) stopConfetti();
//   else startConfetti();
// }

// function isConfettiRunning() {
//   return streamingConfetti;
// }

// function drawParticles(context) {
//   var particle;
//   var x, y, x2, y2;
//   for (var i = 0; i < particles.length; i++) {
//     particle = particles[i];
//     context.beginPath();
//     context.lineWidth = particle.diameter;
//     x2 = particle.x + particle.tilt;
//     x = x2 + particle.diameter / 2;
//     y2 = particle.y + particle.tilt + particle.diameter / 2;
//     if (confetti.gradient) {
//       var gradient = context.createLinearGradient(x, particle.y, x2, y2);
//       gradient.addColorStop("0", particle.color);
//       gradient.addColorStop("1.0", particle.color2);
//       context.strokeStyle = gradient;
//     } else context.strokeStyle = particle.color;
//     context.moveTo(x, particle.y);
//     context.lineTo(x2, y2);
//     context.stroke();
//   }
// }

// function updateParticles() {
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var particle;
//   waveAngle += 0.01;
//   for (var i = 0; i < particles.length; i++) {
//     particle = particles[i];
//     if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
//     else {
//       particle.tiltAngle += particle.tiltAngleIncrement;
//       particle.x += Math.sin(waveAngle) - 0.5;
//       particle.y +=
//         (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
//       particle.tilt = Math.sin(particle.tiltAngle) * 15;
//     }
//     if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
//       if (streamingConfetti && particles.length <= confetti.maxCount)
//         resetParticle(particle, width, height);
//       else {
//         particles.splice(i, 1);
//         i--;
//       }
//     }
//   }
// }
// // startConfetti();
// // export { startConfetti, stopConfetti, removeConfetti };
