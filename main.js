// function([string1, string2], target id, [color1, color2])
consoleText([
  'Good Morning, my Dearest Daisy💖', 
  'I just got off the call with you... and I can’t stop smiling 😊', 
  'I couldn’t sleep because all I can think about is you 😴💭', 
  'So, I decided to make this just to show how much I appreciate you'], 
  'text', 
  ['#ff66b2', '#ff99cc', '#ffccff']
);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  var currentWordIndex = 0; // To track the current word being displayed

  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[currentWordIndex].substring(0, letterCount);
      window.setTimeout(function() {
        letterCount += x; // Increase the letter count to start showing letters
        waiting = false;
      }, 1000);
    } else if (letterCount === words[currentWordIndex].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        currentWordIndex++; // Move to the next word in the array
        if (currentWordIndex < words.length) {
          letterCount = 0; // Reset letter count for next word
          target.innerHTML = ''; // Clear the target element for the new word
        }
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[currentWordIndex].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);

  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden';
      visible = false;
    } else {
      con.className = 'console-underscore';
      visible = true;
    }
  }, 400);
}

document.getElementById('glowing-button').addEventListener('click', function() {
  window.location.href = 'load1.html';  
});
