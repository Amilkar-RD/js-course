// Ejercicio : Estudiar el comportamiento del alcance o contexto funcional

function funcion1(){
    var a=2;

    function funcion2(){
        var b = 5;

        //Funcion3 tiene alcancel funcional para las variables a y b    
        function funcion3(){ 
            console.log(a,b);
        }
    }
}

