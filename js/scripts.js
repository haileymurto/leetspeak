var re = /e/gi;
var userText = function(input) {
var newText = userText.replace(/e/gi, '3');
console.log(newText);


};

$(document).ready(function() {
  $("form#leetspeak").submit(function(event) {
    var result = newText(input);
  $("#result").show();

  event.preventDefault();
  });

});



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
