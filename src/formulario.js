import validarCantidad from "./validarCantidad";
import validarNombre from "./validarNombre";
import validarCorreo from "./validarCorreo";
import validarMetodo from "./validarMetodo";
import agregarDatos from "./mostrarResumen";
import handleChangeForm from "./btnSiguiente";


const formElemento = document.getElementById('form');

let donacion = {}


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
        agregarDatos();
        console.log(donacion);
    }

    if (eve.target.id == 'form__confirmacion--btnnext') {
        formElemento.querySelector('.form__confirmacion--btnnext').addEventListener('click', handleChangeForm);
    }
});

export default donacion;







