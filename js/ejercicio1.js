//  lea 10 números por teclado y multiplicarlos por 3. Luego mostrarlos en pantalla de forma descendente
'use strict'

var lista = document.getElementById('lista');
var ListaNum = document.getElementById('ListaNum');
var ListaMul = document.getElementById('ListaMul');
var ListaDes = document.getElementById('ListaDes');

var fragmentoLis = document.createDocumentFragment();
var fragmentoLisNum = document.createDocumentFragment();
var fragmentoLisMul = document.createDocumentFragment();
var fragmentoLisDes = document.createDocumentFragment();

var vector = new Array(10);
var vector2 = new Array(10);
var vector3 = new Array(10);

for (let index = 0; index < vector.length; index++) {
    vector[index] = Number(prompt("Ingrese número: "))
}

for (let index = 0; index < vector2.length; index++) {
    vector2[index] = vector[index] * 3 
}

for (let index = 0; index < vector3.length; index++) {
    vector3[index] = vector2[index]
}

vector3.reverse();

vector.forEach((dato,index)=>{
    var li = document.createElement('li');
    li.textContent = dato;
    fragmentoLis.appendChild(li)

    var opcion = document.createElement('option')
    opcion.textContent = dato;
    opcion.setAttribute('value',index);
    fragmentoLisNum.appendChild(opcion);
})

vector2.forEach((dato,index)=>{
    var opcion2 = document.createElement('option')
    opcion2.textContent = dato;
    opcion2.setAttribute('value',index);
    fragmentoLisMul.appendChild(opcion2);
})

vector3.forEach((dato,index)=>{
    var opcion3 = document.createElement('option')
    opcion3.textContent = dato;
    opcion3.setAttribute('value',index);
    fragmentoLisDes.appendChild(opcion3);
})

lista.appendChild(fragmentoLis)
ListaNum.appendChild(fragmentoLisNum);
ListaMul.appendChild(fragmentoLisMul);
ListaDes.appendChild(fragmentoLisDes);

setTimeout(() => {
    document.getElementById('lista').remove();
}, 3000);






