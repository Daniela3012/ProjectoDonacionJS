const formElemento = document.getElementById('form');

const validarCantidad = () => {
    const expreRegCantidad = /^\d+(\.\d+)?$/;
    const cantidad = formElemento.querySelector('#form__cantidad--input');
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

export default validarCantidad;