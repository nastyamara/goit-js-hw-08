import throttle from "lodash.throttle";


const formData = {};

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('form');
const submitForm = document.querySelector('button')

// console.log(formRef.email);

formRef.addEventListener('input', throttle(onInputChange, 500));
submitForm.addEventListener('click', onSubmitClick);


function onInputChange(e) { 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(e.target.name)
    // console.log(e.target.value)
    formData[e.target.name] = e.target.value;
};

function onSubmitClick(e) {
    
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    formRef.reset();
 
    console.log(formData);


}

function populateData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData) {
        // console.log(savedData.email);
        formRef.email.value = savedData.email;
        formRef.message.value = savedData.message;
    }
    }

populateData();

// console.log(JSON.parse(localStorage.getItem('feedback-form-state')));