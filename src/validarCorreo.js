const formElemento = document.getElementById('form');

const validarCorreo = () => {
    const expreRegCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const correo = formElemento.querySelector('#form__correo--input');
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


export default validarCorreo;