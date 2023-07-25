const edad = document.getElementById("edad");

//funcion ejercicio1
function mayor_edad() {
    var edad=document.getElementById('edad').value;
    
 edad >= 18 ? document.getElementById('area1').value="Usted es mayor de edad": document.getElementById('area1').value=("Usted es menor de edad")



}
//funcion ejercicio2
function limpiar () {
  var x= true;
  document.getElementById("Nexamen").value = "";
    document.getElementById("Ntareas").value = "";
    document.getElementById("Nasis").value = ""; 
    document.getElementById("Ninvest").value = "";
    document.getElementById("nota_final").value="";  
    alert("su nota no puede ser menor a 0 o mayor a 10");
    Nexamen=0
    Ntareas=0
    Nasis=0
    Ninvest=0
}


//funcion ejercicio2
function calcular_nota () {
  var Nexamen=document.getElementById("Nexamen").value;
  var Ntareas=document.getElementById("Ntareas").value;
  var Nasis = document.getElementById("Nasis").value;
  var Ninvest = document.getElementById("Ninvest").value;
  if (Nexamen<0 || Nexamen>10 || Ntareas<0 || Ntareas>10 || Nasis<0 || Nasis>10 || Ninvest<0 || Ninvest>10) {
    
    limpiar();
  } else {
    Nexamen=Nexamen*0.20
    
    Ntareas=Ntareas*0.4
    
    Nasis=Nasis*0.1
    
    Ninvest=Ninvest*0.3
    
    var nota_final1=Nexamen+Ntareas+Nasis+Ninvest
    
//document.getElementById('nota_final').value=nota_final1;  
var area=document.getElementById('nota_final');
  area.textContent=nota_final1
//var name="Miguel Sosa"
 var name=document.getElementById('Nombre');
 name.textContent="Miguel Sosa"
  var area=document.getElementById('Carnet');
  area.textContent="Carnet: 0001"

}

}


//funcion ejercicio3
function categoria(){
  var nbre=document.getElementById("nbre").value;
  var slrio=document.getElementById("slrio").value;
  var ctgor=document.getElementById("ctgor").value;
  var incre
  var nsalario
  var nvo
if(nbre==="" || slrio==="" || ctgor==="") {
  alert("Rellene todos los campos");
}else if(ctgor!=="a" && ctgor!=="b" && ctgor!=="c" && ctgor!=="d") {
alert("Su categoria no existe");
} {
  var opcion = ctgor;

switch (opcion) {
  case "a":
    incre=slrio*0.15
  //alert(incre);
  nsalario=parseInt(slrio)+parseInt(incre)
  //alert(nsalario);
  var nvo=document.getElementById('Nvos');
  nvo.textContent=nsalario
    //alert("a")
    //console.log("Opción 1 seleccionada");
    break;
  case "b":
    incre=slrio*0.30
  //alert(incre);
  nsalario=parseInt(slrio)+parseInt(incre)
  //alert(nsalario);
  nvo=document.getElementById('Nvos');
  nvo.textContent=nsalario
    //console.log("Opción 2 seleccionada");
    break;
  case "c":
    incre=slrio*0.10
  //alert(incre);
  nsalario=parseInt(slrio)+parseInt(incre)
  alert(nsalario);
  nvo=document.getElementById('Nvos');
  nvo.textContent=nsalario
    //console.log("Opción 3 seleccionada");
    break;
  case "d":
    incre=slrio*0.20
    //alert(incre);
    nsalario=parseInt(slrio)+parseInt(incre)
    //alert(nsalario);
    nvo=document.getElementById('Nvos');
    nvo.textContent=nsalario
    break;
  default:
 
    break;
}
}

}


//Ejercicio 4
function calcular_num() {
  var Num1=document.getElementById("Num1").value;
  var Num2=document.getElementById("Num2").value;
  var numtot
  if (Num1>Num2) {  
  //alert(Num1);
  numtot=document.getElementById('nnum');
  numtot.textContent=("El numero mayor es:"+Num1)
} {
 // alert(Num2);
  numtot=document.getElementById('nnum');
  numtot.textContent=("El numero mayor es:"+Num2)
}
}

//Ejercicio 5
function calcular_porc() {
  var opcion=document.getElementById("miopcion").value;
  var expresion=opcion
  var resul
  switch (expresion) {
    case opcion.value="opcion1":
        resul=document.getElementById('porc');
    resul.textContent=("Su porcentaje de descuento es 5%")
      break;
    case opcion.value="opcion2":
      resul=document.getElementById('porc');
      resul.textContent=("Su porcentaje de descuento es 10%")
      break;
    case opcion.value="opcion3":
      resul=document.getElementById('porc');
      resul.textContent=("Su porcentaje de descuento es 20%")
      break;
  
    default:
  
}
    
}

