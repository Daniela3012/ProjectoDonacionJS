'use strict';

const formBoxes = document.querySelectorAll('.form--box');
const btnsForm = document.querySelectorAll('.form--btnnext');

formBoxes.forEach((box, i)=>{
    box.setAttribute('data-form', i);
});


const handleChangeForm = (event) => {
    event.preventDefault();
    const numPage=parseInt(event.target.getAttribute('data-btn-form'));
    const form=document.querySelector('.form');
    const translateValue = -20 * (numPage + 1);
    form.style.transform = `translateX(${translateValue}%)`;
};






btnsForm.forEach((btn, i)=>{
    btn.setAttribute('data-btn-form', i);
});

const formElemento$4 = document.getElementById('form');

const validarCantidad = () => {
    const expreRegCantidad = /^\d+(\.\d+)?$/;
    const cantidad = formElemento$4.querySelector('#form__cantidad--input');
    if (cantidad.value.trim()) {
        if (expreRegCantidad.test(cantidad.value.trim())) {
            cantidad.parentNode.classList.remove('form--input--error'); 
            cantidad.classList.remove('error');
            return true;
        } else {
            cantidad.parentNode.classList.add('form--input--error');
            cantidad.classList.add('error');
            return false;
        }
    }

};

const formElemento$3 = document.getElementById('form');

const validarNombre = () => {
    const expreRegNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const nombre = formElemento$3.querySelector('#form__name--input');
    if (nombre.value.trim()) {
        if (expreRegNombre.test(nombre.value.trim())) {
            nombre.parentNode.classList.remove('form--input--error');
            nombre.classList.remove('error');
            return true;
        } else {
            console.log('no ha pasado el test');
            nombre.parentNode.classList.add('form--input--error');
            console.log(nombre.parentNode);
            nombre.classList.add('error');
            return false;
        }
        
    }
};

const formElemento$2 = document.getElementById('form');

const validarCorreo = () => {
    const expreRegCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const correo = formElemento$2.querySelector('#form__correo--input');
    if (correo.value.trim()) {
        if (expreRegCorreo.test(correo.value.trim())) {
            correo.parentNode.classList.remove('form--input--error');
            correo.classList.remove('error');
            return true;
        } else {
            correo.parentNode.classList.add('form--input--error');
            correo.classList.add('error');
            return false;
        }
        
    }
};

const formElemento$1 = document.getElementById('form');

const validarMetodo = () => {
    const metodo = formElemento$1.querySelector('input[name="metodo"]:checked');
    if (metodo) {
       return metodo.value;
    } else console.log('no hay metodo');
};

const formElemento = document.getElementById('form');

let donacion = {};


formElemento.addEventListener('keyup', (eve)=>{

    if (eve.target.tagName == 'INPUT') {
    

        if (eve.target.id == 'form__cantidad--input') {
            if (validarCantidad()) {
                formElemento.querySelector('.form__cantidad--btnnext').addEventListener('click', handleChangeForm);
                donacion.cantidad = parseFloat(eve.target.value);
                console.log(donacion);
            } else {
                formElemento.querySelector('.form__cantidad--btnnext').removeEventListener('click', handleChangeForm);
            }
        }


        if (eve.target.id === 'form__name--input') {
            validarNombre();
            if (validarNombre()) {
                donacion.nombre = eve.target.value;
            }
        }
        if (eve.target.id === 'form__correo--input') {
            validarCorreo();
            if (validarCorreo()) {
                donacion.correo = eve.target.value;
            }
        }
        if (validarNombre() && validarCorreo()) {
            formElemento.querySelector('.form__datos--btnnext').addEventListener('click', handleChangeForm);
            console.log(donacion);
        }

    }



});



formElemento.addEventListener('click', (eve)=>{
    if (eve.target.name == 'metodo') {
        donacion.metodo=validarMetodo();
        formElemento.querySelector('.form__metodo--btnnext').addEventListener('click', handleChangeForm);
        agregarDatos$1();
        console.log(donacion);
    }

    if (eve.target.id == 'form__confirmacion--btnnext') {
        formElemento.querySelector('.form__confirmacion--btnnext').addEventListener('click', handleChangeForm);
    }
});

const cantidadDato=document.querySelector('.form--dato--cantidad');
const receptorDato=document.querySelector('.form--dato--receptor');
const correoDato=document.querySelector('.form--dato--correo');
const metodo=document.querySelector('.form--dato--metodo');

const agregarDatos = () => {
    cantidadDato.textContent=`$ ${donacion.cantidad}`;
    receptorDato.textContent=donacion.nombre;
    correoDato.textContent=donacion.correo;
    metodo.textContent=`Transferencia por ${donacion.metodo}`;
};

var agregarDatos$1 = agregarDatos;
