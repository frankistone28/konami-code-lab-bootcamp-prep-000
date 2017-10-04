const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const userKeys = [];
var body = document.querySelector("body");
var index = 0;

function init() {
    body.addEventListener("keydown", function(e){
      userKeys.push(parseInt(e.which));
      if (userKeys.length > code.length) {
        userKeys.shift();
      }
      if (userKeys === code) {
        alert("Hurray");
      }
    });
}

init();
