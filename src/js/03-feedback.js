
import throttle from 'lodash.throttle';
const inpt = document.querySelector(".feedback-form");
// console.log(inpt);
const inEm = inpt.querySelector("input");
// console.log(inEm);
const inText = inpt.querySelector("textarea");
// console.log(inText);
let modalData = {};
// console.log(modalData);
const LOCAL_DATA = "feedback-form-state";

inpt.addEventListener('input', throttle(watchInput, 500));
inpt.addEventListener('submit', clear)
writerForm();
function watchInput(event) {
    modalData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_DATA, JSON.stringify(modalData));
    // console.log(localStorage.getItem(LOCAL_DATA));
}
function writerForm() {
    if (localStorage.getItem(LOCAL_DATA)) {
        modalData = JSON.parse(localStorage.getItem(LOCAL_DATA));
        if (modalData.email) {
            inEm.value=modalData.email
        }
        if (modalData.message) {
            inText.value=modalData.message
        }
    }
}
function clear(event) {
    event.preventDefault();
    const email = inEm.value;
    const message = inText.value;
    if (email === "" || message === "") {
        return alert("Всі поля повинні бути заповнені");
    };
    localStorage.removeItem(LOCAL_DATA);
    
    console.log(modalData);
    modalData = {};
    inpt.reset();
}


// function onFormSubmit(event) {
    

//     const formElements = event.currentTarget.elements
    
    
 
    
//   }
//     const formData = {
//         email,
//         password,        
//     }     
//     console.log('Дані авторицації: ', formData);   
//     event.currentTarget.reset();   
// }