const inputs = document.querySelectorAll("input")
var pword=document.querySelector( "#pword")
var msg = document.querySelector('#message')
var str = document.querySelector('#strength')
var valid = document.querySelector('#validity')



//regex patterns

const patterns = {
    number: /^((\d){3}-?(\d){3}-?(\d){4})$|^((\d){3}\.?(\d){3}\.?(\d){4})$|^((\d){3}\s?(\d){3}\s?(\d){4})$/,
    username: /^[a-z\d]{5,12}$/i,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password:/^[\d\w@]{8,20}$/i
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


passpattern = patterns.password
function passtr(data,val){
    if(data <8){
        str.innerText= "very weak"
        msg.style.color = "#ff5925"
        valid.innerText = " and invalid. add numbers, @, capital letters "

    }
    else if(data >=8 && data <13 && val=="valid"){
        str.innerText= " okay"
        msg.style.color = "orange"
        valid.innerText = " and valid"
    }
    else if(data >= 13 && data <=20 && val=="valid"){
        str.innerText = "strong"
        msg.style.color = "#26d730" 
        valid.innerText = " and valid"  
    }
    else{
        str.innerText = "too long, max: 20 char"
        msg.style.color = "#ff5925"
        valid.innerText = ""
    }

}

pword.addEventListener('keyup',(el)=>{
    passtr(el.target.value.length,el.target.className)


})

// submition validation




