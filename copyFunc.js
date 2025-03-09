// JS from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function myFunction() {
  navigator.clipboard.writeText("Wufee");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
