// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    targetParagraph();
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  function targetParagraph() {
      document.getElementById('text').innerHTML = "This is really cool!"
  }