const inputs = document.querySelectorAll("input")

//regex patterns

const patterns = {
    number: /^((\d){3}-?(\d){3}-?(\d){4})$|^((\d){3}\.?(\d){3}\.?(\d){4})$|^((\d){3}\s?(\d){3}\s?(\d){4})$/,
    username: /^[a-z\d]{5,12}$/i,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password:/^[\d\w@-]{8,20}$/i
};

// validation functions

    function validate(field, regex){
        if(regex.test(field.value)){
            field.className = "valid";
        }else{
            field.className = "invalid";
        }
    }

//event function

inputs.forEach((input) => {
   input.addEventListener('keyup', (e)=>{
    validate(e.target, patterns[e.target.attributes.name.value]);
   });
});

// password validation

