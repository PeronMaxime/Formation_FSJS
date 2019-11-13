var nombre = 0;
var repetion = function(){
    alert('Coucou');
    nombre++;
    if(nombre<4){
        setTimeout(repetion, 2000);
    }
}
repetion();