var dodger = document.getElementById('dodger');

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  if (left >= 360) {
    dodger.style.left = `${left + 0}px`;
  }
  
  else if (left > 0) {
    dodger.style.left = `${left + 10}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight();
  }
});
