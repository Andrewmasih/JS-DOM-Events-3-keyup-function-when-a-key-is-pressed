
/* 'keyup' is applied when key is released */

document.addEventListener ("keyup", function (event) {
  if (event.key == "l"|| event.key == "L") {
    lightTheme();
  
  }

  /* IF the L key on the keyboard is pressed and released, or D key is pressed and released the "light" or "dark" theme will be applied, which pops up an alert.
   */


  if (event.key == "d" || event.key == "D") {
    darkTheme();
  }

  /* notice the 'event' (parameters) in our function, this contains the properties of the event, such as the value of the key that was pressed */


});



function lightTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");
}

function darkTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");
}