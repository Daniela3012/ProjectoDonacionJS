const formElemento = document.getElementById('form');

const validarNombre = () => {
    const expreRegNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const nombre = formElemento.querySelector('#form__name--input');
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


export default validarNombre;