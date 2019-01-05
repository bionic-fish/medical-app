// Modal App Prototype

var modal = document.getElementById('appModal');
var btn = document.getElementById('appBtn');
var span = document.getElementsByClassName('closeApp')[0];

// When user clicks the button, open the appModal
btn.onclick = function() {
    modal.style.display = "block";
}
// When user clicks on the (x), close the appModal
span.onclick = function() {
    modal.style.display = "none";
}
// When user clicks anywhere outside of the appModal, close appModal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "'none";
    }
}