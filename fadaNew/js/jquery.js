$(document).ready(function () {

    manipulateDOM();
});
function manipulateDOM(){
    var hiHeaders = $('h1');
    hiHeaders.text('hello world');
    var h3Headers = $('h3');
    h3Headers.css('color', '#37887D');
   // h3Headers.first.css('text-decoration', 'line-through');
    var lasth3Headers = $('h3:last');
    lasth3Headers.css('background-color', '#53226A');
}