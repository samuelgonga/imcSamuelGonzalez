// function clickBtnCalcular(){
//     var txtPeso = document.getElementById("txtPeso");
//     var peso = txtPeso.value;
    
//     var txtAltura = document.getElementById("txtAltura");
//     var altura = txtAltura.value;
    
//     var imc = peso / (altura*altura);
//     alert(imc)
// }

function calcular(){
    if(document.getElementById("txtPeso").value && document.getElementById("txtAltura").value){
        var txtPeso = document.getElementById("txtPeso").value;
        var txtAltura = document.getElementById("txtAltura").value;
        const imc = txtPeso / (txtAltura*txtAltura);        
        const respuesta = document.getElementById("respuesta") 
        respuesta.textContent=`tu indice de masa corporal es: ${imc}`
        if (imc <= 18.4) {
            document.getElementById("bajoPeso").style.backgroundColor = "yellow";
            habilitarBorrar();
        } else {
            if (imc > 18.4 && imc <= 24.9) {
                document.getElementById("pesoNormal").style.backgroundColor = "green";
                habilitarBorrar();
            } else {
                if (imc >= 25 && imc <= 29.9) {
                    document.getElementById("sobrePeso").style.backgroundColor = "orange";
                    habilitarBorrar();
                } else {
                    document.getElementById("obesidad").style.backgroundColor = "red";
                    habilitarBorrar();
                }
            }
        }                                      
    }else{
        alert("No has llenado todos los datos...")
    }   
}

function borrar(){
    document.getElementById("bajoPeso").style.backgroundColor="white";
    document.getElementById("pesoNormal").style.backgroundColor="white";
    document.getElementById("sobrePeso").style.backgroundColor="white";
    document.getElementById("obesidad").style.backgroundColor="white";
    document.getElementById("respuesta").remove;
    habilitarCalcular();
}

function habilitarBorrar(){
    document.getElementById("btnCalcular").disabled = true;
    document.getElementById("btnBorrar").disabled = false;
}

function habilitarCalcular(){
    document.getElementById("btnBorrar").disabled = true;
    document.getElementById("btnCalcular").disabled = false;
}