//Ejercicio 6
function calcular_porcedes() {
var origen=document.getElementById("miorigen").value; 
var destino=document.getElementById("midest").value;
var xdestino=destino
  var xresul
  switch(origen) {
    case origen.value="opcion1":
 
    
        switch(xdestino) {
        case destino.value="dest1":
 
        xresul=document.getElementById('porc1');
        xresul.textContent=(" Descuento del 5%")
        break;
        case destino.value="dest2":
          xresul=document.getElementById('porc1');
          xresul.textContent=(" Descuento del 10%")
        break;
        case destino.value="dest3":
          xresul=document.getElementById('porc1');
          xresul.textContent=(" Descuento del 15%")
        break;

        }
    break;
    case(origen.value="opcion2"):
    
    xresul=document.getElementById('porc1');
    xresul.textContent=(" no tiene Descuento")
    break;
    case(origen.value="opcion3"):
    
    xresul=document.getElementById('porc1');
    xresul.textContent=(" no tiene Descuento")
    break;

      } 
      
  }
  




//Ejercicio 7
function calcular_not() {
  var nota1=document.getElementById("Not1").value; 
  var nota2=document.getElementById("Not2").value;
  var nf1=nota1*0.10
  var nf2=nota2*0.70
  var npon=(nf1+nf2)/(0.10+0.7)

xresul=document.getElementById('Notpon');
xresul.textContent=("Su nota final es de :"+npon)

}


//Ejercicio 8
function mostrarFecha() {
  
}


function calcular_viaje () {
  var Nexamen=document.getElementById("Nexamen").value;
  var Ntareas=document.getElementById("Ntareas").value;
  const fechaInput = document.getElementById("fechaInput").value;
  var Ninvest = document.getElementById("fechaRet").value;
  var xname
  
  // Obtener los valores de los inputs

switch (true) {
  case Nexamen === '':
  case Ntareas === '':
  case fechaInput === '':
  case Ninvest === '':
    alert('Por favor, rellene todos los datos.');
    break;
  case new Date(Ninvest) < new Date(fechaInput):
    alert('Error en las fechas. La fecha de retorno no puede ser inferior a la de salida.');
    break;
  default:
    document.getElementById('name').innerText = ("Salida de: "+Nexamen);
    document.getElementById('dest').innerText =("Su lugar de destino es: "+Nexamen);
    document.getElementById('fechaH1').innerText = ("Su fecha de salida es: "+fechaInput);
    document.getElementById('fechaH2').innerText = ("Su fecha de retorno es: "+Ninvest);
    break;
}
}



//Ejercicio 9
function calcular() {
  const valores = [];
  const inputs = document.querySelectorAll('input[type="number"]');
  let negativos = 0;
  let positivos = 0;
  let multiplos = 0;
  let acumulado = 0;

  for (let i = 0; i < inputs.length; i++) {
    const valor = parseInt(inputs[i].value);
    valores.push(valor);

    if (valor < 0) {
      negativos++;
    } else if (valor > 0) {
      positivos++;
    }

    if (valor % 15 === 0) {
      multiplos++;
    }

    if (valor % 2 === 0) {
      acumulado += valor;
    }
  }

  document.getElementById('negativos').textContent = negativos;
  document.getElementById('positivos').textContent = positivos;
  document.getElementById('multiplos').textContent = multiplos;
  document.getElementById('acumulado').textContent = acumulado;
}

//Ekercicio10
function generarTabla() {
  const numero = parseInt(document.getElementById('numero').value);
  const tablaDiv = document.getElementById('tabla');
  tablaDiv.innerHTML = ''; // Limpiar contenido anterior

  if (numero) {
    const tabla = document.createElement('table');
    tabla.classList.add('multiplication-table');

    for (let i = 1; i <= 10; i++) {
      const fila = document.createElement('tr');
      const multiplicando = document.createElement('td');
      multiplicando.textContent = numero + ' x ' + i;
      const resultado = document.createElement('td');
      resultado.textContent = (" = "+numero * i);

      fila.appendChild(multiplicando);
      fila.appendChild(resultado);
      tabla.appendChild(fila);
    }

    tablaDiv.appendChild(tabla);
  }
}

