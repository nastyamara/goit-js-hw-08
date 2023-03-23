import throttle from "lodash.throttle";

let formData = {};
const STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('form');
const submitForm = document.querySelector('button')

// console.log(formRef.email.value);

formRef.addEventListener('input', throttle(onInputChange, 200));
formRef.addEventListener('submit', onSubmitClick);





function onInputChange(e) { 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(e.target.name)
    // console.log(e.target.value)
    formData[e.target.name] = e.target.value;


};
populateData();

function onSubmitClick(e) {
    e.preventDefault();

    if (formRef.email.value.length > 1 && formRef.message.value.length > 1) {
        formData.email = formRef.email.value;
        formData.message = formRef.message.value;
        localStorage.removeItem(STORAGE_KEY);
        formRef.reset();
        console.log(formData);
        formData = {};
    }
    else { window.alert('Заповніть усі поля!!!') }
};



function populateData() {
   
    if (localStorage.getItem(STORAGE_KEY) !== null) {
        const savedData = localStorage.getItem(STORAGE_KEY);
        const parsedData = JSON.parse(savedData);

        // console.log(Object.keys(parsedData));
        Object.entries(parsedData).forEach(([name, value]) => {
           
            formData[name] = value;
            formRef.elements[name].value = value;

        })
     
    }

    //     if (parsedData.email === null) {
    //         formRef.message.value = parsedData.message;
    //   }
    // else if (parsedData.message === null)
    //     {
    //         formRef.email.value = parsedData.email;
           
    //     } else {
    //     formRef.message.value = parsedData.message;
    //     formRef.email.value = parsedData.email;}
    // }
    // else {
        
    //     return;
    // }
    }



// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };