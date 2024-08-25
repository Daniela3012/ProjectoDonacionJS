import donacion from "./formulario";

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

export default agregarDatos;