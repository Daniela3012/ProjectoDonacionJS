const formBoxes = document.querySelectorAll('.form--box');
const btnsForm = document.querySelectorAll('.form--btnnext');

formBoxes.forEach((box, i)=>{
    box.setAttribute('data-form', i);
})


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

export default handleChangeForm;