//Ejercicio 11
function generarTemp (){
 var celsius =document.getElementById('celsius').value;
var fahrenheit = (celsius * 9/5) + 32;
//console.log(fahrenheit);  // Resultado: 77
var xresul
switch (true) {
  case (fahrenheit >= 14 && fahrenheit < 32):
    xresul=document.getElementById('temperatura');
    xresul.textContent=("Temperatura en Fahrenheit: "+fahrenheit+ "   Temperatura baja");
    break;
  case (fahrenheit >= 32 && fahrenheit < 68):
    xresul=document.getElementById('temperatura');
    xresul.textContent=("Temperatura en Fahrenheit: "+fahrenheit+ "   Temperatura adecuada");
    break;
  case (fahrenheit >= 68 && fahrenheit < 96):
    xresul=document.getElementById('temperatura');
    xresul.textContent=("Temperatura en Fahrenheit: "+fahrenheit+ "   Temperatura alta");
    break;
  default:
    xresul=document.getElementById('temperatura');
    xresul.textContent=("Temperatura en Fahrenheit: "+fahrenheit+ "   Temperatura desconocida");
    break;
}

}


//Ejercicio 12
// Obtener los formularios y el elemento para mostrar los resultados
function generarProm() {

  const m1 =parseInt(document.getElementById('manana1').value);
  
  const m2 =parseInt(document.getElementById('manana2').value);
  
  const m3 =parseInt(document.getElementById('manana3').value);
  
  const m4 =parseInt(document.getElementById('manana4').value);
  
  const m5 =parseInt(document.getElementById('manana5').value);
  
  var promañana
  promañana=(m1+m2+m3+m4+m5)/5
  alert(promañana)
  

  var t1 =parseInt(document.getElementById("tarde1").value);
  var t2 =parseInt(document.getElementById("tarde2").value);
  var t3 =parseInt(document.getElementById("tarde3").value);
  var t4 =parseInt(document.getElementById("tarde4").value);
  var t5 =parseInt(document.getElementById("tarde5").value);
  var t6 =parseInt(document.getElementById("tarde6").value);
  var t1 =parseInt(document.getElementById("tarde1").value);

  var n1 =parseInt(document.getElementById("noche1").value); 
  var n2 =parseInt(document.getElementById("noche2").value); 
  var n3 =parseInt(document.getElementById("noche3").value); 
  var n4 =parseInt(document.getElementById("noche4").value); 
  var n5 =parseInt(document.getElementById("noche5").value); 
  var n6 =parseInt(document.getElementById("noche6").value); 
  var n7 =parseInt(document.getElementById("noche7").value); 
  var n8 =parseInt(document.getElementById("noche8").value); 
  var n9 =parseInt(document.getElementById("noche9").value); 
  var n10 =parseInt(document.getElementById("noche10").value); 
  var n11 =parseInt(document.getElementById("noche11").value); 

  var promtarde
  var pronoche
  promtarde=parseInt(t1+t2+t3+t4+t5+t6)/6
  pronoche=parseInt(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11)/11

alert(promtarde);
alert(pronoche);
var xresul
if(promañana>promtarde && promañana>pronoche) {
  xresul=document.getElementById('result');
  xresul.textContent=("Turno matutino posee el promedio de edades mayor");
} else if (promtarde>promañana && promtarde>pronoche){
  xresul=document.getElementById('result');
  xresul.textContent=("Turno vespertino posee el promedio de edades mayor");
} else {
  xresul=document.getElementById('result');
  xresul.textContent=("Turno nocturno posee el promedio de edades mayor");
}
var xresul1
  xresul1=document.getElementById('promman');
  xresul1.textContent=("Edad promedio de turno matutino es:"+promañana);
  var xresul2
  xresul2=document.getElementById('promtar');
  xresul2.textContent=("Edad promedio de turno vespertino es:" +promtarde);
  var xresul3
  xresul3=document.getElementById('promnoc');
  xresul3.textContent=("Edad promedio de turno nocturno es:"+pronoche);

}


//Mostrar inputs segun turno elegido
/*function mostrarInputs() {
  var turnoSelect = document.getElementById("turno");
  var inputsMatutino = document.getElementById("inputsMatutino");
  var inputsVespertino = document.getElementById("inputsVespertino");
  var inputsNoche = document.getElementById("noche");
  inputsMatutino.style.display = "none";
  inputsVespertino.style.display = "none";
  inputsNoche.style.display="none";
  
  if (turnoSelect.value === "matutino") {
    inputsMatutino.style.display = "block";
  } else if (turnoSelect.value === "vespertino") {
    inputsVespertino.style.display = "block";
  } else if (turnoSelect.value === "noche") {
  inputsNoche.style.display="block";
*/
  