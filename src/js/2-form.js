const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const textarea = document.querySelector(".form-textarea");
const formData = {
    email: "",
    message: ""
};
if (localStorage.getItem('feedback-form-state') !== null) {
    let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
    formData.email = localData.email;
    formData.message = localData.message;
}
textarea.value = formData.message;
input.value = formData.email;



form.addEventListener("input", function (event) {
    formData.email = input.value;
    formData.message = textarea.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

});

form.addEventListener("submit", event => {
    event.preventDefault();
    
    if (!(formData.email && formData.message)) {
        alert("Fill please all fields");
        return
    }
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    form.reset();
})


   