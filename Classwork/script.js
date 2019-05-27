/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck_x = 210;
var puck_y = 210;


document.getElementById('puck').style.left = puck_x + 'px';
document.getElementById('puck').style.top = puck_x + 'px';

document.getElementById('left').addEventListener('click', function(){
    puck_x -= 50
    document.getElementById('puck').style.left = puck_x + 'px';
});

document.getElementById('right').addEventListener('click', function(){
    puck_x -= +50
    document.getElementById('puck').style.left = puck_x + 'px';
});








