const formElemento = document.getElementById('form');

const validarMetodo = () => {
    const metodo = formElemento.querySelector('input[name="metodo"]:checked');
    if (metodo) {
       return metodo.value;
    } else console.log('no hay metodo');
};


export default validarMetodo;