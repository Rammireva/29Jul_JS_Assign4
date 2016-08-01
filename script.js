function showCoordinates(){
    var mousearea = document.getElementById('mouse_area');
    mousearea.onmouseover = function(){
        var x = event.clientX;
        var y = event.clientY;
        var date = new Date();
        document.getElementById('demo').innerHTML += 'X: '+x+'; Y: '+y+'; Time: '+date+'<br>';
    }
}

showCoordinates();